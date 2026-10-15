---
title: "Menus"
description: "Header navigation and footer social links."
weight: 3
tableOfContents: true
---

Both menus live in `config/_default/menus.toml`.

## Main menu

The links under your name in the header:

```toml
[[main]]
    identifier = "home"
    name = "Home"
    url = "/"
    weight = 1

[[main]]
    identifier = "docs"
    name = "Docs"
    url = "/docs/"
    weight = 2

[[main]]
    identifier = "donate"
    name = "Donate"
    url = "https://ko-fi.com/your-name"
    weight = 3
```

| Field        | What it does |
| ------------ | ------------ |
| `identifier` | A unique name for the entry. |
| `name`       | The text shown in the menu. |
| `url`        | A path on your site, such as `/about/`, or a full link to another site. |
| `weight`     | Sort order. Lower numbers come first. |

The entry that matches the page being viewed is highlighted. Links are shown in capitals by the stylesheet, so write the names in normal case.

## Social links

The links on the right side of the footer:

```toml
[[social]]
    identifier = "github"
    name = "GitHub"
    url = "https://github.com/your-name"
    weight = 1

[[social]]
    identifier = "mastodon"
    name = "Mastodon"
    url = "https://mastodon.social/@your-name"
    weight = 2
```

Social links open in a new tab.

### Mastodon verification

Every social link has `rel="me"`, which is what Mastodon looks for to verify a website. To get the green check mark on your profile:

1. Add your Mastodon profile as a `[[social]]` link, as above, and deploy the site.
2. In Mastodon, open **Edit profile** and add your website's address to the extra fields.

Mastodon visits your site, finds the link back to your profile and marks the website as verified.
