---
title: "Shortcodes"
description: "Alerts, captioned images and task lists."
weight: 3
tableOfContents: true
---

Shortcodes are small snippets you put in Markdown to get something Markdown cannot do on its own. Lowkey adds three.

## Alert

A colored box that draws attention to a note:

```go-html-template
{{</* alert info "Did you know?" */>}}
Alerts have four colors.
{{</* /alert */>}}
```

The first value is the type, the second is an optional title.

{{< alert info "Info" >}}
Extra context or a helpful tip.
{{< /alert >}}

{{< alert success "Success" >}}
Something worked, or a recommended way of doing things.
{{< /alert >}}

{{< alert warning "Warning" >}}
Something to be careful about.
{{< /alert >}}

{{< alert error "Error" >}}
Something that will break if ignored.
{{< /alert >}}

Leave out the title for a compact box:

{{< alert info >}}
An alert without a title.
{{< /alert >}}

The text inside an alert is HTML, not Markdown. Use tags such as `<b>`, `<code>` and `<a href="…">` for formatting:

```go-html-template
{{</* alert warning */>}}
Run <code>npm install</code> before <b>hugo server</b>.
{{</* /alert */>}}
```

{{< alert warning >}}
Run <code>npm install</code> before <b>hugo server</b>.
{{< /alert >}}

Alerts switch to dark colors in dark mode.

## Image

Shows an image from the post's own folder, with an optional caption. The post must be a [page bundle]({{< relref "posts#posts-with-images" >}}).

```go-html-template
{{</* img src="cat.jpg" alt="A Siamese cat" caption="Meet the office cat." caption-position="center" */>}}
```

| Option             | Required | What it does |
| ------------------ | -------- | ------------ |
| `src`              | yes      | File name inside the post's folder. Wildcards such as `cat.*` also work. |
| `alt`              | no       | Text read by screen readers and shown if the image fails to load. Always fill it in. |
| `caption`          | no       | Text under the image. |
| `caption-position` | no       | `center` or `end`. Leave it out to align the caption left. |

The image gets its real width and height, so the page does not jump while it loads. If the file cannot be found, the build stops and names the post and line:

```text
img shortcode: "dog.jpg" not found in page bundle. "content/posts/my-trip/index.md:12:1"
```

See it in action in the [Markdown Cheat Sheet]({{< relref "/posts/markdown-cheat-sheet#images" >}}).

## Task list

Markdown task lists normally keep their bullet points next to the checkboxes. Put `task-list` on the line before the list to remove them:

```go-html-template
{{</* task-list */>}}

- [x] Write the post
- [ ] Add a cover image
- [ ] Publish
```

{{< task-list >}}

- [x] Write the post
- [ ] Add a cover image
- [ ] Publish

## Hugo's built-in shortcodes

Hugo ships its own shortcodes, and they all work with Lowkey. The most useful ones:

| Shortcode   | Use it for |
| ----------- | ---------- |
| `youtube`   | Embedding a YouTube video by its ID |
| `vimeo`     | Embedding a Vimeo video |
| `gist`      | Embedding a GitHub Gist |
| `figure`    | An image with more options than `img`, including images outside the page bundle |
| `highlight` | Code highlighting with options, inside other shortcodes |

See [Hugo's shortcode documentation](https://gohugo.io/content-management/shortcodes/) for their options. To write your own, see [Overriding templates]({{< relref "/docs/customization/layouts#your-own-shortcodes" >}}).
