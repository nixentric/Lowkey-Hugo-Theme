---
title: "Deployment"
description: "Build the site and put it online."
weight: 4
tableOfContents: true
---

## Before you deploy

- Set `baseURL` in `hugo.toml` to your real address, for example `https://example.com/`.
- Change `draft: true` to `draft: false` on every post you want to publish.
- Run `npm install` once if you have not already, and commit the `package-lock.json` it creates so every build uses the same versions.

## Build

```bash
hugo
```

The finished site is written to `public/`. A production build also:

- minifies the stylesheet,
- gives it a unique file name each time it changes, so visitors never get a stale cached copy,
- adds an `integrity` hash so browsers refuse a tampered file.

During `hugo server` these steps are skipped to keep reloads fast.

## Hosting

Any static host works, as long as it installs the npm packages before running Hugo, and uses Hugo v0.158.0 or newer.

### Cloudflare Pages

The [theme demo](https://lowkey.nixentric.com) runs here. Create a Pages project from your Git repository and use:

| Setting                | Value                  |
| ---------------------- | ---------------------- |
| Build command          | `npm install && hugo`  |
| Build output directory | `public`               |
| Environment variable   | `HUGO_VERSION` = `0.165.0` |

### Netlify

Add a `netlify.toml` to the root of your site:

```toml
[build]
  command = "npm install && hugo"
  publish = "public"

[build.environment]
  HUGO_VERSION = "0.165.0"
```

### GitHub Pages

Use the GitHub Actions workflow from Hugo's [GitHub Pages guide](https://gohugo.io/host-and-deploy/host-on-github-pages/). It installs your npm packages when it finds a `package-lock.json`, which is another reason to commit that file.

{{< alert info "Submodules in CI" >}}
The theme is a Git submodule, so the build has to fetch it. Cloudflare Pages and Netlify do this automatically. In GitHub Actions, keep <code>submodules: recursive</code> in the checkout step.
{{< /alert >}}
