---
title: "Translations"
description: "Show the theme's buttons and labels in your language."
weight: 5
tableOfContents: true
---

The theme's own text, such as "Read more" or "Page not found", comes from translation files. Your posts are written in whatever language you like.

## Included languages

| Language   | Code | File           |
| ---------- | ---- | -------------- |
| English    | `en` | `i18n/en.toml` |
| Portuguese | `pt` | `i18n/pt.toml` |
| Indonesian | `id` | `i18n/id.toml` |

## Switching language

Set both the language and the locale in `hugo.toml`:

```toml
defaultContentLanguage = 'id'
locale = 'id-ID'
```

`defaultContentLanguage` picks the translation file. `locale` controls `<html lang>` and how [dates]({{< relref "dates" >}}) are written, so "3 Agustus 2026" and "3 hari yang lalu" follow automatically.

## Changing a text

Create a file with the same name in your site's own `i18n/` folder and add only the texts you want to change. Everything else still comes from the theme:

```toml
# i18n/en.toml
[readMore]
    other = 'Continue reading'
```

## Adding a language

1. Copy `themes/lowkey/i18n/en.toml` to `i18n/<code>.toml` in your site, for example `i18n/de.toml`.
2. Translate every value. A missing text is shown as nothing at all, so do not skip any.
3. Set `defaultContentLanguage` and `locale` as shown above.

Consider sending your file as a pull request to the [theme repository](https://github.com/nixentric/Lowkey-Hugo-Theme) so others can use it too.

## All texts

| Key                    | English |
| ---------------------- | ------- |
| `readMore`             | Read more |
| `summary`              | Summary (title of the table of contents) |
| `estimatedReadingTime` | Estimated reading time: %d minutes (`%d` becomes the number) |
| `newerPosts`           | Newer Posts |
| `olderPosts`           | Older Posts |
| `docsMenu`             | Documentation menu |
| `404_title`            | Page not found |
| `404_text`             | Looks like you've followed a broken link… |
