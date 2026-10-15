---
title: "A Gentle Introduction to Swarm Robotics"
date: 2026-10-01T14:30:00+07:00
draft: false
description: "How dozens of simple robots can solve problems that no single robot can, using three local rules."
categories:
  - Research
tags:
  - Robotics
  - Swarms
---

A single ant is not very clever. A colony of ants can find the shortest path to food, build bridges out of its own bodies and survive floods. Swarm robotics borrows that idea: instead of one expensive, complicated robot, use many cheap, simple ones that follow local rules.

## No leader, no map

The defining feature of a swarm is that **no robot is in charge**. Each one only knows what its sensors tell it about its immediate neighbours. There is no central computer handing out orders and no shared map of the world.

That sounds like a weakness, but it is the source of the swarm's strengths:

- **Robustness:** if a few robots break, the rest keep going.
- **Scalability:** adding robots does not overload a central controller, because there is none.
- **Flexibility:** the same rules work in a room, a warehouse or a field.

## Three rules for flocking

The classic example comes from computer graphics. In 1987, Craig Reynolds showed that realistic flocks of birds emerge from just three rules applied by every individual.[^boids]

1. **Separation:** steer away from neighbours that are too close.
2. **Alignment:** steer towards the average heading of nearby neighbours.
3. **Cohesion:** steer towards the average position of nearby neighbours.

None of the rules mentions a flock, yet a flock appears. Researchers call this *emergent behaviour*, and it is the heart of swarm robotics.

{{< alert info "Try it yourself" >}}
Search for an online "boids" simulation and play with the strength of each rule. Turn separation off and the flock collapses into a clump; turn cohesion off and it scatters.
{{< /alert >}}

## What we use swarms for in the lab

Our group works on three problems where swarms beat single robots:

1. **Search and rescue:** many small robots cover a collapsed building faster than one large one.
2. **Environmental monitoring:** a swarm of floating sensors maps pollution in a lake as it spreads.
3. **Self-assembly:** robots that attach to each other to form a bridge or a ramp, then separate again.

## The hard part

Designing the local rules is easy. Predicting what a thousand robots will do with them is not. Small changes in the rules can produce completely different group behaviour, which is why most of our time goes into simulation before a single robot moves.

In a future post I will walk through how we test swarm rules in simulation before trusting them on real hardware.

[^boids]: Craig W. Reynolds, "Flocks, Herds and Schools: A Distributed Behavioral Model", SIGGRAPH 1987.
