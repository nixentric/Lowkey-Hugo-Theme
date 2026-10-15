---
title: "Styling"
description: "Change colors, fonts and widths with Tailwind CSS."
weight: 1
tableOfContents: true
---

## How the styles are built

All styles live in one file, `assets/css/tailwind.css`. When Hugo builds the site, it runs that file through Tailwind CSS and PostCSS (the packages `npm install` added) and produces a single small stylesheet that contains only the classes your pages actually use.

Tailwind looks for class names in:

- the theme's templates,
- your own templates in `layouts/`,
- your content in `content/`.

So a Tailwind class you use in your own template or in a Markdown file is picked up automatically.

## Changing the stylesheet

Copy the theme's stylesheet into your site:

```bash
mkdir -p assets/css
cp themes/enchanted-lowkey/assets/css/tailwind.css assets/css/tailwind.css
```

Your copy now replaces the theme's. Edit it freely; `hugo server` reloads the page when you save.

{{< alert warning "Keeping up with updates" >}}
Once you copy the stylesheet, style changes in future theme versions do not reach your site. Compare your copy with the theme's file after updating.
{{< /alert >}}

## Accent color

Links, the active page in the docs sidebar and the "Read more" buttons use Tailwind's `emerald` color. Search your copy of `tailwind.css` for `emerald` and replace it with another [Tailwind color](https://v3.tailwindcss.com/docs/customizing-colors), for example `sky` or `rose`:

```css
#content a {
  @apply underline font-bold text-sky-700 hover:text-sky-600 dark:text-sky-300 dark:hover:text-sky-200;
}
```

## Fonts

The theme uses [Inter](https://rsms.me/inter/), served from your own site (`static/fonts/`) so no visitor data goes to a font service. If Inter is missing, the browser falls back to the system font.

To use another font, add its files to your site's `static/fonts/` folder, declare it in your copy of `tailwind.css`, and set it on the page:

```css
@layer base {
  @font-face {
    font-family: 'Literata';
    font-display: swap;
    src: url('../fonts/literata.woff2') format('woff2');
  }

  html {
    font-family: 'Literata', serif;
  }
}
```

## Page width

| Pages              | Maximum width |
| ------------------ | ------------- |
| Posts, lists, home | 768 pixels    |
| Documentation      | 1024 pixels   |

Both have 20 pixels of padding on each side. To change them, [override]({{< relref "layouts" >}}) `layouts/_default/baseof.html` (for every page) or `layouts/docs/all.html` (for docs).

## Dark mode styles

Prefix any class with `dark:` to apply it only in dark mode, for example `bg-white dark:bg-black`. See [Dark mode]({{< relref "/docs/features/dark-mode" >}}).
