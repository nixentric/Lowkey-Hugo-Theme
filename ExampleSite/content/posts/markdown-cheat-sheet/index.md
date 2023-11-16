---
title: "Markdown Cheat Sheet"
draft: false
date: 2022-08-27T09:16:45.000Z
description: "Markdown is a powerful tool for creating rich text using a plain text editor. This cheatsheet is a quick reference for Markdown syntax."
categories:
  - Hello
tags:
  - Hello
  - WhatsApp
---

This Markdown cheat sheet **provides** a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for basic _syntax_ and extended syntax.

# Headings

---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

# Emphasis

---

Emphasis, aka italics, with asterisks or underscores. **Strong emphasis**, aka bold, with asterisks or underscores. Combined emphasis with asterisks and underscores. ~~Strikethrough~~ with two tildes. **_Bold and nested italic_**. **_All bold and italic_**. **_*Bold and italic nested*_**.

# Images

---

{{< img
  src="cat.jpg"
  alt="Cat"
  caption="This is the default position of a figcaption, but it can be centered or at the end." >}}

# Lists

---

## Ordered:

1. First ordered list item
2. Another item
3. Actual numbers don't matter, just that it's a number
   1. 1st.
   1. 2nd.
   1. 3rd.

## Unordered:

- This is a list item
  - This is a nested list item
    - This is a nested list item
  - This is another list item
- This is another list item

## Task:

{{< task-list >}}

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

# Links

---

[This is a link](https://www.example.com).

[This link](https://www.example.com "Link Title") has a title attribute.

# Tables

---

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

# Blockquotes

---

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

You can reference a footnote like this.

> All generalizations are false, including this one. — Mark Twain. [^1]

[^1]: https://www.brainyquote.com/quotes/mark_twain_137872.

# Code

---

Inline `code` has `back-ticks around` it.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```plain
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

You can remove line numbers, change the highlighting theme, and more. See [Syntax Highlighting](https://gohugo.io/content-management/syntax-highlighting/) and [Highlight](https://gohugo.io/getting-started/configuration-markup/#highlight/).

```c {lineNos=false}
#include <stdio.h>

int main()
{
    printf("Hello, World!\n");
    return 0;
}
```

# Alerts

---

{{< alert info "Optional title" >}}
This is an info alert.
{{< /alert >}}

{{< alert warning "Optional title" >}}
This is a warning alert.
{{< /alert >}}

{{< alert error "Optional title" >}}
This is an error alert.
{{< /alert >}}

{{< alert success "Optional title" >}}
This is a success alert.
{{< /alert >}}

# Math

---

You can use LaTeX-style math with `$` and `$$` delimiters. For example, `$x^2$` renders as $x^2$, and `$$\frac{x}{y}$$` renders as: $$\frac{x}{y}$$

We can throw this scary-looking equation at you:

$$
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\ldots} } } }
$$

# Horizontal Rules

---

Three or more... Hyphens `---`, Asterisks `***`, or Underscores `___`.

---

---

---

# Miscellaneous

---

Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use `hover:scroll-auto` to only ~~The world is flat.~~
apply the scroll-auto utility on hover.

term
: definition
: another definition
