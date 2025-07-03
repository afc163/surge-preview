# Surge PR Preview

[![CI status][github-action-image]][github-action-url]

[github-action-image]: https://github.com/afc163/surge-preview/workflows/build-test/badge.svg
[github-action-url]: https://github.com/afc163/surge-preview/actions?query=workflow%3Abuild-test

A GitHub action that preview website in [surge.sh](https://surge.sh/) for your pull requests.

<img width="800" alt="image" src="https://user-images.githubusercontent.com/507615/90243810-2230b480-de62-11ea-9a2c-9e869a2067dd.png">

<img width="800" alt="image" src="https://user-images.githubusercontent.com/507615/91127543-0be3ed80-e6d9-11ea-897f-977c346bbc77.png">

### Pros

Compare to Netlify/Vercel?

- It is **free**.
- It supports multiple preview jobs.

### Usage

Add a workflow (`.github/workflows/preview.yml`):

```yaml
name: 🔂 Surge PR Preview

on: [pull_request]

jobs:
  preview:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write # allow surge-preview to create/update PR comments
    steps:
      - uses: actions/checkout@v4
      - uses: afc163/surge-preview@v1
        id: preview_step
        with:
          surge_token: ${{ secrets.SURGE_TOKEN }}
          dist: public
          build: |
            npm install
            npm run build
      - name: Get the preview_url
        run: echo "url => ${{ steps.preview_step.outputs.preview_url }}"
```

The preview website url will be `https://{{repository.owner}}-{{repository.name}}-{{job.name}}-pr-{{pr.number}}.surge.sh`.

#### Multiple Jobs

```yaml
name: 🔂 Surge PR Preview

on: [pull_request]

permissions:
  pull-requests: write # allow surge-preview to create/update PR comments

jobs:
  preview-job-1:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: afc163/surge-preview@v1
        with:
          surge_token: ${{ secrets.SURGE_TOKEN }}
          dist: public
          build: |
            npm install
            npm run build
  preview-job-2:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: afc163/surge-preview@v1
        with:
          surge_token: ${{ secrets.SURGE_TOKEN }}
          dist: public
          build: |
            npm install
            npm run build
```

The preview website urls will be:

- `https://{{repository.owner}}-{{repository.name}}-preview-job-1-pr-{{pr.number}}.surge.sh`
- `https://{{repository.owner}}-{{repository.name}}-preview-job-2-pr-{{pr.number}}.surge.sh`

### Teardown

When a pull request is closed and teardown is set to 'true', then the surge instance will be destroyed.

```yaml
name: 🔂 Surge PR Preview

on:
  pull_request:
    # when using teardown: 'true', add default event types + closed event type (for teardown)
    types: [opened, synchronize, reopened, closed]
  push:

jobs:
  preview:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write # allow surge-preview to create/update PR comments
    steps:
      - uses: actions/checkout@v4
      - uses: afc163/surge-preview@v1
        with:
          surge_token: ${{ secrets.SURGE_TOKEN }}
          dist: public
          teardown: 'true'
          build: |
            npm install
            npm run build
```


### Usage to deal with PRs created from forked repositories

When someone creates a PR from a forked repository, there is a security challenge: workflows triggered by `pull_request` events do not have access to your to repository secrets (like your surge token) for security reasons.

**Why this is a problem:** Without access to the surge token, the preview deployment will fail.

**Why not use `pull_request_target`?** While this event does provide access to secrets, it executes code from the PR branch with your secrets, creating a security risk. Attackers could potentially steal your secrets by submitting malicious PRs.
Resources:
- https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/
- https://github.com/afc163/surge-preview/commit/4931cbc38d650f631f91974da3ccd4809c88aa1b and https://github.com/afc163/surge-preview/issues/99


**Solution: Use a three-workflow Approach**

This approach separates the build and deployment steps for improved security:

1. **Build workflow**: Builds the site without needing secrets
2. **Deploy workflow**: Deploys the pre-built site using your secrets
3. **Teardown workflow**: Removes the preview when a PR is closed

#### How it works

1. First workflow builds the site and saves it as an artifact
2. Second workflow retrieves the artifact and deploys it to Surge
3. Third workflow handles cleanup when PRs are closed

#### Example Workflows

Here is an example of how to set up these workflows in your repository:

**Build workflow** (triggered by `pull_request`):

```yaml
name: Surge PR Preview - Build Stage

on:
  pull_request:

jobs:
  build-preview:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - name: Build site
        env:
          PR_NUMBER: ${{ github.event.pull_request.number }}
        # Generate a random page, containing the number of the PR
        # Replace with your actual build command
        run: |
          mkdir site
          cp -r public/surge/* site/
          sed -i "s/@PR_NUMBER@/${PR_NUMBER}/g" site/index.html

      - name: Upload site artifact
        uses: actions/upload-artifact@v4
        with:
          name: pr-build-dist # Important: use this same name in the deploy workflow
          path: site/
```

**Deploy workflow** (triggered by `workflow_run`, when the build workflow completes):

```yaml
name: Surge PR Preview - Deploy Stage

on:
  workflow_run:
    workflows: ["Surge PR Preview - Build Stage"]
    types:
      - completed

permissions:
  pull-requests: write # Needed to comment on PRs

jobs:
  # Important - the job id:
  # MUST be unique across all surge preview deployments for a repository as the job id is used in the deployment URL
  # MUST be kept in sync with the job id of the teardown stage (this id is used by the surge-preview action to forge the deployment URL)
  deploy:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.event == 'pull_request' && github.event.workflow_run.conclusion == 'success' }}

    steps:
      - name: Download built site
        uses: dawidd6/action-download-artifact@v8
        with:
          workflow: ${{ github.event.workflow_run.workflow_id }}
          run_id: ${{ github.event.workflow_run.id }}
          name: pr-build-dist  # Must match the name from build workflow
          path: site/

      - name: Deploy to Surge
        uses: afc163/surge-preview@v1
        with:
          surge_token: ${{ secrets.SURGE_TOKEN }}
          github_token: ${{ secrets.GITHUB_TOKEN }}
          build: echo done
          dist: site
          failOnError: true
          teardown: false # Teardown is handled by the separate workflow
```

**Teardown workflow** (triggered when a PR is closed):

```yaml
name: Surge PR Preview - Teardown Stage

on:
  pull_request_target:
    types: [closed]

permissions:
  pull-requests: write # Needed to comment on PRs

jobs:
  deploy: # Must match the job ID from the deploy workflow
    runs-on: ubuntu-latest
    steps:
      - name: Teardown preview site
        uses: afc163/surge-preview@v1
        with:
          surge_token: ${{ secrets.SURGE_TOKEN }}
          github_token: ${{ secrets.GITHUB_TOKEN }}
          failOnError: true
          teardown: true
          build: echo "Cleaning up preview" 
```


#### Troubleshooting

When running the workflow triggered by `workflow_run` event, the surge-preview action retrieves the number of the Pull Request associated with the workflow run by doing API calls.

Occasionally, the API call may hit rate limits, as the search API can use many calls internally. In this case, the error is caught and a warning is logged. Re-running the workflow should resolve the issue.

As a workaround, you can use a [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#about-personal-access-tokens) instead of the GITHUB_TOKEN: this PAT has a higher rate limit errors, so the API calls are more likely to succeed.

**Note**: Using a PAT as github_token input of the surge-preview action has a side effect: the PR comment created by the action will be created by the account to which the PAT belongs.
When using GITHUB_TOKEN, the PR comments are created by the GitHub Actions bot.


#### Limitations

In some situations, it is hard to know if the surge deployment has been done.

When a workflow is triggered by `workflow_run`, it does not appear in the PR checks, so you cannot see whether the workflow has run or if it has failed.
By default, there is no status on the commit. It is possible to add this manually in the workflow, for example by using [set-commit-status-action](https://github.com/myrotvorets/set-commit-status-action).

However, when the workflow runs, the usual comment is updated by the `surge-preview` action to indicate whether the deployment is in progress or if the Surge deployment succeeded or failed.


### Inputs

| Parameter      | Description                                                                                                                                                | Default                                                                                                                                  |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `surge_token`  | [Getting your Surge token](https://surge.sh/help/integrating-with-circleci).                                                                               | An arbitrary token for demonstration. Use your own, otherwise anybody using this action can control your surge domain.                   |
| `github_token` | Used to create Pull Request comment, requires `pull-requests` permission set to `write`. Possible value: `secrets.GITHUB_TOKEN`.                           | [`github.token`](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#using-the-github_token-in-a-workflow) |
| `build`        | Build scripts to run before deploy.                                                                                                                        | `npm install` <br> `npm run build`                                                                                                       |
| `dist`         | Dist folder deployed to [surge.sh](https://surge.sh/).                                                                                                     | `public`                                                                                                                                 |
| `failOnError`  | Set `failed` if a deployment throws error. If not set, fallback to the `FAIL_ON__ERROR` environment variable.                                              | `false`                                                                                                                                  |
| `teardown`     | Determines if the preview instance will be torn down on PR close.                                                                                          | `false`                                                                                                                                  |
| `deploymentId` | A value used as a unique identifier of the deployment for the current PR. It is used in the surge URL and to identify PR comments created by this action. | `job.name`                                                                                                                               |

### Outputs

- `preview_url`: The url for the related PR preview

### Who are using it?

- https://github.com/ant-design/ant-design-pro
- https://github.com/ant-design/pro-components
- https://github.com/antvis/antvis.github.io
- https://github.com/antvis/gatsby-theme-antv
- https://github.com/antvis/g2
- https://github.com/antvis/g2plot
- https://github.com/antvis/g6
- https://github.com/antvis/x6
- https://github.com/umijs/dumi
- https://github.com/alibaba/hooks
- https://github.com/youzan/vant
- https://github.com/didi/cube-ui
- https://github.com/didi/mand-mobile
- https://github.com/jdf2e/nutui
- https://github.com/ant-design-colorful/ant-design-colorful
- https://github.com/iambumblehead/react-dropdown-now
- https://github.com/libwebp-wasm/gif2webp
- https://github.com/libwebp-wasm/img2webp

### Thanks to

- https://github.com/jwalton/gh-find-current-pr
- https://github.com/marocchino/sticky-pull-request-comment
