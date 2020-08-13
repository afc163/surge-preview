
const core = require('@actions/core');
const { GitHub, context } = require('@actions/github');

async function main() {
  const token = core.getInput('github_token', { required: true });
  const sha = core.getInput('sha');

  const client = new GitHub(token, {});
  const result = await client.repos.listPullRequestsAssociatedWithCommit({
    owner: context.repo.owner,
    repo: context.repo.repo,
    commit_sha: sha || context.sha,
  });

  const pr = result.data.length > 0 && result.data[0];
  
  if (!pr.number) {
    return;
  }

  core.info(`Find PR number: ${pr.number}`);
}

main().catch(err => core.setFailed(err.message));