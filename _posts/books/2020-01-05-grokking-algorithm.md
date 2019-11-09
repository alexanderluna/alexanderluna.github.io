---
title: "Grokking Algorithms: An illustraded guide for programmers and other curious people"
image: assets/img/grokking
categories: books
---

## Introduction

An algorithm is a set of instructions for accomplishing a task. Throughout this
book we will be looking at several algorithms, how they work, how to measure
their performance and how to implement them. First we will look at Binary
Search.

Binary Search is an algorithm to find an element in a sorted list. If the item
is in the list, it returns the position of the item else it returns null.
Suppose we search a number 1-100. We could check one by one or start in the
middle `50` if its higher we can skip the first `50` numbers. Then we repeat
this step with `75` and so on.

> 1...50...100
>
> we start at 50

We can already see that binary search is much faster. It doesn't have to search
every single item which reduces the amount of steps required to find the number.
In fact the speed is $$\Theta(log_2n)$$ where `n` is the number of items to
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

Finally to look at how slow an algorithm can be will look at the
**Travling Salesperson** algorithm:

> A Salesperson has to go to 5 cities and wants to visit each city while
> traveling. Thus we draw different routes and pick the shortest.

| # of cities | examples                  |
| ----------- | ------------------------- |
| 5           | 120 permutations (steps)  |
| 6           | 720 permuations (steps)   |
| 7           | 5040 permutations (steps) |

As the cities increase the steps grow factorial $$\Theta(n!)$$ factorial time.
Unfortunatly, for this problem there is no faster algorithm available.

## Selection Sort

Every computer memory has addresses where it stores information. To store a list
of itmes you can use an: `array` or `list`.

An **array** stores data right beside each other in memory. If you want to add
an item to the list but the next address is taken, you have to take all items
and move them to the new place where they all fit. This step repeats itself each
time you add an itme. You could reserve memory addresses in advanced but it may
result in wasted memory. If you happen to surpass you reseved addresses, you
have to move everything again.

A **linked list** stores items anywhere in memory. A bunch of memory addresses are
"linked" together. This also works around the case where there are not enough
addresses beside each other. (ex. a list with thousands of items). Its weakness
lies in accessing items because you have to traverse the entire linked list
given that each item holds the memory address of the next item. Thus, arrays are
good for reading data.

| operation | Array         | List          |
| --------- | ------------- | ------------- |
| Read      | $$\Theta(1)$$ | $$\Theta(n)$$ |
| Insert    | $$\Theta(n)$$ | $$\Theta(1)$$ |
| Delete    | $$\Theta(n)$$ | $$\Theta(1)$$ |

When inserting an item in a list, you only have to change the address the
previous item is pointing to, instead of shifting all the items that follow.

Thus arrays allow for **random access** while linked list allow for
**sequential access**:

1. Random access: jump to the item we want
2. Sequential access: traverse items to access them

Now that we covered the basic concepts we can look at **Selection Sort**. In
this algorithm, we want to sort for example a list of songs based on their play
count. Thus we take 2 steps:

1. Add a song to a new list but sorted
2. Repeat with the next song until none are left

Given that we traverse the list once to find the play count $$\Theta(n)$$ and
that we add them to the new list $$\Theta(n)$$, this sort algorithm takes:

$$\Theta(n) \times \Theta(n) = \Theta(n^2)$$
