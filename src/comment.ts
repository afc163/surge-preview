import type { Octokit, Repo } from './commentToPullRequest';

function headerComment(header?: string) {
  return `<!-- Sticky Pull Request Comment${header || ''} -->`;
}

export async function findPreviousComment(
  octokit: Octokit,
  repo: Repo,
  issue_number: number,
  header?: string
) {
  const { data: comments } = await octokit.issues.listComments({
    ...repo,
    issue_number,
  });
  const h = headerComment(header);
  return comments.find((comment) => comment.body?.includes(h));
}

export async function updateComment(
  octokit: Octokit,
  repo: Repo,
  comment_id: number,
  body: string,
  header?: string,
  previousBody?: string | false
) {
  await octokit.issues.updateComment({
    ...repo,
    comment_id,
    body: previousBody
      ? `${previousBody}\n${body}`
      : `${body}\n${headerComment(header)}`,
  });
}

export async function createComment(
  octokit: Octokit,
  repo: Repo,
  issue_number: number,
  body: string,
  header?: string,
  previousBody?: string | false
) {
  await octokit.issues.createComment({
    ...repo,
    issue_number,
    body: previousBody
      ? `${previousBody}\n${body}`
      : `${body}\n${headerComment(header)}`,
  });
}

export async function deleteComment(
  octokit: Octokit,
  repo: Repo,
  comment_id: number
) {
  await octokit.issues.deleteComment({
    ...repo,
    comment_id,
  });
}
