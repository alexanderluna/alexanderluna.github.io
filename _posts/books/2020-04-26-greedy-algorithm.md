---
title: Simple solutions to problems with Greedy Algorithms
image: /assets/img/selection-sort
categories:
  - books
  - ruby
  - python
  - javascript
  - java
  - csharp
---

A greedy algorithm is simple in each step and that is it's beauty. In each
each step, you pick the optimal move. Suppose we want to fill a classroom for
as much as possible with classes.

| subject  | time frame    | occupied ? |
| -------- | ------------- | ---------- |
| art      | 09:00 - 10:00 | YES        |
| english  | 09:30 - 10:30 |            |
| math     | 10:00 - 11:00 | YES        |
| computer | 10:30 - 11:30 |            |
| music    | 11:00 - 12:00 | YES        |

We simply picked the classes that finish the soonest. This we ended up with:

`art -> math -> music`.

The solution was simple, however, this doesn't work always. If we look at the
knapsack problem where we try to fit the most amount of items in a backpack
based on their value assuming the backpack can hold 30 Kg.

| item   | weight (Kg) | price ($) |
| ------ | ----------- | --------- |
| stereo | 30          | 2500      |
| laptop | 5           | 2000      |
| iphone | 0.1         | 1000      |

Using the greedy algorithm we would pick the stereo because the
simplest step would be to pick the most expensive item that fits and so on. If
we had picked the laptop and iphone we would have had a bigger value.

Another type of greedy algorithm are approximation algorithms. They come close
to the solution but do not fully optimize. You can judge them by their speed and
how close they are to the optimal solution.

If we look at a set covering problem where we have various carriers and each
carrier covers different regions. However, some regions overlap so we want to
pick the carriers that cover the most regions. Each set includes several
carriers so we have to pick the right set.

The solution would be to look at each carriers subset (regions) which is called
a powerset with (2^n) possible sub sets. Now we pick the set with smallest
number of carriers that covers the most regions.

We have sets of carries and each carrier has a sub set of regions.

$$\Theta(2^n)$$

This is really slow. The time grows exponantially with every carrier. If we use
an approximation algorithm, we could:

1. pick carriers that cover the most regions. Even if some regions overlap.
2. Repeat until all regions are covered.

This approach is much faster:

$$\Theta(n^2)$$

| # of carrier | exact approach | estimation approach |
| ------------ | -------------- | ------------------- |
| 5            | 3.2 sec        | 2.5 sec             |
| 32           | 13.2 years     | 102.4 sec           |

In fact, this problem is similar to the travling salesman problem. With each
station we get a new set of options and combinations.

| # of cities | calculation                            | result    |
| ----------- | -------------------------------------- | --------- |
| 2           | $$\ 2\ cities \times 1\ route\ each$$  | 2 routes  |
| 3           | $$\ 3\ cities \times 2\ routes\ each$$ | 6 routes  |
| 4           | $$\ 4\ cities \times 6\ routes\ each$$ | 12 routes |

This is a factorial function. Similar to our exact algorithm to find the best
region coverage. The traveling salesman approach is NP-Complete. NP-Complete
means it is hard to solve and therefore can't be solved quickly. Thus we are
better off using an approximation algorithm to solve NP-Complete problems.
