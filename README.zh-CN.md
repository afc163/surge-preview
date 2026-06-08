<div align="center">

# 🔂 Surge PR Preview

**一个 GitHub Action，为每个 Pull Request 把网站实时预览部署到 [surge.sh](https://surge.sh/)。**

[![CI status][ci-image]][ci-url]
[![Marketplace][marketplace-image]][marketplace-url]
[![Release][release-image]][release-url]
[![License][license-image]][license-url]

[ci-image]: https://github.com/afc163/surge-preview/workflows/build-test/badge.svg
[ci-url]: https://github.com/afc163/surge-preview/actions?query=workflow%3Abuild-test
[marketplace-image]: https://img.shields.io/badge/marketplace-surge--pr--preview-blue?logo=github
[marketplace-url]: https://github.com/marketplace/actions/surge-pr-preview
[release-image]: https://img.shields.io/github/v/release/afc163/surge-preview?sort=semver&logo=github
[release-url]: https://github.com/afc163/surge-preview/releases
[license-image]: https://img.shields.io/github/license/afc163/surge-preview
[license-url]: https://github.com/afc163/surge-preview/blob/main/LICENSE

[English](./README.md) | 简体中文

</div>

<table>
  <tr>
    <td width="55%"><img alt="PR preview comment" src="https://github.com/user-attachments/assets/e247df64-975d-4ee3-90ee-13eb994b3f17"></td>
    <td width="45%"><img alt="Preview website" src="https://github.com/user-attachments/assets/068ad690-3b7d-4ef4-a80c-a3663d99d5e7"></td>
  </tr>
</table>

## ✨ 为什么选择 surge-preview？

相比 Netlify / Vercel：

- 🆓 **完全免费。**
- 🧩 **支持多个预览任务（job）。**

## 🎁 功能特性

每个 Pull Request 都会得到一条信息丰富、自动更新的预览评论。除了实时预览链接，你还可以按需开启：

- 📱 **移动端二维码** —— 直接从评论里扫码打开预览地址。
- 🖼️ **预览截图** —— 通过 [`screenshot`](#-输入参数) 在评论里内嵌已部署页面的截图（基于 [thum.io](https://www.thum.io/)）。
- 🔦 **Lighthouse 评分** —— 性能 / 可访问性 / 最佳实践 / SEO，通过 [`lighthouse`](#-输入参数) 开启。
- 📦 **产物体积报告** —— 构建产物 `dist` 的体积与文件数，并与上一次部署做差异对比。
- 📋 **失败日志** —— 构建/部署失败时，在评论里展示日志尾部，无需再翻 Actions 日志。
- ✅ **Commit 检查项** —— 通过 [`setCommitStatus`](#-输入参数) 把部署作为一个 PR check 呈现，对 `workflow_run` 流程尤其有用。

所有额外功能默认关闭，且不引入任何新依赖。

## 📖 目录

- [功能特性](#-功能特性)
- [使用方法](#-使用方法)
  - [多任务（Multiple Jobs）](#多任务multiple-jobs)
  - [清理（Teardown）](#清理teardown)
  - [来自 Fork 仓库的 PR](#-来自-fork-仓库的-pr)
- [输入参数](#-输入参数)
- [输出参数](#-输出参数)
- [谁在使用？](#-谁在使用)
- [致谢](#-致谢)

## 🚀 使用方法

添加一个工作流文件（`.github/workflows/preview.yml`）：

```yaml
name: 🔂 Surge PR Preview

on: [pull_request]

jobs:
  preview:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write # 允许 surge-preview 创建/更新 PR 评论
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

预览网站地址将会是 `https://{{repository.owner}}-{{repository.name}}-{{job.name}}-pr-{{pr.number}}.surge.sh`。

### 多任务（Multiple Jobs）

```yaml
name: 🔂 Surge PR Preview

on: [pull_request]

permissions:
  pull-requests: write # 允许 surge-preview 创建/更新 PR 评论

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

预览网站地址将会是：

- `https://{{repository.owner}}-{{repository.name}}-preview-job-1-pr-{{pr.number}}.surge.sh`
- `https://{{repository.owner}}-{{repository.name}}-preview-job-2-pr-{{pr.number}}.surge.sh`

### 清理（Teardown）

当 Pull Request 关闭且 `teardown` 设为 `'true'` 时，对应的 surge 实例会被销毁。

```yaml
name: 🔂 Surge PR Preview

on:
  pull_request:
    # 使用 teardown: 'true' 时，在默认事件类型基础上加上 closed 事件类型（用于清理）
    types: [opened, synchronize, reopened, closed]
  push:

jobs:
  preview:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write # 允许 surge-preview 创建/更新 PR 评论
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

## 🔐 来自 Fork 仓库的 PR

当有人从 fork 仓库发起 PR 时，会遇到一个安全问题：出于安全考虑，由 `pull_request` 事件触发的工作流无法访问你仓库的 secrets（例如你的 surge token）。

> [!WARNING]
> **为什么这是个问题：** 无法访问 surge token，预览部署就会失败。

> [!CAUTION]
> **为什么不用 `pull_request_target`？** 虽然该事件能访问 secrets，但它会带着你的 secrets 执行来自 PR 分支的代码，存在安全风险。攻击者可能通过提交恶意 PR 来窃取你的 secrets。
>
> 参考资料：
> - https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/
> - https://github.com/afc163/surge-preview/commit/4931cbc38d650f631f91974da3ccd4809c88aa1b 以及 https://github.com/afc163/surge-preview/issues/99

### 解决方案：使用三段式工作流

该方案将构建与部署步骤拆分，以提升安全性：

1. **构建工作流（Build workflow）** —— 无需 secrets 即可构建站点，然后将其保存为 artifact。
2. **部署工作流（Deploy workflow）** —— 取回 artifact，并使用你的 secrets 部署预构建好的站点。
3. **清理工作流（Teardown workflow）** —— 在 PR 关闭时移除预览。

<details>
<summary><b>构建工作流</b>（由 <code>pull_request</code> 触发）</summary>

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
        # 生成一个随机页面，其中包含该 PR 的编号
        # 请替换为你实际的构建命令
        run: |
          mkdir site
          cp -r public/surge/* site/
          sed -i "s/@PR_NUMBER@/${PR_NUMBER}/g" site/index.html

      - name: Upload site artifact
        uses: actions/upload-artifact@v4
        with:
          name: pr-build-dist # 重要：在部署工作流中要使用同样的名字
          path: site/
```

</details>

<details>
<summary><b>部署工作流</b>（由 <code>workflow_run</code> 在构建工作流完成时触发）</summary>

```yaml
name: Surge PR Preview - Deploy Stage

on:
  workflow_run:
    workflows: ["Surge PR Preview - Build Stage"]
    types:
      - completed

permissions:
  pull-requests: write # 用于在 PR 上评论

jobs:
  # 重要 —— 这个 job id：
  # 必须在该仓库所有 surge preview 部署中唯一，因为 job id 会用于拼接部署 URL
  # 必须与清理阶段的 job id 保持一致（surge-preview action 用它来推断部署 URL）
  deploy:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.event == 'pull_request' && github.event.workflow_run.conclusion == 'success' }}

    steps:
      - name: Download built site
        uses: dawidd6/action-download-artifact@v8
        with:
          workflow: ${{ github.event.workflow_run.workflow_id }}
          run_id: ${{ github.event.workflow_run.id }}
          name: pr-build-dist  # 必须与构建工作流中的名字一致
          path: site/

      - name: Deploy to Surge
        uses: afc163/surge-preview@v1
        with:
          surge_token: ${{ secrets.SURGE_TOKEN }}
          github_token: ${{ secrets.GITHUB_TOKEN }}
          build: echo done
          dist: site
          failOnError: true
          teardown: false # 清理由独立的工作流处理
```

</details>

<details>
<summary><b>清理工作流</b>（在 PR 关闭时触发）</summary>

```yaml
name: Surge PR Preview - Teardown Stage

on:
  pull_request_target:
    types: [closed]

permissions:
  pull-requests: write # 用于在 PR 上评论

jobs:
  deploy: # 必须与部署工作流中的 job ID 一致
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

### 故障排查

当工作流由 `workflow_run` 事件触发时，surge-preview action 会通过 API 调用来获取与该工作流运行相关联的 Pull Request 编号。

偶尔这些 API 调用会触发限流，因为 search API 内部可能消耗较多调用次数。这种情况下错误会被捕获并记录一条警告。重新运行工作流通常即可解决。

> [!TIP]
> 一个变通办法是使用 [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#about-personal-access-tokens) 代替 `GITHUB_TOKEN`：PAT 有更高的限流额度，API 调用更可能成功。
>
> **注意**：把 PAT 作为 `github_token` 输入会有一个副作用——action 创建的 PR 评论会以该 PAT 所属账号的身份发出。使用 `GITHUB_TOKEN` 时，PR 评论由 GitHub Actions 机器人创建。

### 局限性

某些情况下，很难判断 surge 部署是否已经完成。

当工作流由 `workflow_run` 触发时，它不会出现在 PR 的 checks 里，因此你无法看到工作流是否运行过、是否失败。默认情况下 commit 上没有任何状态。你可以开启内置的 `setCommitStatus: true` 输入（需要 `checks: write` 权限）把部署发布为一个 commit check run，或者手动添加，例如使用 [set-commit-status-action](https://github.com/myrotvorets/set-commit-status-action)。

不过，工作流运行时 `surge-preview` action 会更新那条常规评论，以表明部署正在进行中，或 Surge 部署是成功还是失败。

## ⚙️ 输入参数

| 参数            | 说明                                                                                                                              | 默认值                                                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `surge_token`   | [获取你的 Surge token](https://surge.sh/help/integrating-with-circleci)。                                                         | 一个仅供演示的随意 token。请使用你自己的，否则任何使用本 action 的人都能操控你的 surge 域名。                                            |
| `github_token`  | 用于创建 Pull Request 评论，需要 `pull-requests` 权限设为 `write`。可选值：`secrets.GITHUB_TOKEN`。                               | [`github.token`](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#using-the-github_token-in-a-workflow) |
| `build`         | 部署前要执行的构建脚本。                                                                                                         | `npm install` <br> `npm run build`                                                                                                       |
| `dist`          | 部署到 [surge.sh](https://surge.sh/) 的产物目录。                                                                                | `public`                                                                                                                                 |
| `failOnError`   | 部署抛出错误时把 action 标记为 `failed`。未设置时回退到 `FAIL_ON__ERROR` 环境变量。                                              | `false`                                                                                                                                  |
| `teardown`      | 决定 PR 关闭时是否销毁预览实例。                                                                                                 | `false`                                                                                                                                  |
| `setCommitStatus` | 把部署发布为一个 commit check run，使其出现在 PR 的 checks 里（需要 `checks: write`）。对 `workflow_run` 流程尤其有用——否则该流程下 commit 上没有任何状态。 | `false`                                                                                            |
| `screenshot`    | 在 PR 评论里内嵌已部署预览的截图（基于 [thum.io](https://www.thum.io/) 服务渲染）。                                               | `false`                                                                                                                                  |
| `lighthouse`    | 对已部署的预览运行 Lighthouse（基于 [PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/get-started) API），并把评分发布到 PR 评论。 | `false`                                                              |

> [!TIP]
> 免 key 的 PageSpeed Insights 额度很小，且由 GitHub runner 的 IP 共享，因此 `lighthouse` 偶尔会报告不出评分。在该步骤上设置 `PAGESPEED_API_KEY`（或 `PSI_API_KEY`）[环境变量](https://docs.github.com/en/actions/learn-github-actions/variables) 即可提升额度 —— [在此获取 key](https://developers.google.com/speed/docs/insights/v5/get-started#APIKey)。
>
> ```yaml
>       - uses: afc163/surge-preview@v1
>         with:
>           lighthouse: true
>           # ...其他输入参数
>         env:
>           PAGESPEED_API_KEY: ${{ secrets.PAGESPEED_API_KEY }}
> ```
>
> 注意 `env` 与 `with` 同级，位于 step 层级 —— 不要写进 `with` 里面。

## 📤 输出参数

- `preview_url`：相关 PR 预览的地址。

## 💝 谁在使用？

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

## 🙏 致谢

- [jwalton/gh-find-current-pr](https://github.com/jwalton/gh-find-current-pr)
- [marocchino/sticky-pull-request-comment](https://github.com/marocchino/sticky-pull-request-comment)
