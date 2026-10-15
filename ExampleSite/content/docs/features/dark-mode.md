---
title: "Dark mode"
description: "True black, automatic, and switchable with one click."
weight: 1
tableOfContents: true
---

## How it works

- **Automatic:** the first time someone visits, the site matches their system setting. If their phone or computer is in dark mode, so is your site.
- **Follows changes:** if the system switches between light and dark while the page is open (for example at sunset), the site follows along.
- **Toggle:** the sun and moon button in the header switches the theme by hand. The choice is remembered until the browser tab is closed, and it overrides the system setting while it lasts.
- **No flash:** the theme is chosen before the page is drawn, so visitors never see a white page flash before turning dark.

## True black

The dark theme uses a pure black background (`#000`). On OLED and AMOLED screens, black pixels are switched off completely, which gives deeper contrast and uses less battery. Code, the table of contents, tags and buttons sit on very dark gray surfaces so they still stand out.

## Styling your own elements

The theme uses Tailwind's class-based dark mode: the `<html>` element gets a `dark` class. Add a `dark:` prefix to any Tailwind class to apply it only in dark mode:

```html
<div class="bg-white text-gray-900 dark:bg-black dark:text-gray-100">
  Readable in both themes.
</div>
```

The same works with `@apply` in your stylesheet. See [Styling]({{< relref "/docs/customization/styling" >}}).

## Comments in dark mode

giscus has its own theme setting. To make comments follow the visitor's system setting, use:

```toml
[giscus]
  theme = "preferred_color_scheme"
```

See [Comments]({{< relref "comments" >}}) for the other options.
