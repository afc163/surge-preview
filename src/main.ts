import * as core from '@actions/core';
import * as github from '@actions/github';
import * as exec from '@actions/exec';

const { context } = github;

async function main() {
  core.info(`start`);
  core.info(`core: ${core}`);
  const token = core.getInput('github_token', { required: true });
  const sha = core.getInput('sha');
  core.info(`222`);
  const octokit = github.getOctokit(token);
  const result = await octokit.repos.listPullRequestsAssociatedWithCommit({
    owner: context.repo.owner,
    repo: context.repo.repo,
    commit_sha: sha || context.sha,
  });

  const pr = result.data.length > 0 && result.data[0];

  if (!pr || !pr.number) {
    return;
  }

  core.info(`Find PR number: ${pr.number}`);

  await exec.exec(core.getInput('build') || `npm install && npm run build`);
  const surgeToken = core.getInput('SURGE_TOKEN');
  await exec.exec(
    `npx surge ./public ${context.repo.owner}-${context.repo.repo}-pr-${pr.number}.surge.sh --token ${surgeToken}}`
  );
}

// eslint-disable-next-line github/no-then
main().catch((err) => core.setFailed(err.message));
