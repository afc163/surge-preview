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
  core.info(JSON.stringify(pr, null, 2));
  if (!pr || !pr.number) {
    core.info(`No related PR found, skip it.`);
    return;
  }
  core.info(`Find PR number: ${pr.number}`);
  const repoOwner = github.context.repo.owner.replace(/\./g, '-');
  const repoName = github.context.repo.repo.replace(/\./g, '-');
  const url = `${repoOwner}-${repoName}-pr-${pr.number}.surge.sh`;
  comment({
    repo: github.context.repo,
    number: pr.number,
    message: `
⚡️ Deploying PR Preview... [Build logs](https://github.com/${github.context.repo.owner}/${github.context.repo.repo}/actions/runs/${github.context.runId})

<img width="300" src="https://user-images.githubusercontent.com/507615/90240294-8d2abd00-de5b-11ea-8140-4840a0b2d571.gif">

<sub>🤖 By [surge-preview](https://github.com/afc163/surge-preview)</sub>
`,
    octokit,
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
    const surgeToken = core.getInput('surge_token', { required: true });
    await exec(`npx surge ./${dist} ${url} --token ${surgeToken}`);
    comment({
      repo: github.context.repo,
      number: pr.number,
      message: `
🎊 ${github.context.sha} has been successfully built and deployed to https://${url}
  
:clock1: Build time: **${duration}s**
  
<sub>💪🏻 By [afc163/surge-preview](https://github.com/afc163/surge-preview)</sub>
  `,
      octokit,
    });
  } catch (err) {
    comment({
      repo: github.context.repo,
      number: pr.number,
      message: `
😭 Deploy PR Preview failed. [Build logs](https://github.com/${github.context.repo.owner}/${github.context.repo.repo}/actions/runs/${github.context.runId})

<sub>🤖 By [surge-preview](https://github.com/afc163/surge-preview)</sub>
  `,
      octokit,
    });
    core.setFailed(err.message);
   }
}

// eslint-disable-next-line github/no-then
main().catch((err) => core.setFailed(err.message));
