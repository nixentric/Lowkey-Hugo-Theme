---
title: "Categories and tags"
description: "Group posts and customize the overview pages."
weight: 4
tableOfContents: true
---

## Adding categories and tags

List them in a post's front matter:

```yaml
---
title: "Centering things with CSS"
categories:
  - CSS
tags:
  - Flexbox
  - Grid
---
```

On the post page, categories appear next to the date and tags appear as buttons at the bottom.

Use categories for a few broad topics and tags for many specific ones. A post usually has one category and several tags.

## The pages Hugo creates

| Address              | What it shows |
| -------------------- | ------------- |
| `/categories/`       | Every category with its number of posts |
| `/categories/css/`   | The posts in one category, newest first, split into pages |
| `/tags/`             | Every tag with its number of posts |
| `/tags/flexbox/`     | The posts with one tag |

Link `/categories/` and `/tags/` from the [main menu]({{< relref "/docs/getting-started/menus" >}}) so readers can find them.

## Customizing the overview pages

Add an `_index.md` to give a page a title and some text:

```yaml
# content/categories/_index.md
---
title: "Categories"
---
Browse posts by topic.
```

The same works for a single category or tag. Create a folder named after it:

```yaml
# content/categories/css/_index.md
---
title: "CSS"
header: "Everything CSS"
---
Layout tricks, selectors and modern CSS features.
```

`header` replaces the big heading on the page while `title` is still used in the browser tab and in the overview list.

{{< alert info "Coming from an older version?" >}}
Earlier versions of the theme needed <code>type: taxonomies</code> and <code>layout: "home"</code> in <code>content/categories/_index.md</code> and <code>content/tags/_index.md</code>. That is no longer necessary. You can remove the two lines or leave them in place.
{{< /alert >}}
