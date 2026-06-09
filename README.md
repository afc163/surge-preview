<div align="center">

# 🔂 Surge PR Preview

**A GitHub Action that deploys a live preview of your website to [surge.sh](https://surge.sh/) for every pull request.**

[![CI status][ci-image]][ci-url]
[![Marketplace][marketplace-image]][marketplace-url]
[![Release][release-image]][release-url]
[![License][license-image]][license-url]
[![Sponsor][sponsor-image]][sponsor-url]

[ci-image]: https://github.com/afc163/surge-preview/workflows/build-test/badge.svg
[ci-url]: https://github.com/afc163/surge-preview/actions?query=workflow%3Abuild-test
[marketplace-image]: https://img.shields.io/badge/marketplace-surge--pr--preview-blue?logo=github
[marketplace-url]: https://github.com/marketplace/actions/surge-pr-preview
[release-image]: https://img.shields.io/github/v/release/afc163/surge-preview?sort=semver&logo=github
[release-url]: https://github.com/afc163/surge-preview/releases
[license-image]: https://img.shields.io/github/license/afc163/surge-preview
[license-url]: https://github.com/afc163/surge-preview/blob/main/LICENSE
[sponsor-image]: https://img.shields.io/badge/sponsor-%E2%9D%A4-db61a2?logo=githubsponsors
[sponsor-url]: https://github.com/sponsors/afc163

English | [简体中文](./README.zh-CN.md)

</div>

<table>
  <tr>
    <td width="55%"><img alt="PR preview comment" src="https://github.com/user-attachments/assets/e247df64-975d-4ee3-90ee-13eb994b3f17"></td>
    <td width="45%"><img alt="Preview website" src="https://github.com/user-attachments/assets/068ad690-3b7d-4ef4-a80c-a3663d99d5e7"></td>
  </tr>
</table>

## ✨ Why surge-preview?

Compared to Netlify / Vercel:

- 🆓 **It is free.**
- 🧩 **It supports multiple preview jobs.**

## 🎁 Features

Every pull request gets a rich, self-updating preview comment. Beyond the live preview link, you can opt into:

- 📱 **Mobile QR code** — scan the preview URL straight from the comment.
- 🖼️ **Preview screenshot** — see the deployed page inline (via [thum.io](https://www.thum.io/)) with [`screenshot`](#-inputs).
- 🔦 **Lighthouse scores** — performance / accessibility / best-practices / SEO, via [`lighthouse`](#-inputs).
- 📦 **Artifact size report** — built `dist` size and file count, with a diff against the previous deployment.
- 📋 **Failure log** — on a failed build/deploy, the tail of the log is shown in the comment so you don't have to dig through the Actions logs.
- ✅ **Commit check run** — surface the deployment as a PR check with [`setCommitStatus`](#-inputs), useful for the `workflow_run` flow.

All extras are off by default and add no new dependency.

## 📖 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
  - [Multiple Jobs](#multiple-jobs)
  - [Teardown](#teardown)
  - [PRs from Forked Repositories](#-prs-from-forked-repositories)
- [Inputs](#-inputs)
- [Outputs](#-outputs)
- [Who is using it?](#-who-is-using-it)
- [Thanks to](#-thanks-to)

## 🚀 Usage

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

### Multiple Jobs

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

When a pull request is closed and `teardown` is set to `'true'`, the surge instance will be destroyed.

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

## 🔐 PRs from Forked Repositories

When someone creates a PR from a forked repository, there is a security challenge: workflows triggered by `pull_request` events do not have access to your repository secrets (like your surge token) for security reasons.

> [!WARNING]
> **Why this is a problem:** Without access to the surge token, the preview deployment will fail.

> [!CAUTION]
> **Why not use `pull_request_target`?** While this event does provide access to secrets, it executes code from the PR branch with your secrets, creating a security risk. Attackers could potentially steal your secrets by submitting malicious PRs.
>
> Resources:
> - https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/
> - https://github.com/afc163/surge-preview/commit/4931cbc38d650f631f91974da3ccd4809c88aa1b and https://github.com/afc163/surge-preview/issues/99

### Solution: Use a three-workflow approach

This approach separates the build and deployment steps for improved security:

1. **Build workflow** — builds the site without needing secrets, then saves it as an artifact.
2. **Deploy workflow** — retrieves the artifact and deploys the pre-built site using your secrets.
3. **Teardown workflow** — removes the preview when a PR is closed.

<details>
<summary><b>Build workflow</b> (triggered by <code>pull_request</code>)</summary>

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

</details>

<details>
<summary><b>Deploy workflow</b> (triggered by <code>workflow_run</code>, when the build workflow completes)</summary>

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

</details>

<details>
<summary><b>Teardown workflow</b> (triggered when a PR is closed)</summary>

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

</details>

### Troubleshooting

When running the workflow triggered by `workflow_run` event, the surge-preview action retrieves the number of the Pull Request associated with the workflow run by doing API calls.

Occasionally, the API call may hit rate limits, as the search API can use many calls internally. In this case, the error is caught and a warning is logged. Re-running the workflow should resolve the issue.

> [!TIP]
> As a workaround, you can use a [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#about-personal-access-tokens) instead of the `GITHUB_TOKEN`: a PAT has higher rate limits, so the API calls are more likely to succeed.
>
> **Note**: Using a PAT as the `github_token` input has a side effect: the PR comment created by the action will be created by the account to which the PAT belongs. When using `GITHUB_TOKEN`, the PR comments are created by the GitHub Actions bot.

### Limitations

In some situations, it is hard to know if the surge deployment has been done.

When a workflow is triggered by `workflow_run`, it does not appear in the PR checks, so you cannot see whether the workflow has run or if it has failed. By default, there is no status on the commit. You can enable the built-in `setCommitStatus: true` input (which needs `checks: write` permission) to publish the deployment as a commit check run, or add it manually, for example by using [set-commit-status-action](https://github.com/myrotvorets/set-commit-status-action).

However, when the workflow runs, the usual comment is updated by the `surge-preview` action to indicate whether the deployment is in progress or if the Surge deployment succeeded or failed.

## ⚙️ Inputs

| Parameter       | Description                                                                                                                       | Default                                                                                                                                  |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `surge_token`   | [Getting your Surge token](https://surge.sh/help/integrating-with-circleci).                                                      | An arbitrary token for demonstration. Use your own, otherwise anybody using this action can control your surge domain.                   |
| `github_token`  | Used to create Pull Request comment, requires `pull-requests` permission set to `write`. Possible value: `secrets.GITHUB_TOKEN`.  | [`github.token`](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#using-the-github_token-in-a-workflow) |
| `build`         | Build scripts to run before deploy.                                                                                               | `npm install` <br> `npm run build`                                                                                                       |
| `dist`          | Dist folder deployed to [surge.sh](https://surge.sh/).                                                                            | `public`                                                                                                                                 |
| `failOnError`   | Set `failed` if a deployment throws error. If not set, fallback to the `FAIL_ON__ERROR` environment variable.                     | `false`                                                                                                                                  |
| `teardown`      | Determines if the preview instance will be torn down on PR close.                                                                 | `false`                                                                                                                                  |
| `setCommitStatus` | Publish the deployment as a commit check run so it shows up in the PR checks (requires `checks: write`). Especially useful for the `workflow_run` flow, where the deployment otherwise has no status on the commit. | `false`                                                                                            |
| `screenshot`    | Embed a screenshot of the deployed preview in the PR comment (rendered via the [thum.io](https://www.thum.io/) service).           | `false`                                                                                                                                  |
| `lighthouse`    | Run Lighthouse (via the [PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/get-started) API) against the deployed preview and post the scores in the PR comment. | `false`                                                              |

> [!TIP]
> The keyless PageSpeed Insights quota is small and shared across GitHub's runner IPs, so `lighthouse` may occasionally report no scores. Set a `PAGESPEED_API_KEY` (or `PSI_API_KEY`) [env var](https://docs.github.com/en/actions/learn-github-actions/variables) on the step to lift the limit — [get a key here](https://developers.google.com/speed/docs/insights/v5/get-started#APIKey).
>
> ```yaml
>       - uses: afc163/surge-preview@v1
>         with:
>           lighthouse: true
>           # ...other inputs
>         env:
>           PAGESPEED_API_KEY: ${{ secrets.PAGESPEED_API_KEY }}
> ```
>
> Note that `env` sits at the step level, alongside `with` — not inside it.

## 📤 Outputs

- `preview_url`: The url for the related PR preview.

## 💝 Who is using it?

- [ant-design/ant-design-pro](https://github.com/ant-design/ant-design-pro)
- [ant-design/pro-components](https://github.com/ant-design/pro-components)
- [ant-design/ant-design-mini](https://github.com/ant-design/ant-design-mini)
- [ant-design/pro-chat](https://github.com/ant-design/pro-chat)
- [ant-design/pro-flow](https://github.com/ant-design/pro-flow)
- [ant-design/pro-editor](https://github.com/ant-design/pro-editor)
- [ant-design/antd-style](https://github.com/ant-design/antd-style)
- [ant-design/cssinjs](https://github.com/ant-design/cssinjs)
- [antvis/antvis.github.io](https://github.com/antvis/antvis.github.io)
- [antvis/gatsby-theme-antv](https://github.com/antvis/gatsby-theme-antv)
- [antvis/g2](https://github.com/antvis/g2)
- [antvis/g2plot](https://github.com/antvis/g2plot)
- [antvis/g6](https://github.com/antvis/g6)
- [antvis/x6](https://github.com/antvis/x6)
- [antvis/AVA](https://github.com/antvis/AVA)
- [antvis/GPT-Vis](https://github.com/antvis/GPT-Vis)
- [antvis/L7Plot](https://github.com/antvis/L7Plot)
- [react-component/color-picker](https://github.com/react-component/color-picker)
- [react-component/tour](https://github.com/react-component/tour)
- [react-component/portal](https://github.com/react-component/portal)
- [react-component/segmented](https://github.com/react-component/segmented)
- [umijs/dumi](https://github.com/umijs/dumi)
- [alibaba/hooks](https://github.com/alibaba/hooks)
- [youzan/vant](https://github.com/youzan/vant)
- [didi/cube-ui](https://github.com/didi/cube-ui)
- [didi/mand-mobile](https://github.com/didi/mand-mobile)
- [jdf2e/nutui](https://github.com/jdf2e/nutui)
- [gocrane/crane](https://github.com/gocrane/crane)
- [lijinke666/react-music-player](https://github.com/lijinke666/react-music-player)
- [NeteaseYanxuan/OSSA](https://github.com/NeteaseYanxuan/OSSA)
- [NSFI/ppfish-components](https://github.com/NSFI/ppfish-components)
- [catppuccin/website](https://github.com/catppuccin/website)
- [openaps/AndroidAPSdocs](https://github.com/openaps/AndroidAPSdocs)
- [robotframework/robotframework.github.com](https://github.com/robotframework/robotframework.github.com)
- [debezium/debezium.github.io](https://github.com/debezium/debezium.github.io)
- [ant-design-colorful/ant-design-colorful](https://github.com/ant-design-colorful/ant-design-colorful)
- [iambumblehead/react-dropdown-now](https://github.com/iambumblehead/react-dropdown-now)
- [libwebp-wasm/gif2webp](https://github.com/libwebp-wasm/gif2webp)
- [libwebp-wasm/img2webp](https://github.com/libwebp-wasm/img2webp)

## 🙏 Thanks to

- [jwalton/gh-find-current-pr](https://github.com/jwalton/gh-find-current-pr)
- [marocchino/sticky-pull-request-comment](https://github.com/marocchino/sticky-pull-request-comment)

## ❤️ Sponsor

If you find `surge-preview` useful, please consider sponsoring its development. Your support helps keep the project maintained and improved.

- [Sponsor @afc163 on GitHub](https://github.com/sponsors/afc163)
