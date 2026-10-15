---
title: "Debounce vs Throttle in JavaScript"
date: 2026-09-10T08:15:00+07:00
draft: false
description: "Two small functions that keep busy events from slowing your page down, and when to use each."
categories:
  - JavaScript
tags:
  - Performance
  - Events
---

Some browser events fire far more often than you need. Typing in a search box fires `input` on every key. Scrolling fires `scroll` dozens of times per second. If each event triggers a network request or a heavy calculation, the page starts to stutter.

Two classic helpers fix this: **debounce** and **throttle**.

## Debounce: wait until things calm down

A debounced function only runs after the events have *stopped* for a given time.

```js
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const search = debounce((query) => {
  fetch(`/api/search?q=${encodeURIComponent(query)}`);
}, 300);

input.addEventListener('input', (event) => search(event.target.value));
```

Type "hugo" quickly and only one request goes out, 300 ms after the last key.

## Throttle: run at a steady pace

A throttled function runs at most once per interval, no matter how many events arrive.

```js
function throttle(fn, interval) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= interval) {
      last = now;
      fn(...args);
    }
  };
}

window.addEventListener('scroll', throttle(updateProgressBar, 100));
```

While the reader scrolls, the progress bar updates ten times per second instead of on every frame.

## Which one?

| Event                    | Use       | Why |
| ------------------------ | --------- | --- |
| Search as you type       | Debounce  | Only the final text matters |
| Window resize            | Debounce  | Only the final size matters |
| Scroll position          | Throttle  | You want updates while it happens |
| Mouse move for a tooltip | Throttle  | Smooth, but not on every pixel |

{{< alert warning "Leading or trailing?" >}}
The throttle above runs on the <b>first</b> event and then skips the rest of the interval. If you also need the <b>last</b> event, for example the final scroll position, add a trailing call or use a library such as Lodash.
{{< /alert >}}
