import * as core from '@actions/core';
import { exec } from '@actions/exec';
import * as github from '@actions/github';
import { comment } from './commentToPullRequest';
import {
  execSurgeCommand,
  getCommentBody,
  parsePreviousDeployment,
} from './helpers';
import {
  fetchLighthouseScores,
  formatLighthouse,
  hasAnyScore,
} from './lighthouse';

let failOnErrorGlobal = false;
let fail: (err: Error) => void;

async function main() {
  // Provide a default fail handler immediately so that errors thrown before the
  // richer `fail` (with PR comment) is assigned are still surfaced, rather than
  // being silently swallowed by `fail?.()` in the bottom catch — which would
  // make the action report success despite having crashed.
  fail = (err: Error) => {
    core.setFailed(err.message);
  };

  const surgeToken =
    core.getInput('surge_token') || '6973bdb764f0d5fd07c910de27e2d7d0';
  core.setSecret(surgeToken);
  const token = core.getInput('github_token', { required: true });
  const dist = core.getInput('dist');
  const teardown =
    core.getInput('teardown')?.toString().toLowerCase() === 'true';
  const lighthouse =
    core.getInput('lighthouse')?.toString().toLowerCase() === 'true';
  const failOnError = !!(
    core.getInput('failOnError') || process.env.FAIL_ON__ERROR
  );
  failOnErrorGlobal = failOnError;
  core.debug(
    `failOnErrorGlobal: ${typeof failOnErrorGlobal} + ${failOnErrorGlobal.toString()}`,
  );
  const octokit = github.getOctokit(token);
  let prNumber: number | undefined;
  let prState: string | undefined;
  core.debug('github.context');
  core.debug(JSON.stringify(github.context, null, 2));
  const { job, payload } = github.context;
  core.debug(`payload.after: ${payload.after}`);
  core.debug(`payload.pull_request: ${payload.pull_request}`);
  const gitCommitSha =
    payload.after ||
    payload?.pull_request?.head?.sha ||
    payload?.workflow_run?.head_sha;
  core.debug(JSON.stringify(github.context.repo, null, 2));

  core.debug(`payload.pull_request?.head: ${payload.pull_request?.head}`);
  const fromForkedRepo = payload.pull_request?.head.repo.fork;

  if (payload.number && payload.pull_request) {
    core.debug('prNumber retrieved from pull_request');
    prNumber = payload.number;
    prState = payload.action;
  } else {
    core.debug('Not a pull_request, so doing a API search');
    // Inspired by https://github.com/orgs/community/discussions/25220#discussioncomment-8697399
    const query = {
      q: `repo:${github.context.repo.owner}/${github.context.repo.repo} is:pr sha:${gitCommitSha}`,
      per_page: 1,
    };
    try {
      const result = await octokit.rest.search.issuesAndPullRequests(query);
      const pr = result.data.items.length > 0 && result.data.items[0];
      core.debug(`Found related pull_request: ${JSON.stringify(pr, null, 2)}`);
      prNumber = pr ? pr.number : undefined;
      prState = pr ? pr.state : undefined;
    } catch (e) {
      // As mentioned in https://github.com/orgs/community/discussions/25220#discussioncomment-8971083
      // from time to time, you may get rate limit errors given search API seems to use many calls internally.
      core.warning(`Unable to get the PR number with API search: ${e}`);
    }
  }
  if (!prNumber) {
    core.info(`😢 No related PR found, skip it.`);
    return;
  }
  core.info(`Found PR number: ${prNumber}, PR status: ${prState}`);

  const commentIfNotForkedRepo = (
    message: string | ((previousBody?: string) => string),
  ) => {
    // if it is forked repo, don't comment
    if (fromForkedRepo) {
      core.info('PR created from a forked repository, so skip PR comment');
      return;
    }
    comment({
      repo: github.context.repo,
      number: prNumber,
      message,
      octokit,
      header: job,
    });
  };

  // Default to the workflow run url; upgraded to the check run url once we know
  // the check run id. Declared before `fail` so it is never referenced in the
  // temporal dead zone when `fail` is invoked early (e.g. listForRef throws).
  let buildingLogUrl = `https://github.com/${github.context.repo.owner}/${github.context.repo.repo}/actions/runs/${github.context.runId}`;
  // Fall back to the context sha so the commit link is never `.../commit/undefined`
  // when the event payload does not carry a head sha.
  const commitSha = gitCommitSha || github.context.sha;
  const commitUrl = `https://github.com/${github.context.repo.owner}/${github.context.repo.repo}/commit/${commitSha}`;

  const repoOwner = github.context.repo.owner.replace(/\./g, '-');
  const repoName = github.context.repo.repo.replace(/\./g, '-');
  const url = `${repoOwner}-${repoName}-${job}-pr-${prNumber}.surge.sh`;

  fail = (err: Error) => {
    core.info('error message:');
    core.info(JSON.stringify(err, null, 2));
    commentIfNotForkedRepo(
      getCommentBody({
        status: 'fail',
        previewUrl: url,
        gitCommitSha: commitSha,
        commitUrl,
        buildingLogUrl,
      }),
    );
    if (failOnError) {
      core.setFailed(err.message);
    }
  };

  core.setOutput('preview_url', url);

  let data;
  try {
    const result = await octokit.rest.checks.listForRef({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      ref: gitCommitSha,
    });
    data = result.data;
  } catch (err) {
    if (err instanceof Error) {
      fail(err);
    }
    return;
  }

  core.debug(JSON.stringify(data?.check_runs, null, 2));

  // 尝试获取 check_run_id，逻辑不是很严谨
  let checkRunId;
  if (data?.check_runs?.length >= 0) {
    const checkRun = data?.check_runs?.find((item) => item.name === job);
    checkRunId = checkRun?.id;
  }

  if (checkRunId) {
    buildingLogUrl = `https://github.com/${github.context.repo.owner}/${github.context.repo.repo}/runs/${checkRunId}`;
  }

  core.debug(`teardown enabled?: ${teardown}`);
  core.debug(`event action?: ${payload.action}`);

  if (teardown && prState === 'closed') {
    try {
      core.info(`Teardown: ${url}`);
      await execSurgeCommand({
        command: ['surge', 'teardown', url, `--token`, surgeToken],
      });

      return commentIfNotForkedRepo(
        getCommentBody({
          status: 'destroy',
          previewUrl: url,
          gitCommitSha: commitSha,
          commitUrl,
          buildingLogUrl,
        }),
      );
    } catch (err) {
      if (err instanceof Error) {
        return fail?.(err);
      }
    }
  }

  // While a new build is running, carry forward the previous deployment that
  // is still live, recovered from the existing comment body.
  commentIfNotForkedRepo((previousBody) =>
    getCommentBody({
      status: 'building',
      previewUrl: url,
      gitCommitSha: commitSha,
      commitUrl,
      buildingLogUrl,
      previous: parsePreviousDeployment(previousBody),
    }),
  );

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

    await execSurgeCommand({
      command: ['surge', `./${dist}`, url, `--token`, surgeToken],
    });

    // Optionally run Lighthouse (via PageSpeed Insights) against the live
    // preview. Best-effort: a failure here yields no scores and is not fatal.
    let lighthouseBlock = '';
    if (lighthouse) {
      core.info('Fetching Lighthouse scores…');
      const scores = await fetchLighthouseScores(`https://${url}`);
      if (hasAnyScore(scores)) {
        lighthouseBlock = formatLighthouse(scores);
      }
    }

    commentIfNotForkedRepo(
      getCommentBody({
        status: 'success',
        previewUrl: url,
        gitCommitSha: commitSha,
        commitUrl,
        buildingLogUrl,
        duration,
        lighthouse: lighthouseBlock,
      }),
    );
  } catch (err) {
    if (err instanceof Error) {
      fail?.(err);
    }
  }
}

// eslint-disable-next-line github/no-then
main().catch((err) => {
  fail?.(err);
});
