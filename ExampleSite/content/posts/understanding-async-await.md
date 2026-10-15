---
title: "Understanding async/await by Building a Tiny Task Runner"
date: 2026-02-27T13:00:00+07:00
draft: false
description: "Learn how promises, async functions and Promise.all fit together by writing a 15-line task runner."
tableOfContents: true
categories:
  - JavaScript
tags:
  - Async
  - Promises
---

`async` and `await` make asynchronous code read like ordinary code, but it is easy to use them without really knowing what happens underneath. The best way I know to understand them is to build something small.

## A task that takes time

First, a helper that waits for a number of milliseconds. It returns a **promise**: an object that will finish later.

```js
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
```

A "task" in our runner is just a function that returns a promise:

```js
const task = (name, ms) => async () => {
  await sleep(ms);
  console.log(`${name} finished after ${ms} ms`);
  return name;
};
```

## One after another

`await` pauses the function until the promise finishes. Awaiting tasks in a loop runs them in order:

```js
async function runInOrder(tasks) {
  const results = [];
  for (const t of tasks) {
    results.push(await t());
  }
  return results;
}
```

Three tasks of 300, 200 and 100 ms take about **600 ms** in total.

## All at once

`Promise.all` starts every task immediately and waits for all of them:

```js
async function runTogether(tasks) {
  return Promise.all(tasks.map((t) => t()));
}
```

The same three tasks now take about **300 ms**, the length of the slowest one.

## A few at a time

Starting a thousand network requests at once is rude to the server. A small runner can limit how many tasks run together:

```js
async function runLimited(tasks, limit) {
  const results = [];
  let next = 0;

  async function worker() {
    while (next < tasks.length) {
      const index = next++;
      results[index] = await tasks[index]();
    }
  }

  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}
```

Each worker picks the next waiting task as soon as it finishes its current one. With `limit = 2`, never more than two tasks run at the same time.

## What to remember

| Pattern                 | Time for 300 + 200 + 100 ms | Use it when |
| ----------------------- | --------------------------- | ----------- |
| `await` in a loop       | ~600 ms                     | Each step needs the previous result |
| `Promise.all`           | ~300 ms                     | Tasks are independent and few |
| Limited runner          | between the two             | Tasks are independent and many |

{{< alert warning "Errors" >}}
<code>Promise.all</code> rejects as soon as one task fails. Use <code>Promise.allSettled</code> if you want every result, including the failures.
{{< /alert >}}
