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
const createCheck = jest.fn();
const updateCheck = jest.fn();
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
      checks: { listForRef, create: createCheck, update: updateCheck },
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
  inputs.setCommitStatus = '';
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
    // Flush enough microtask turns for the full async chain (build → deploy →
    // measure → check run → comment → optional lighthouse) to settle, even on
    // slower CI where too few turns left the later steps (e.g. the success
    // check-run update) unfinished.
    for (let i = 0; i < 15; i += 1) {
      await flush();
    }
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

  it('treats an explicit failOnError "false" as off', async () => {
    setupPullRequestContext();
    // A literal string 'false' must turn the option OFF — a naive `!!input`
    // would treat it as truthy and wrongly mark the action as failed.
    inputs.failOnError = 'false';
    listForRef.mockRejectedValue(new Error('boom'));

    await runMain();

    expect(setFailed).not.toHaveBeenCalled();
  });

  it('marks the action as failed when failOnError is "true"', async () => {
    setupPullRequestContext();
    inputs.failOnError = 'true';
    listForRef.mockRejectedValue(new Error('boom'));

    await runMain();

    expect(setFailed).toHaveBeenCalledWith('boom');
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

  it('marks the action as failed when main throws before fail is assigned', async () => {
    setupPullRequestContext();
    // @actions/core throws when a required input is missing. This happens at
    // the very top of main(), long before `fail` is assigned, so the bottom
    // `main().catch(err => fail?.(err))` must still surface the failure rather
    // than silently swallowing it via `fail?.()`.
    getInput.mockImplementation((name: string) => {
      if (name === 'github_token') {
        throw new Error('Input required and not supplied: github_token');
      }
      return inputs[name] ?? '';
    });

    await runMain();

    expect(setFailed).toHaveBeenCalledWith(
      'Input required and not supplied: github_token',
    );
  });
});

describe('commit check run', () => {
  it('does not touch the checks API when setCommitStatus is off', async () => {
    setupPullRequestContext();
    listForRef.mockResolvedValue({ data: { check_runs: [] } });
    exec.mockResolvedValue(0);

    await runMain();

    expect(createCheck).not.toHaveBeenCalled();
    expect(updateCheck).not.toHaveBeenCalled();
  });

  it('creates an in-progress check then updates it to success', async () => {
    setupPullRequestContext();
    inputs.setCommitStatus = 'true';
    listForRef.mockResolvedValue({ data: { check_runs: [] } });
    exec.mockResolvedValue(0);
    createCheck.mockResolvedValue({ data: { id: 999 } });
    updateCheck.mockResolvedValue({ data: {} });

    await runMain();

    // building → create with in_progress
    expect(createCheck).toHaveBeenCalledTimes(1);
    expect(createCheck.mock.calls[0][0]).toMatchObject({
      head_sha: 'deadbeef',
      status: 'in_progress',
    });
    // success → update the same check run id to a completed success
    expect(updateCheck).toHaveBeenCalledTimes(1);
    expect(updateCheck.mock.calls[0][0]).toMatchObject({
      check_run_id: 999,
      status: 'completed',
      conclusion: 'success',
    });
  });

  it('swallows checks API errors without failing the deployment', async () => {
    setupPullRequestContext();
    inputs.setCommitStatus = 'true';
    listForRef.mockResolvedValue({ data: { check_runs: [] } });
    exec.mockResolvedValue(0);
    createCheck.mockRejectedValue(new Error('Resource not accessible'));

    await runMain();

    // a warning is logged, but the action is not marked failed
    expect(warning).toHaveBeenCalled();
    expect(setFailed).not.toHaveBeenCalled();
  });
});
