---
title: "Why Our Robot Fell Over (and What We Learned)"
date: 2026-06-03T16:00:00+07:00
draft: false
description: "A blameless write-up of a lab demo that went wrong, and the three changes we made afterwards."
tableOfContents: true
categories:
  - Research
tags:
  - Robotics
  - Postmortem
---

Last month, in front of forty visitors, our walking robot took three confident steps and fell flat on its side. Nobody was hurt and nothing broke except our pride. This is what happened, written the way we write all our post-mortems: focused on the system, not on blaming people.

## What happened

The robot had walked the same route more than two hundred times in the lab. On demo day it was moved to the lecture hall, which has a polished floor. On the third step its left foot slipped, the balance controller over-corrected, and the robot tipped over.

{{< alert error "Root cause" >}}
The balance controller assumed a floor with at least as much grip as the lab carpet. It had never been tested on a slippery surface.
{{< /alert >}}

## Why we did not catch it

- All two hundred test walks happened on the **same floor**.
- Our simulator modelled friction as a single fixed number.
- The demo checklist covered batteries and network, but not the **environment**.

## What we changed

1. **Varied test surfaces.** The robot now walks on carpet, tiles, wood and a sheet of plastic every week.
2. **Randomised simulation.** Each simulated walk picks a random friction value, so the controller learns to cope with uncertainty instead of one perfect floor.
3. **A site check before demos.** One person visits the room the day before and tests a few steps on its actual floor.

{{< alert success "Result" >}}
In the following month the robot completed 150 walks across five different surfaces without a single fall.
{{< /alert >}}

## The lesson

A robot that works perfectly in one place has only proven that it works in one place. Test where things are different, not where they are comfortable.
