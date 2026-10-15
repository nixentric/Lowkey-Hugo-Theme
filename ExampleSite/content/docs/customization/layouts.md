---
title: "Overriding templates"
description: "Replace any part of the theme, add shortcodes and use icons."
weight: 2
tableOfContents: true
---

## How overriding works

Copy a template from `themes/enchanted-lowkey/layouts/` to the same path in your site's `layouts/` folder, then edit your copy. Hugo uses your file and ignores the theme's.

For example, to add a line to the footer:

```bash
mkdir -p layouts/partials/footer
cp themes/enchanted-lowkey/layouts/partials/footer/copyright.html layouts/partials/footer/
```

```go-html-template
<!-- layouts/partials/footer/copyright.html -->
<div class="text-xs font-semibold text-gray-500 order-2 sm:order-1">
  © {{ replace .Site.Copyright "{year}" now.Year }} — {{ .Site.Title }}
  <span class="font-normal">· Made with coffee</span>
</div>
```

Copy only the files you want to change, so the rest keeps getting updates.

## Template map

| To change…                            | Copy this file |
| ------------------------------------- | -------------- |
| The page frame around everything      | `_default/baseof.html` |
| Tags inside `<head>`                  | `partials/head/meta.html` |
| The avatar in the header              | `partials/header/avatar.html` |
| The site title in the header          | `partials/header/title.html` |
| The main menu                         | `partials/header/nav.html` |
| The dark mode button                  | `partials/header/theme-button.html` |
| The copyright line                    | `partials/footer/copyright.html` |
| The social links                      | `partials/footer/social.html` |
| The home page                         | `index.html` |
| A post or standalone page             | `_default/single.html` |
| Post lists                            | `_default/list.html` |
| One post in a list                    | `partials/list/default.html` |
| The Newer / Older buttons             | `partials/list/pagination.html` |
| The category and tag overview pages   | `_default/taxonomy.html` |
| Documentation pages                   | `docs/all.html` |
| The documentation sidebar             | `partials/docs/sidebar.html`, `partials/docs/tree.html` |
| How dates are written                 | `partials/utils/date.html` |
| The table of contents box             | `partials/single/table-of-contents.html` |
| Comments                              | `partials/single/comments/` |
| The 404 page                          | `404.html` |
| A shortcode                           | `shortcodes/alert.html`, `img.html`, `task-list.html` |

All paths are relative to `layouts/`.

## Your own shortcodes

Create an HTML file in `layouts/shortcodes/`. Its file name is the shortcode's name:

```go-html-template
<!-- layouts/shortcodes/highlight-box.html -->
<div class="p-4 my-5 rounded-lg bg-emerald-50 dark:bg-emerald-950">
  {{ .Inner }}
</div>
```

```go-html-template
{{</* highlight-box */>}}
This text sits in a green box.
{{</* /highlight-box */>}}
```

Tailwind finds the classes in your shortcode automatically. Hugo's [shortcode guide](https://gohugo.io/templates/shortcode/) explains parameters and more.

## Icons

The theme loads its SVG icons from `assets/icons/` with a small helper:

```go-html-template
{{ partial "utils/icon" "arrow-right" }}
```

To use your own icon, save the SVG as `assets/icons/<name>.svg` in your site and call the helper with that name. Use `stroke="currentColor"` or `fill="currentColor"` in the SVG so the icon takes the color of the text around it. If an icon file is missing, the build stops and names the missing file.

## Adding things to `<head>`

Copy `partials/head/meta.html` and add your tags at the end, for example a verification tag for a search console or a script for another analytics service.
