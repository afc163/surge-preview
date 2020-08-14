import * as core from '@actions/core';
import * as github from '@actions/github';
import { exec } from '@actions/exec';
import { comment } from './commentToPullRequest';

async function main() {
  const token = core.getInput('github_token', { required: true });
  const dist = core.getInput('dist');
  const octokit = github.getOctokit(token);
  const result = await octokit.repos.listPullRequestsAssociatedWithCommit({
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    commit_sha: github.context.sha,
  });

  const pr = result.data.length > 0 && result.data[0];
  if (!pr || !pr.number) {
    core.info(`No related PR found.`);
    return;
  }
  core.info(`Find PR number: ${pr.number}`);
  const url = `${github.context.repo.owner}-${github.context.repo.repo}-pr-${pr.number}.surge.sh`;
  comment({
    repo: github.context.repo,
    number: pr.number,
    message: `
⚡️ Deploying PR Preview ([log](https://github.com/${github.context.repo.owner}/${github.context.repo.repo}/actions/runs/${github.context.runId}))

<sub>🤖 By [surge-preview](https://github.com/afc163/surge-preview)</sub>
`,
    octokit,
  });

  const startTime = Date.now();
  if (!core.getInput('build')) {
    await exec(`npm install`);
    await exec(`npm run build`);
  } else {
    const buildCommands = core.getInput('build').split('\n');
    for (const command of buildCommands) {
      core.info(`RUN: ${command}`);
      await exec(command);
    }
  }
  const duration = (Date.now() - startTime) / 1000;
  core.info(`Build time: ${duration} seconds`);
  core.info(`Deploy to ${url}`);
  const surgeToken = core.getInput('surge_token', { required: true });
  try {
    await exec(`npx surge ./${dist} ${url} --token ${surgeToken}`);
  } catch (err) {
    core.setFailed(err.message);
    return;
  }
  comment({
    repo: github.context.repo,
    number: pr.number,
    message: `
🎊 ${github.context.sha} has been successfully deployed to https://${url} !

:clock1: Build time: **${duration}s**

<sub>💪🏻 By [afc163/surge-preview](https://github.com/afc163/surge-preview)</sub>
`,
    octokit,
  });
}

// eslint-disable-next-line github/no-then
main().catch((err) => core.setFailed(err.message));
