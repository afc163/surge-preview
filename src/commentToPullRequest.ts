import * as core from "@actions/core";
import * as github from '@actions/github';
import type { GitHub } from '@actions/github/lib/utils';
import { findPreviousComment, createComment, updateComment, deleteComment } from "./comment";
import { readFileSync } from 'fs';

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
}

export async function comment({ repo, number, message, octokit }: CommentConfig) {
  if (isNaN(number) || number < 1) {
    core.info("no numbers given: skip step");
    return;
  }

  try {
    const previous = await findPreviousComment(octokit, repo, number, '');
    const body = message;

    if (previous) {
      await updateComment(octokit, repo, previous.id, body, '', false);
    } else {
      await createComment(octokit, repo, number, body, '');
    }
  } catch ({ message }) {
    core.setFailed(message);
  }
}