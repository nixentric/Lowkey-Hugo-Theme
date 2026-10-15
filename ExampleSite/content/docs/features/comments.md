---
title: "Comments"
description: "Let readers respond with giscus or Disqus."
weight: 3
tableOfContents: true
---

Comments appear at the bottom of posts and standalone pages. They are not shown on lists or documentation pages. Pick one system; if you turn on both, both are shown.

## giscus

[giscus](https://giscus.app) stores comments in the Discussions tab of a public GitHub repository. It is free, has no ads, and readers sign in with GitHub.

1. Create a public GitHub repository, or use an existing one, and turn on **Discussions** in its settings.
2. Install the [giscus app](https://github.com/apps/giscus) on that repository.
3. Go to [giscus.app](https://giscus.app), enter the repository and pick a discussion category. Copy the values it generates.
4. Paste them into `params.toml`:

```toml
[giscus]
  enable = true
  repo = "your-name/your-repo"
  repoId = "R_kgDO..."
  category = "Announcements"
  categoryId = "DIC_kwDO..."
```

### Optional settings

| Setting            | Default    | What it does |
| ------------------ | ---------- | ------------ |
| `mapping`          | `pathname` | How a page is matched to a discussion. |
| `strict`           | `0`        | `1` only matches discussions with the exact title. |
| `reactionsEnabled` | `1`        | `0` hides emoji reactions on the post. |
| `emitMetadata`     | `0`        | `1` sends discussion data to the page, for advanced use. |
| `inputPosition`    | `top`      | `bottom` puts the comment box under the comments. |
| `theme`            | `light`    | Color theme. `preferred_color_scheme` follows the visitor's system setting. |
| `lang`             | `en`       | Language of the comment widget, such as `pt` or `id`. |
| `lazyLoading`      | off        | `true` loads comments only when the reader scrolls down to them. |

## Disqus

Create a site at [disqus.com](https://disqus.com/admin/create/) and copy its *shortname*. Then add it to `hugo.toml`:

```toml
[services.disqus]
  shortname = "your-shortname"
```

Disqus does not load on `localhost`. You will see a short notice there instead, and the real comments once the site is deployed.

{{< alert info "Moving from an older version?" >}}
Earlier versions read <code>disqusShortname</code> from <code>params.toml</code>, which never actually displayed comments. Use <code>[services.disqus]</code> as shown above.
{{< /alert >}}
