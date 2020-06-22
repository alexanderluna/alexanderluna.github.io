---
title: A Primer on Data Structures and Algorithms
image: /assets/img/bundle
categories:
  - books
  - ruby
  - python
  - javascript
  - java
  - csharp
---

Algorithms and data structures are much more than abstract concepts. Mastering
them enables you to write code that runs faster and more efficiently, which is
particularly important for today's web and mobile apps. We will cover data
structures and algorithms which can be used daily in production code.

## Why Data Structures Matter

Progamming evolves around data. Data is a broad term that refers to all types of
information. Data Structures refer to how data is organized. Organization of
data can greatly impact how fast our code runs.

An array is the most basic data structure in computer science. We analyze the
performance of data structures through common operations.

- read
- search
- insert
- delete

When we **read** from an array it takes just one step since we can access
everything by index. When **searching** an array, we look wether a particular
value exists in an array and what its index is. For N-items in an array, linear
search takes N-steps. When **inserting** an item into an array, it depends
where we want to insert it. It the worst-case scenario it takes N+1 because we
have to shift all items. When **deleting** from an array we do something similar
as with inserting so it takes N-steps if we have to shuffle all items
afterwards.

A different data structure is a Set. It doesn't allow duplicate values to be
contained. All operations except insertion are the same in speed compared to an
array. Insertion requires an extra step to check if an item is already in the
set. It takes 2N+1 steps. 1N to check if the item exists, 1N to shift the other
items and 1 step to insert the item.

## Why Algorithms Matter

> An algorithm is simply a particular process of solving a problem.

When working with an ordered array compared to an unordered array we can make
use of other algorithms than linear search. Inserting items is slow because we
have to insert at a specific spot and then shift the other items. However,
searching can become faster. We can use binary search. In binary search, we
start in the middle and check if the value is bigger or smaller than the target.
We can skip half the items this way until we find the target value.

At 100 itms, linear search takes 100 steps and binary search 7.

- linear search: as many steps as items
- binary search: 1 step everytime items double

## Big O Notation

Computer scientists use a mathematic concept to describe the efficiency of
algorithms known as **Big O** notation.

Big O notation focuses on the number of steps that an algorithm takes. An
algorithm that takes always 1 step, is written as $$\Theta(1)$$. An algorithm
that depends on the number of itmes, is written as $$\Theta(N)$$.

- $$\Theta(1)$$: Constant Time
- $$\Theta(N)$$: Linear Time

> Big O generally refers to the worst case scenario.

If we look at binary search it takes more than $$\Theta(1)$$ but less than
$$\Theta(N)$$. It takes $$\Theta(log_2N)$$.

> Log N means that the number of steps increase by one each time the data
> doubles. Logarithms are the inverse of exponents.

In order to solve $$\Theta(log_2N)$$, ask yourself how often you have to
multiply 2 to get N.

$$\Theta(log_28) = 3\ or\ (2*2*2)$$

For binary search this means

| # of elements | $$\Theta(N)$$ | $$\Theta(log_2N)$$ |
| ------------- | ------------- | ------------------ |
| 8             | 8             | 3                  |
| 16            | 16            | 4                  |
| 32            | 32            | 5                  |

## Speeding up Code

As we saw big O allows us to compare algorithms and pick them based on speed.
Sorting algorithms have been the focus of computer science over the past years.
A common sorting algorithm is **bubble sort**.

1. pick 2 itms and check if they are in order
2. if out of order swap them
3. else do nothing
4. move to the next pointer
5. repeat until sorted

Bubble sort does comparisons and swaps. We do multiple comparisons and swaps to
sort a list. In fact, exponential in relation to the number of items
$$\Theta(N^2)$$.

If we were to check if a list has duplicate values we could use a nested for
loop to check each item. However, this takes $$\Theta(N^2)$$ time. All nested
for loops perform bad.

A linear solution to this problem would be to store numbers encounters in a
second array at the index the number represents. If a given number is not
undefined or null it means we found a duplicate.

## Optimizing Code

Big O is a tool to determine which algorithm to use for a given situation.
However, it isn't the only tool.

We will look at **selection sort** which is a different sorting algorithm. It
works in 3 steps.

1. Check each cell of an array and keep track of the smallest value in the array
2. Swap the lowest value position with where we started in the array. Next time,
we can skip the first item because it is already sorted.
3. Repeat until the data is sorted

If we look at the performance we do

$$(N+1) + (N-2) + (N-3)\ ...\ +1$$

As for swaps we do 0 to 1 swap each time. In comparison, for bubble sort we have
to make 1 swap for each comparison. This makes bubble sort take twice as many
steps as selection sort.

$$Selection\ Sort:\ \Theta(\frac{n^2}{2})\ or \Theta(n^2)$$

> Big O ignores constants thus we remove the division. The resulting big O
> notation is the same for bubble sort. Although, as we saw, selection sort
> performs less steps.

Big O notations helps us visualize the long term performance of an algorithm.
On the long run, constants don't play such an important role because different
classifications will eventually perform differently. Thus, the purpose of Big O
is to classify algorithms.

$$\Theta(n^2)$$ will be slower than $$\Theta(log_2n)$$. That is why we can
ingore the constant. Big O helps us classify different algorithms into different
classes. If two algorithms fall under the same category, we have to do further
analysis by looking at the amount of steps it takes for each algorithm.

## Optimizing Optimisticly

When evaluating the efficiency of an algorithm, we focuse on the number of steps
in the worst case scenario. Thus, the result turns out good most of the time.
However, looking at all the scenarios can help us take pick the right algorithm
for the problem at hand.

> Previously, we looked at Bubble and Selection sort both having an efficiency
> of $$\Theta(N^2)$$ despite Selection sort being twice as fast.

Insertion sort allows us to analyze scenarios beyond the worst case. It consists
of 4 steps.

1. Temporarly remove value at index 1 and store it in a variable. In the next
   iterations we remove the next index.
2. Take each value to the left of the removed index to compare and shift if
   the value to the left is greater than the index value.
3. Insert the temporarily removed index value into the shifted gap.
4. Repeat 1-3 until we reach the end of the array.

```ruby
# example with an array of length 4
a = [4,2,7,1,3]
# first step shift index 1
a = [2,4,7,1,3]
# second step shift index 2
a = [2,4,7,1,3]
# third step shift index 3
a = [1,2,4,7,3]
# fourth step shift index 4
a = [1,2,3,4,7]
```

The algorithm uses 4 types of steps: remove, compare, shift and insert. For
comparison we do compare all numbers in the worst case but we only compare one
time in the first run, two times in the second and so on.

$$1 + 2 + 3 + ... + (N-1)$$

| Array Size | # of Comparisons |
| ---------- | ---------------- |
| 5          | 10               |
| 10         | 45               |
| 20         | 190              |

Looking at the table it becomes apparent that the speed is about

$$\Theta(N^2/2)$$

$$\frac{10^2}{2} = 50$$

Moving on to shift, in the worst case we have to shift each time to sort a
reversed ordered array resulting in as many shifts as comparisons
$$\Theta(N^2/2)$$

As for removing and inserting, we remove and insert in each pass through once
resulting in $$\Theta(N-1)$$. If we combine all the notations and simply we get.

$$(N^2/2) + (N^2/2) + (N-1) + (N-1)$$

$$(N^2) + (N-1)$$

> So far, we only removed constants from Big O notation but another rule states
> that we only take into account the the highest order of N when we have
> multiple orders added together. This is because as N increases, the higher
> order becomes much more significant.

| $$N^2$$ | $$N^2$$ | $$N^3$$ | $$N^4$$ |
| ------- | ------- | ------- | ------- |
| 2       | 4       | 8       | 16      |
| 5       | 25      | 125     | 625     |
| 10      | 100     | 1000    | 10000   |

### Is Selection Sort the best ?

At first glance, looking at the worst case scenario we can draw that conclusion.

| Algorithm      | Big O             |
| -------------- | ----------------- |
| Selection Sort | $$\Theta(N^2/2)$$ |
| Bubble Sort    | $$\Theta(N^2)$$   |
| Insertion Sort | $$\Theta(N^2)$$   |

However, comparing Selection and Insertion Sort by Best, Average and Worst case
we get a bigger picture.

| Algorithm      | Best              | Average           | Worst             |
| -------------- | ----------------- | ----------------- | ----------------- |
| Selection Sort | $$\Theta(N)$$     | $$\Theta(N^2/2)$$ | $$\Theta(N^2)$$   |
| Insertion Sort | $$\Theta(N^2/2)$$ | $$\Theta(N^2/2)$$ | $$\Theta(N^2/2)$$ |

In short, if data is mostly sorted, insertion is the best option. For a reversed
ordered array selection sort of the better option.

## Big Oh in everyday code

## Hash Tables

## Stacks and Queues

## Recursion

## Writing Recursion

## Dynamic Programming

## Recursive Algorithms

## Nodes

## Binary Search Trees

## Heaps

## It doesn't hurt to try

## Graphs

## Space Constraints

## Techniques for code optimization
