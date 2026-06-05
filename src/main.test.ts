/**
 * Regression tests for the temporal-dead-zone bug where `fail()` referenced
 * `buildingLogUrl` before its declaration. The failure path (listForRef throws)
 * is the one that triggered it, so that is the primary case exercised here.
 */

const getInput = jest.fn();
const setOutput = jest.fn();
const setSecret = jest.fn();
const setFailed = jest.fn();
const info = jest.fn();
const debug = jest.fn();
const warning = jest.fn();

const listForRef = jest.fn();
const exec = jest.fn();
const comment = jest.fn();

let mockContext: Record<string, unknown>;

jest.mock('@actions/core', () => ({
  getInput,
  setOutput,
  setSecret,
  setFailed,
  info,
  debug,
  warning,
}));

jest.mock('@actions/exec', () => ({
  exec: (...args: unknown[]) => exec(...args),
}));

jest.mock('@actions/github', () => ({
  get context() {
    return mockContext;
  },
  getOctokit: () => ({
    rest: {
      checks: { listForRef },
      search: { issuesAndPullRequests: jest.fn() },
      issues: {},
    },
  }),
}));

jest.mock('./commentToPullRequest', () => ({
  comment: (...args: unknown[]) => comment(...args),
}));

const flush = () => new Promise((resolve) => setImmediate(resolve));

const inputs: Record<string, string> = {};

function setupPullRequestContext(fork = false) {
  inputs.surge_token = 'token';
  inputs.github_token = 'gh-token';
  inputs.dist = 'public';
  inputs.teardown = 'false';
  inputs.failOnError = '';
  inputs.build = 'npm run build';
  getInput.mockImplementation((name: string) => inputs[name] ?? '');

  mockContext = {
    job: 'build',
    runId: 123,
    repo: { owner: 'afc163', repo: 'surge-preview' },
    payload: {
      number: 1,
      action: 'opened',
      pull_request: {
        head: { sha: 'deadbeef', repo: { fork } },
      },
    },
  };
}

async function runMain() {
  await jest.isolateModulesAsync(async () => {
    require('./main');
    await flush();
    await flush();
    await flush();
  });
}

describe('main failure path (TDZ regression)', () => {
  it('posts a failure comment instead of throwing ReferenceError when listForRef rejects', async () => {
    setupPullRequestContext();
    listForRef.mockRejectedValue(new Error('Resource not accessible'));

    await runMain();

    expect(comment).toHaveBeenCalledTimes(1);
    const message = comment.mock.calls[0][0].message as string;
    // The failure comment must render, which means buildingLogUrl was already
    // initialized (no ReferenceError) when fail() ran.
    expect(message).toContain('failed');
    expect(message).toContain(
      'https://github.com/afc163/surge-preview/actions/runs/123',
    );
    // failOnError is off, so the action should not be marked failed.
    expect(setFailed).not.toHaveBeenCalled();
  });

  it('does not comment on failure when the PR comes from a forked repo', async () => {
    setupPullRequestContext(true);
    listForRef.mockRejectedValue(new Error('boom'));

    await runMain();

    expect(comment).not.toHaveBeenCalled();
  });

  it('exposes the preview_url output and masks the surge token', async () => {
    setupPullRequestContext();
    listForRef.mockRejectedValue(new Error('boom'));

    await runMain();

    expect(setSecret).toHaveBeenCalledWith('token');
    expect(setOutput).toHaveBeenCalledWith(
      'preview_url',
      'afc163-surge-preview-build-pr-1.surge.sh',
    );
  });
});
