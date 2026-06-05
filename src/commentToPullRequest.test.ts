import { comment } from './commentToPullRequest';

const listComments = jest.fn();
const createComment = jest.fn();
const updateComment = jest.fn();

const octokit = {
  rest: {
    issues: {
      listComments,
      createComment,
      updateComment,
    },
  },
  // biome-ignore lint/suspicious/noExplicitAny: test double for Octokit
} as any;

const repo = { owner: 'afc163', repo: 'surge-preview' };

describe('comment', () => {
  it('skips when the PR number is invalid', async () => {
    await comment({
      repo,
      number: Number.NaN,
      message: 'hi',
      octokit,
      header: 'build',
    });
    expect(listComments).not.toHaveBeenCalled();
  });

  it('creates a new comment with a header that has no trailing quote', async () => {
    listComments.mockResolvedValue({ data: [] });
    await comment({
      repo,
      number: 1,
      message: 'deploying',
      octokit,
      header: 'build',
    });
    expect(createComment).toHaveBeenCalledTimes(1);
    const body = createComment.mock.calls[0][0].body as string;
    expect(body).toContain(
      '<!-- Sticky Pull Request Comment: Surge Preview build -->',
    );
    expect(body).not.toContain("build'");
  });

  it('updates the existing comment when one with the same header is found', async () => {
    const header = '<!-- Sticky Pull Request Comment: Surge Preview build -->';
    listComments.mockResolvedValue({
      data: [{ id: 42, body: `old\n${header}` }],
    });
    await comment({
      repo,
      number: 1,
      message: 'updated',
      octokit,
      header: 'build',
    });
    expect(updateComment).toHaveBeenCalledTimes(1);
    expect(updateComment.mock.calls[0][0].comment_id).toBe(42);
    expect(createComment).not.toHaveBeenCalled();
  });

  it('passes the previous comment body to a message builder', async () => {
    const header = '<!-- Sticky Pull Request Comment: Surge Preview build -->';
    listComments.mockResolvedValue({
      data: [{ id: 7, body: `previous body\n${header}` }],
    });
    const builder = jest.fn((previousBody?: string) => `new ${previousBody}`);
    await comment({
      repo,
      number: 1,
      message: builder,
      octokit,
      header: 'build',
    });
    expect(builder).toHaveBeenCalledWith(`previous body\n${header}`);
    expect(updateComment.mock.calls[0][0].body).toContain('new previous body');
  });
});
