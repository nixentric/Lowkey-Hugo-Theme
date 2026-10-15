---
title: "Documentation pages"
description: "Build docs like these, with a sidebar generated from your folders."
weight: 5
tableOfContents: true
---

Every page inside `content/docs/` uses the documentation layout: a wider page with a navigation sidebar. You are looking at it right now.

## Your first docs page

```bash
hugo new content docs/_index.md
hugo new content docs/introduction.md
```

`content/docs/_index.md` becomes the landing page at `/docs/`. Everything else in the folder appears in the sidebar automatically.

Docs pages use the same front matter as posts. These fields matter most:

| Field             | What it does |
| ----------------- | ------------ |
| `title`           | Page heading and sidebar label. |
| `description`     | A short lead under the heading, also used as the meta description. |
| `weight`          | Position in the sidebar. Lower numbers come first. |
| `tableOfContents` | `true` adds a table of contents above the page. |

Docs pages have no date, reading time or comments, because documentation is meant to be read as a reference, not as a dated article.

## Ordering and grouping

A folder with an `_index.md` becomes a group in the sidebar, with its own pages indented underneath. This site's docs are organized like this:

```text
content/docs/
├── _index.md                 # Documentation
├── getting-started/
│   ├── _index.md             # weight: 1
│   ├── installation.md       # weight: 1
│   ├── configuration.md      # weight: 2
│   ├── menus.md              # weight: 3
│   └── deployment.md         # weight: 4
├── writing/
│   ├── _index.md             # weight: 2
│   └── …
└── customization/
    ├── _index.md             # weight: 4
    └── …
```

Pages and groups are sorted by `weight`. Pages without a weight come last, sorted by title. Groups can be nested as deeply as you like.

## On phones and tablets

On screens narrower than 1024 pixels, the sidebar turns into a **Documentation menu** button above the page. Tap it to open the full menu. The page you are on is always highlighted.

## Add the docs to your menu

```toml
[[main]]
    identifier = "docs"
    name = "Docs"
    url = "/docs/"
    weight = 3
```

## Using a different folder name

The layout is tied to the `docs` folder. To use it for another section, for example `content/guides/`, set the type in that section's `_index.md` and pass it down to every page with `cascade`:

```yaml
# content/guides/_index.md
---
title: "Guides"
cascade:
  type: docs
---
```

The sidebar then shows the pages of `guides` instead.
