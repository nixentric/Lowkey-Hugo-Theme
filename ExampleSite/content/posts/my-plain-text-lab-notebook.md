---
title: "My Lab Notebook Is a Folder of Text Files"
date: 2026-07-22T19:45:00+07:00
draft: false
description: "Why I replaced a paper notebook and three apps with plain Markdown files, and how the setup works."
categories:
  - Tools
tags:
  - Productivity
  - Markdown
---

For years my research notes lived in a paper notebook, two note-taking apps and a pile of sticky notes. Finding anything took longer than redoing the experiment. Two years ago I moved everything into a single folder of Markdown files, and I have not looked back.

## The rules

1. **One file per day**, named by date: `2026-07-22.md`.
2. **One file per project** for anything that lasts longer than a week.
3. **Everything is plain text**, so any editor on any computer can open it, today and in twenty years.

## A typical day

Each daily file starts with the same checklist:

{{< task-list >}}

- [x] Check overnight simulation results
- [x] Write down today's single most important question
- [ ] Run the experiment
- [ ] Record what surprised me

The last item matters most. Surprises are where the interesting research hides, and they are the first thing you forget.

## Finding things again

Because the notes are plain text, ordinary tools work on them. Searching every note I have ever written for a sensor name takes a fraction of a second:

```bash
grep -rn "lidar" ~/notebook
```

## Backups for free

The whole folder is a Git repository. Every evening one command saves the day's work, with a full history of every change:

```bash
git add -A && git commit -m "Notes for $(date +%F)" && git push
```

## What I gave up

Plain text has no handwriting, no drawings and no fancy tables. For sketches I take a photo and drop it next to the note. It is a small price for notes I can always find, read and trust.
