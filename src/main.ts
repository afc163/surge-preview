import * as core from '@actions/core';
import * as github from '@actions/github';
import { exec } from '@actions/exec';
import { comment } from './commentToPullRequest';

async function main() {
  const surgeToken = core.getInput('surge_token');
  if (!surgeToken) {
    core.info(`😢 No SURGE_TOKEN provided, skip it.`);
    return;
  }
  const token = core.getInput('github_token', { required: true });
  const dist = core.getInput('dist');
  const octokit = github.getOctokit(token);
  let prNumber: number | undefined;
  core.debug('github.context');
  core.debug(JSON.stringify(github.context, null, 2));
  const { job, payload } = github.context;
  core.debug(`payload.after: ${payload.after}`);
  core.debug(`payload.after: ${payload.pull_request}`);
  const gitCommitSha = payload.after || payload?.pull_request?.head?.sha;

  if (payload.number && payload.pull_request) {
    prNumber = payload.number;
  } else {
    const result = await octokit.repos.listPullRequestsAssociatedWithCommit({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      commit_sha: gitCommitSha,
    });
    const pr = result.data.length > 0 && result.data[0];
    core.debug('listPullRequestsAssociatedWithCommit');
    core.debug(JSON.stringify(pr, null, 2));
    prNumber = pr ? pr.number : undefined;
  }
  if (!prNumber) {
    core.info(`😢 No related PR found, skip it.`);
    return;
  }
  core.info(`Find PR number: ${prNumber}`);

  const fail = (err: Error) => {
    comment({
      repo: github.context.repo,
      number: prNumber!,
      message: `
😭 Deploy PR Preview ${gitCommitSha} failed. [Build logs](https://github.com/${github.context.repo.owner}/${github.context.repo.repo}/actions/runs/${github.context.runId})

<a href="${buildingLogUrl}"><img width="300" src="https://user-images.githubusercontent.com/507615/90250824-4e066700-de6f-11ea-8230-600ecc3d6a6b.png"></a>

<sub>🤖 By [surge-preview](https://github.com/afc163/surge-preview)</sub>
  `,
      octokit,
      header: job,
    });
    core.setFailed(err.message);
  };

  const repoOwner = github.context.repo.owner.replace(/\./g, '-');
  const repoName = github.context.repo.repo.replace(/\./g, '-');
  const url = `${repoOwner}-${repoName}-${job}-pr-${prNumber}.surge.sh`;

  let data;
  try {
    const result = await octokit.checks.listForRef({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      ref: gitCommitSha,
    });
    data = result.data;
  } catch (err) {
    fail(err);
    return;
  }

  core.debug(JSON.stringify(data?.check_runs, null, 2));

  // 尝试获取 check_run_id，逻辑不是很严谨
  let checkRunId;
  if (data?.check_runs?.length >= 0) {
    const checkRun = data?.check_runs?.find((item) => item.name === job);
    checkRunId = checkRun?.id;
  }

  const buildingLogUrl = checkRunId
    ? `https://github.com/${github.context.repo.owner}/${github.context.repo.repo}/runs/${checkRunId}`
    : `https://github.com/${github.context.repo.owner}/${github.context.repo.repo}/actions/runs/${github.context.runId}`;
  comment({
    repo: github.context.repo,
    number: prNumber,
    message: `
⚡️ Deploying PR Preview ${gitCommitSha} to [surge.sh](https://${url}) ... [Build logs](${buildingLogUrl})

<a href="${buildingLogUrl}"><img width="300" src="https://user-images.githubusercontent.com/507615/90240294-8d2abd00-de5b-11ea-8140-4840a0b2d571.gif"></a>

<sub>🤖 By [surge-preview](https://github.com/afc163/surge-preview)</sub>
`,
    octokit,
    header: job,
  });

  const startTime = Date.now();
  try {
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
    await exec(`npx surge ./${dist} ${url} --token ${surgeToken}`);
    comment({
      repo: github.context.repo,
      number: prNumber,
      message: `
🎊 PR Preview ${gitCommitSha} has been successfully built and deployed to https://${url}
  
:clock1: Build time: **${duration}s**

<a href="https://${url}"><img width="300" src="https://user-images.githubusercontent.com/507615/90250366-88233900-de6e-11ea-95a5-84f0762ffd39.png"></a>
  
<sub>🤖 By [surge-preview](https://github.com/afc163/surge-preview)</sub>
  `,
      octokit,
      header: job,
    });
  } catch (err) {
    fail(err);
  }
}

// eslint-disable-next-line github/no-then
main().catch((err) => core.setFailed(err.message));
