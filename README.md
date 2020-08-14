# Surge PR Preview

A GitHub action that preview website in [surge.sh](https://surge.sh/) for your pull requests.

<img width="600" src="https://user-images.githubusercontent.com/507615/90241922-9c5f3a00-de5e-11ea-9b5c-eab44b83476f.png">

### Why not use Netlify/Vercel

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

### Inputs

- `surge_token`: [Getting your Surge token](https://surge.sh/help/integrating-with-circleci).
- `github_token`: `secrets.GITHUB_TOKEN`.
- `build`: build scripts to run before deploy.
- `dist`: dist folder deployed to [surge.sh](https://surge.sh/).