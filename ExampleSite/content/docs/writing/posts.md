---
title: "Posts and pages"
description: "Create posts, fill in front matter, add images and shape the home page."
weight: 1
tableOfContents: true
---

## Create a post

```bash
hugo new content posts/my-first-post.md
```

Hugo creates the file from the theme's post template, and turns the file name into a title:

```yaml
---
title: "My First Post"
date: 2026-10-15T10:00:00+07:00
draft: true # Set 'false' to publish
tableOfContents: false # Enable/disable Table of Contents
description: ''
categories:
  - Uncategories
tags:
  -
---
```

Write your post below the closing `---`. While `draft` is `true`, the post only appears when you run `hugo server -D`.

## Front matter reference

| Field             | What it does |
| ----------------- | ------------ |
| `title`           | Heading of the post and text of the browser tab. |
| `date`            | Publish date. Shown as "3 days ago" while recent, then as a full date. See [Dates]({{< relref "/docs/features/dates" >}}). |
| `draft`           | `true` hides the post from the published site. |
| `description`     | One or two sentences shown under the title in post lists, and used as the page's meta description. |
| `categories`      | One or more categories. See [Categories and tags]({{< relref "taxonomies" >}}). |
| `tags`            | Any number of tags, listed at the bottom of the post. |
| `tableOfContents` | `true` adds a table of contents above the post. |

## Posts with images

Give a post its own folder and keep the images next to it. Hugo calls this a *page bundle*:

```text
content/posts/
└── my-trip/
    ├── index.md
    └── beach.jpg
```

Then show the image with the `img` shortcode:

```go-html-template
{{</* img src="beach.jpg" alt="Sunset over the beach" caption="Last evening of the trip" */>}}
```

The post's address comes from the folder name: `/posts/my-trip/`. See [Shortcodes]({{< relref "shortcodes" >}}) for every option.

## Summaries in lists

Each post in a list shows a short text under its title:

1. the `description` from the front matter, if there is one;
2. otherwise the text before a `<!--more-->` line, if you added one to the post;
3. otherwise the first `summaryLength` words of the post (15 in the example site).

Writing a `description` gives you the most control, and search engines use it too.

## The posts list

`content/posts/_index.md` controls the page at `/posts/`:

```yaml
---
title: "Post"
header: "Latest Posts"
---
See what I've written lately.
```

`header` replaces the big heading on the list page while `title` is still used in the browser tab. The text below the front matter appears under the heading. Lists are split into pages with **Newer posts** and **Older posts** buttons; set the page size with `pagerSize` in [Configuration]({{< relref "/docs/getting-started/configuration" >}}).

## The home page

The home page shows the title and text of `content/_index.md`. It is the place for a short introduction:

```markdown
---
title: "Ahoy There!"
---
I write about robots, research and the tools I use every day.
```

## Standalone pages

Any Markdown file directly in `content/` becomes a page with its own address. For example, `content/about.md` is published at `/about/`. Pages without a `date` hide the date and reading time, which suits pages like About or Contact. Link to them from the [main menu]({{< relref "/docs/getting-started/menus" >}}).

## The 404 page

Visitors who follow a broken link see a short "Page not found" message with your header and footer around it. Its text comes from the `404_title` and `404_text` translations; see [Translations]({{< relref "/docs/features/translations" >}}) to change it.
