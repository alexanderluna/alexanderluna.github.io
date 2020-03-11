---
title: What is an Algorithm and how does it work ?
image: assets/img/algorithm
categories:
  - books
  - ruby
  - python
  - javascript
  - java
  - csharp
---

An algorithm is a set of instructions for accomplishing a task. There are
various algorithms for all types of purposes we will look at 2 specifically in
this post starting with Binary Search.

Binary Search is an algorithm to find an element in a sorted list. If the item
is in the list, it returns the position of the item else it returns null.

Suppose we search a number **1-100**. We could check one by one or start in the
middle **50** if its higher we can skip the first **50** numbers. Then we repeat
this step with **75** and so on.

> 1...50...100
>
> we start at 50

We can already see that binary search is much faster. It doesn't have to search
every single item which reduces the amount of steps required to find the number.
In fact the speed is $$\Theta(log_2n)$$ where **n** is the number of items to
search through. We can compare it to simple search as follows:

1. simple search: $$\Theta(n)$$
2. binary search: $$\Theta(log_2n)$$

> Log is the inverse function to exponentiation. In other words, how many times
> do we multiply a number by itself to get the desired number. ex.
>
> $$
> log_{10}100 = 10 \times 10 \\\\
> log_{10}1000 = 10 \times 10 \times 10 \\\\
> log_{2}8 = 2 \times 2 \times 2
> $$

The notation we saw above is called **Big O** notation and is used to tell how
fast an algorithm is. The **Big O** comes from the greek letter Theta $$\Theta$$
which goes at the beginning of the notation followed by the number of
operations.

| notation                    | examples                                |
| --------------------------- | --------------------------------------- |
| $$\Theta(log_2n)$$          | log time, binary search                 |
| $$\Theta(n)$$               | linear time, simple search              |
| $$\Theta(n \times log_2n)$$ | fast sort, quick sort                   |
| $$\Theta(n^2)$$             | slow sort, selection sort               |
| $$\Theta(n!)$$              | really slow sort, traveling salesperson |

Finally to look at how slow an algorithm can be we will look at the
**Travling Salesperson** algorithm:

> A Salesperson has to go to 5 cities and wants to visit each city while
> traveling. Thus we draw different routes and pick the shortest.

| # of cities | possibilities             |
| ----------- | ------------------------- |
| 5           | 120 permutations (steps)  |
| 6           | 720 permuations (steps)   |
| 7           | 5040 permutations (steps) |

> A Permutation is an ordered Combination.

As the cities increase the steps grow factorial $$\Theta(n!)$$ factorial time.
Unfortunatly, for this problem there is no faster algorithm available.

I hope it became easier to understand what an algorithm is and how it works.

> Reference book **Grokking Algorithms**
