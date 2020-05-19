---
title: Dynamic Programming
image: /assets/img/graphql
categories:
  - books
  - ruby
  - python
  - javascript
  - java
  - csharp
---

The backpack problem is a very famous computer science problem. Assuming we
have a backpack that can hold 4kg worth of items we want to figure out how
many items we can fit while at the same time archiving the highest amount of
value possible.

| item   | price | weight |
| ------ | ----- | ------ |
| stereo | 3000  | 4kg    |
| laptop | 2000  | 3kg    |
| guitar | 1500  | 1kg    |

One potential solution would be to create a set with all possible options and
pick the set with the highest value. However, this process is really slow.

| numer of items | number of possible set |
| -------------- | ---------------------- |
| 3 items        | 8 possible sets        |
| 4 items        | 16 possible sets       |

>  $$\Theta(2^n)$$

We can use dynamic programming ot solve this problem. It works by solving
subproblems and bubbles up to solve the big problem. With the backpack problem
we start with a smaller backpack and work our way up.

Every dynamic programming algorithm starts with a grid where the columns are
the different weights our backpack can hold and the rows are the items.

| items  | 1kg  | 2kg  | 3kg  | 4kg  |
| ------ | ---- | ---- | ---- | ---- |
| stereo | 1500 | 1500 | 1500 | 3000 |
| laptop | 1500 | 1500 | 2000 | 3500 |
| guitar | 1500 | 1500 | 1500 | 1500 |

For each backpack we pick the best option and save it in our grid that way we
don't go over the same items over and over. In the last column the laptop only
weights 3kg thus we have 1kg free space. We can look at our grid and pick the
highest value 1kg option. We do this for every cell in fact. We take the value
of the current item and add the value of the remaining space:

> 4kg = 3kg laptop + 1kg of free space (guitar)

If we add an item to our list, we compare it to the pre calculated cells and
update accordingly rather than recalculate everything. Another neat things, is
that the order of the items does not matter.

## Dynamic Programming caveats

Dynamic programming only works when each subproblem is discrete - it does not
depend on other sub problems. Also, you can only work with whole numbers
(complete item) and not fractions (1/4 of a laptop). Every dynamic programming
solution involves a grid which means the problems has to fit a grid.
