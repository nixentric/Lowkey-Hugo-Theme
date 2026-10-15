---
title: "SEO & analytics"
description: "What the theme does for search engines, feeds and visitor statistics."
weight: 4
tableOfContents: true
---

## Built in

These work without any setup:

| Feature              | Details |
| -------------------- | ------- |
| Page titles          | The site title on the home page, the page title everywhere else. |
| Meta description     | The page's `description`, or its summary if there is none. The home page uses `description` from `params.toml`. |
| Canonical link       | Every page names its own address, so search engines do not count copies twice. |
| Sitemap              | `/sitemap.xml` lists every page. |
| `robots.txt`         | Allows all search engines and points them to the sitemap. Requires `enableRobotsTXT = true`. |
| RSS feeds            | `/index.xml` for the whole site, plus one per section, category and tag, such as `/posts/index.xml`. |
| Language             | `<html lang>` comes from `locale`, which helps search engines and screen readers. |

{{< alert success "Write descriptions" >}}
A <code>description</code> of one or two sentences on each post is the single most useful thing you can do for search results. It is shown under your link in Google and in post lists on your site.
{{< /alert >}}

## Google Analytics

Add your Google Analytics 4 measurement ID, which starts with `G-`, to `hugo.toml`:

```toml
[services.googleAnalytics]
  id = "G-XXXXXXXXXX"
```

The tracking code is added to every page using Hugo's own Google Analytics template.

### Privacy

Hugo already skips tracking for visitors whose browser sends a *Do Not Track* request. To switch analytics off without removing your ID, add:

```toml
[privacy.googleAnalytics]
  disable = true
```
