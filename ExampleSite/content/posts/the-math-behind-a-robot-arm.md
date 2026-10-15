---
title: "The Math Behind a Robot Arm"
date: 2025-12-09T11:00:00+07:00
draft: false
description: "Forward and inverse kinematics for a two-joint arm, explained with a little trigonometry."
categories:
  - Research
tags:
  - Robotics
  - Math
---

A robot arm has to answer two questions all day long. *If I set my joints to these angles, where does my hand end up?* And the harder one: *which angles do I need to put my hand exactly there?* The first is called **forward kinematics**, the second **inverse kinematics**.

Let us work through both for the simplest useful arm: two straight links on a flat table.

## The setup

The first link has length $l_1$ and turns by an angle $\theta_1$ at the shoulder. The second link has length $l_2$ and turns by $\theta_2$ at the elbow, measured from the direction of the first link.

## Forward kinematics

Where is the hand? Add up the two links as vectors:

$$
x = l_1 \cos\theta_1 + l_2 \cos(\theta_1 + \theta_2)
$$

$$
y = l_1 \sin\theta_1 + l_2 \sin(\theta_1 + \theta_2)
$$

Given the angles, the position follows directly. No surprises.

## Inverse kinematics

Now the target $(x, y)$ is known and the angles are not. The law of cosines gives the elbow angle:

$$
\cos\theta_2 = \frac{x^2 + y^2 - l_1^2 - l_2^2}{2\, l_1 l_2}
$$

Then the shoulder angle follows from the direction of the target, minus the bend caused by the elbow:

$$
\theta_1 = \operatorname{atan2}(y, x) - \operatorname{atan2}\left(l_2 \sin\theta_2,\; l_1 + l_2 \cos\theta_2\right)
$$

## Things the math tells you for free

- If $\cos\theta_2$ comes out greater than 1, the target is **out of reach**: no angle can produce it.
- $\cos\theta_2$ has two solutions, $\theta_2$ and $-\theta_2$. They are the **elbow-up** and **elbow-down** poses, and both reach the same point.
- When the arm is fully stretched, $\theta_2 = 0$, small movements of the hand need large movements of the joints. Real controllers avoid working near this position.

{{< alert info "Beyond two joints" >}}
A human arm has seven joints, so there are infinitely many ways to reach most points. Robots with that many joints usually solve inverse kinematics numerically, step by step, instead of with a formula.
{{< /alert >}}
