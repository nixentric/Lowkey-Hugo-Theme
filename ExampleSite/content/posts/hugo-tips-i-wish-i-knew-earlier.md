---
title: "Five Hugo Tips I Wish I Knew Earlier"
date: 2025-10-21T20:00:00+07:00
draft: false
description: "Small Hugo habits that make writing and maintaining a static site much more pleasant."
categories:
  - Tools
tags:
  - Hugo
  - Static Sites
---

This blog runs on [Hugo](https://gohugo.io/) and the [Lowkey theme](/docs/). After a few years of using it, these are the habits that saved me the most time.

## 1. Preview drafts while you write

New posts start as drafts, which Hugo leaves out of the site. Add `-D` to see them locally:

```bash
hugo server -D
```

## 2. Keep images next to the post

Give a post its own folder and put its images inside. Moving or renaming the post never breaks the images again:

```text
content/posts/my-trip/
├── index.md
└── beach.jpg
```

## 3. Let Hugo check your links

Linking to another page with `relref` makes the build fail if that page does not exist, so broken links never reach your readers:

```go-html-template
[Read the installation guide]({{</* relref "/docs/getting-started/installation" */>}})
```

## 4. Write a description for every post

The `description` in the front matter shows up in post lists, in search results and in link previews. One good sentence does more for your site than any SEO plugin.

```yaml
description: "Small Hugo habits that make writing and maintaining a static site much more pleasant."
```

## 5. Override instead of editing the theme

Never edit files inside `themes/`. Copy the template you want to change into your own `layouts/` folder instead. Your version wins, and the theme can still be updated safely.

{{< alert success "Bonus tip" >}}
Run <code>hugo --gc</code> now and then. It cleans up processed images and other files that are no longer used.
{{< /alert >}}
