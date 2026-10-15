---
title: "Configuration"
description: "Every setting the theme reads, with defaults and examples."
weight: 2
tableOfContents: true
---

The example site splits its configuration into three files in `config/_default/`:

| File          | What goes in it                                   |
| ------------- | ------------------------------------------------- |
| `hugo.toml`   | Site-wide settings that Hugo itself understands   |
| `params.toml` | Options specific to the Lowkey theme              |
| `menus.toml`  | Header navigation and footer social links ([Menus]({{< relref "menus" >}})) |

## Site settings: `hugo.toml`

```toml
baseURL = 'https://example.com/'
title = 'Lowkey Hugo'
locale = 'en-US'
defaultContentLanguage = 'en'
theme = 'enchanted-lowkey'
copyright = '{year}'
enableRobotsTXT = true
summaryLength = 15

[pagination]
  pagerSize = 5

[services.disqus]
  shortname = ''

[services.googleAnalytics]
  id = ''
```

| Setting                       | What it does |
| ----------------------------- | ------------ |
| `baseURL`                     | The full address of your live site. Used for canonical links, the sitemap and RSS feeds. |
| `title`                       | Your site name. Shown in the header, the footer and the browser tab of the home page. |
| `locale`                      | Language and region, such as `en-US`, `pt-BR` or `id-ID`. Sets `<html lang>`, the date format and the language of relative dates like "3 days ago". |
| `defaultContentLanguage`      | Which translation file in `i18n/` supplies button and label text. See [Translations]({{< relref "/docs/features/translations" >}}). |
| `copyright`                   | Footer text after the © sign. `{year}` is replaced with the current year when the site is built, so `2019 - {year}` always stays up to date. |
| `enableRobotsTXT`             | Creates a `robots.txt` that lets search engines crawl the site and points them to your sitemap. |
| `summaryLength`               | How many words Hugo keeps for automatic summaries in post lists. |
| `pagination.pagerSize`        | Posts per page on lists. Hugo's default is 10. |
| `services.disqus.shortname`   | Turns on Disqus comments. See [Comments]({{< relref "/docs/features/comments" >}}). |
| `services.googleAnalytics.id` | Turns on Google Analytics 4. See [SEO & analytics]({{< relref "/docs/features/seo-analytics" >}}). |

## Theme settings: `params.toml`

```toml
description = "Notes on robots, research and the tools I use."
avatar = "img/profile-picture.jpg"
favicon = "icons/favicon.ico"

[giscus]
  enable = false
```

| Setting       | Default                   | What it does |
| ------------- | ------------------------- | ------------ |
| `description` | none                      | Meta description of the home page, shown by search engines under your site name. |
| `avatar`      | `img/profile-picture.jpg` | Picture in the header. The path is relative to the `assets/` folder. The image is cropped to a square and shown as a circle. |
| `favicon`     | `icons/favicon.ico`       | Browser tab icon. The path is relative to the `assets/` folder. |
| `giscus`      | disabled                  | Comment settings. See [Comments]({{< relref "/docs/features/comments" >}}). |

### Using your own avatar and favicon

Put the files in your site's `assets/` folder, not in `static/`. Hugo has to find the avatar there to resize it.

```text
my-blog/
└── assets/
    ├── img/me.jpg
    └── icons/favicon.ico
```

```toml
avatar = "img/me.jpg"
favicon = "icons/favicon.ico"
```

Any size works for the avatar. Hugo crops and resizes it to 160 × 160 pixels, sharp enough for high-resolution screens.

## Code highlighting

Code blocks are colored by Hugo's built-in highlighter. The example site uses the Dracula style:

```toml
[markup.highlight]
  style = 'dracula'
  noClasses = true
  lineNos = false
  tabWidth = 4
```

Change `style` to any name from the [style gallery](https://xyproto.github.io/splash/docs/), for example `github-dark`, `monokai` or `nord`. Set `lineNos = true` to number every code block, or turn numbers on for a single block as shown in [Markdown & code]({{< relref "/docs/writing/markdown" >}}).
