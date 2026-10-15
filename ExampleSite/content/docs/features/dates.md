---
title: "Dates"
description: "Relative dates for new posts, localized dates for everything else."
weight: 2
tableOfContents: true
---

## What readers see

| Post published         | Shown as (English)      |
| ---------------------- | ----------------------- |
| Less than a day ago    | "5 hours ago"           |
| Yesterday              | "yesterday"             |
| A few days ago         | "3 days ago"            |
| One to four weeks ago  | "last week", "2 weeks ago" |
| One to two months ago  | "last month"            |
| More than two months ago | "August 3, 2026"      |

Hover over any date to see the full day and time, for example *Monday, August 3, 2026, 10:00 am*.

## Localized automatically

Both kinds of dates follow the `locale` in `hugo.toml`. No translation files are needed:

| `locale` | Recent post          | Older post         |
| -------- | -------------------- | ------------------ |
| `en-US`  | 3 days ago           | August 3, 2026     |
| `id-ID`  | 3 hari yang lalu     | 3 Agustus 2026     |

## Why relative dates are made in the browser

Hugo builds your site once and serves the same files until the next build. If "3 days ago" were written into the page at build time, it would still say "3 days ago" a month later.

So Hugo writes the full date into the page, and a few lines of JavaScript turn recent dates into relative ones when a visitor opens the page. That means:

- the text is always correct, even if you have not rebuilt the site for weeks;
- search engines and visitors without JavaScript still see a real date;
- the machine-readable date in the `datetime` attribute never changes.

## Pages without a date

Leave `date` out of the front matter, as on the About page, and the date and reading time are hidden.
