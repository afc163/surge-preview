import * as core from '@actions/core';
import * as github from '@actions/github';
import { exec } from '@actions/exec';

async function main() {
  core.info(`start`);
  const token = core.getInput('github_token', { required: true });
  const sha = core.getInput('sha');
  const octokit = github.getOctokit(token);
  const result = await octokit.repos.listPullRequestsAssociatedWithCommit({
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    commit_sha: sha || github.context.sha,
  });

  const pr = result.data.length > 0 && result.data[0];
  if (!pr || !pr.number) {
    core.info(`No related PR found.`);
    return;
  }
  core.info(`Find PR number: ${pr.number}`);

  if (!core.getInput('build')) {
    await exec(`npm install`);
    await exec(`npm run build`);
  } else {
    const buildCommands = core.getInput('build').split('\n');
    for (const command of buildCommands) {
      core.info(command);
      await exec(command);
    }
  }
  const surgeToken = core.getInput('surge_token', { required: true });
  await exec(
    `npx surge ./public ${github.context.repo.owner}-${github.context.repo.repo}-pr-${pr.number}.surge.sh --token ${{surgeToken}}`
  );
}

// eslint-disable-next-line github/no-then
main().catch((err) => core.setFailed(err.message));
