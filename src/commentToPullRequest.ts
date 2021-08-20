import * as core from '@actions/core';
import type { GitHub } from '@actions/github/lib/utils';
import { createComment, findPreviousComment, updateComment } from './comment';

export type Octokit = InstanceType<typeof GitHub>;
export type Repo = {
  owner: string;
  repo: string;
};

interface CommentConfig {
  repo: Repo;
  number: number;
  message: string;
  octokit: Octokit;
  header: string;
}

export async function comment({
  repo,
  number,
  message,
  octokit,
  header,
}: CommentConfig) {
  if (isNaN(number) || number < 1) {
    core.info('no numbers given: skip step');
    return;
  }
  const prefixedHeader = `: Surge Preview ${header}'`;

  try {
    const previous = await findPreviousComment(
      octokit,
      repo,
      number,
      prefixedHeader
    );
    const body = message;

    if (previous) {
      await updateComment(
        octokit,
        repo,
        previous.id,
        body,
        prefixedHeader,
        false
      );
    } else {
      await createComment(octokit, repo, number, body, prefixedHeader);
    }
  } catch (err) {
    core.setFailed(err.message);
  }
}
