---
title: "Centering Things in CSS, Once and for All"
date: 2026-10-12T09:00:00+07:00
draft: false
description: "Four reliable ways to center an element, and how to pick the right one."
tableOfContents: true
categories:
  - CSS
tags:
  - Flexbox
  - Grid
  - Layout
---

Centering used to be the punchline of every CSS joke. Today it is a solved problem, with a handful of techniques that each fit a different situation. Here are the four I actually use.

## 1. Grid: the one-liner

When a container has a single child that should sit in the middle, Grid is the shortest answer:

```css
.container {
  display: grid;
  place-items: center;
}
```

`place-items` sets both `align-items` and `justify-items` at once. It centers the child horizontally and vertically, whatever its size.

## 2. Flexbox: when there are siblings

Flexbox shines when several items share a row and you want the whole group centered:

```css
.toolbar {
  display: flex;
  justify-content: center; /* along the row */
  align-items: center;     /* across the row */
  gap: 1rem;
}
```

## 3. Auto margins: centering a block of text

For an article or a card with a maximum width, automatic margins are still the simplest tool:

```css
.article {
  max-width: 65ch;
  margin-inline: auto;
}
```

`margin-inline` sets the left and right margins in one go, and it respects right-to-left languages.

## 4. Absolute positioning: overlays

A badge on top of an image, or a spinner over a loading card, needs to leave the normal flow:

```css
.overlay {
  position: absolute;
  inset: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
}
```

## Which one should I use?

| Situation                         | Use |
| --------------------------------- | --- |
| One child in a box                | Grid with `place-items` |
| A row of items                    | Flexbox |
| A readable column of text         | `margin-inline: auto` |
| Something floating over content   | `position: absolute` with `inset: 0` |

{{< alert success "Rule of thumb" >}}
Reach for Grid first. Only switch when you need a row of siblings, a text column, or an overlay.
{{< /alert >}}
