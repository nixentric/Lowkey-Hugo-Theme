---
title: "Dark Mode with CSS Custom Properties"
date: 2026-04-18T10:20:00+07:00
draft: false
description: "Build a dark theme that follows the system setting and can be toggled by hand, with a few lines of CSS."
categories:
  - CSS
tags:
  - Dark Mode
  - Custom Properties
---

Dark mode does not need a framework. CSS custom properties, also called CSS variables, make it a matter of swapping a few colors.

## Step 1: name your colors

Instead of writing colors directly into every rule, give them names on the root element:

```css
:root {
  --bg: #ffffff;
  --text: #1f2937;
  --accent: #047857;
}

body {
  background: var(--bg);
  color: var(--text);
}

a {
  color: var(--accent);
}
```

## Step 2: follow the system setting

Redefine the same names when the visitor's device is in dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #000000;
    --text: #d1d5db;
    --accent: #6ee7b7;
  }
}
```

Every rule that uses `var(--bg)` updates automatically. There is nothing else to change.

## Step 3: let visitors choose

Some people want dark mode on a light system, or the other way round. A class on the `<html>` element can override the system setting:

```css
:root.dark {
  --bg: #000000;
  --text: #d1d5db;
  --accent: #6ee7b7;
}
```

```js
document.documentElement.classList.toggle('dark');
```

This is the approach the Lowkey theme uses, through Tailwind's `dark:` classes.

## Step 4: fix the form controls

Scrollbars, checkboxes and date pickers are drawn by the browser. Tell it which themes your page supports, and it will draw dark versions too:

```css
:root {
  color-scheme: light dark;
}
```

{{< alert info "Pure black or dark gray?" >}}
Pure black (<code>#000</code>) saves battery on OLED screens and gives the strongest contrast. Very dark grays look softer on regular LCD screens. Either is fine, as long as the text stays easy to read.
{{< /alert >}}
