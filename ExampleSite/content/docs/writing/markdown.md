---
title: "Markdown & code"
description: "Code highlighting, tables, footnotes, math, emoji and the table of contents."
weight: 2
tableOfContents: true
---

Lowkey styles everything Hugo's Markdown renderer produces. The [Markdown Cheat Sheet]({{< relref "/posts/markdown-cheat-sheet" >}}) post shows each element in a real post; this page explains the features that need a little setup.

## Code blocks

Fence code with three backticks and name the language:

````markdown
```js
const greet = (name) => `Hello, ${name}!`;
```
````

Which renders as:

```js
const greet = (name) => `Hello, ${name}!`;
```

Turn on line numbers or highlight lines for a single block:

````markdown
```python {linenos=true, hl_lines=[2]}
def add(a, b):
    return a + b
```
````

```python {linenos=true, hl_lines=[2]}
def add(a, b):
    return a + b
```

Wide code scrolls sideways inside its box, so it never stretches the page on a phone. To change the colors, see [code highlighting]({{< relref "/docs/getting-started/configuration#code-highlighting" >}}).

## Tables

```markdown
| Plan  | Price |
| ----- | ----: |
| Free  |    $0 |
| Pro   |    $9 |
```

| Plan  | Price |
| ----- | ----: |
| Free  |    $0 |
| Pro   |    $9 |

## Footnotes

```markdown
Lowkey is inspired by Adam Wathan's blog.[^1]

[^1]: https://adamwathan.me/
```

Footnotes are collected at the bottom of the page in a smaller font. Long links inside them wrap instead of running off the screen.

## Definition lists

```markdown
Hugo
: A static site generator written in Go.
```

Hugo
: A static site generator written in Go.

## Math

Math is rendered in the browser by MathJax, which loads on every page. Wrap inline formulas in single dollar signs and display formulas in double dollar signs:

```markdown
Einstein's famous equation is $E = mc^2$.

$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$
```

Einstein's famous equation is $E = mc^2$.

$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$

A formula wider than the screen scrolls sideways inside its own box.

## Emoji

Emoji shortcodes such as `:rocket:` and `:tada:` turn into :rocket: and :tada: in posts, pages and documentation. The [emoji cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/) lists the codes.

## Table of contents

Add `tableOfContents: true` to the front matter. A box with links to every second- and third-level heading (`##` and `###`) appears above the content, like the one at the top of this page.

```yaml
---
title: "A long guide"
tableOfContents: true
---
```

## Raw HTML

For safety, Hugo leaves raw HTML out of Markdown files by default. Use a [shortcode]({{< relref "shortcodes" >}}) instead, or allow HTML in `hugo.toml` if you trust everyone who writes content:

```toml
[markup.goldmark.renderer]
  unsafe = true
```
