# Surge PR Preview

A GitHub action that preview website in [surge.sh](https://surge.sh/) for your pull requests.

![](https://user-images.githubusercontent.com/507615/90243810-2230b480-de62-11ea-9a2c-9e869a2067dd.png)

![](https://user-images.githubusercontent.com/507615/90243357-58b9ff80-de61-11ea-8426-9b202d53f7ab.png)

### Compare to Netlify/Vercel?

- It is **free**.

### Usage

Add a workflow (`.github/workflows/preview.yml`):

```yaml
name: 🔂 Surge PR Preview

on: [push]

jobs:
  preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: afc163/surge-preview@v1
        with:
          surge_token: ${{ secrets.SURGE_TOKEN }}
          github_token: ${{ secrets.GITHUB_TOKEN }}
          build: |
            npm install
            npm run build
          dist: public
```

The preview website url will be `https://{{repository.owner}}-{{repository.name}}-pr-{{pr.number}}.surge.sh`.

### Inputs

- `surge_token`: [Getting your Surge token](https://surge.sh/help/integrating-with-circleci).
- `github_token`: `secrets.GITHUB_TOKEN`.
- `build`: build scripts to run before deploy.
- `dist`: dist folder deployed to [surge.sh](https://surge.sh/).
