---
title: "Grokking Algorithms: An illustraded guide for programmers and other curious people"
image: assets/img/grokking
categories: books
---

Grokking Algorithms is an introduction book to the world of algorithms. This
book covers not only how algorithms work are implemented, but also why they
work the way they do and why the data structures it uses are important. Along
the way, you will learn also different data structures and how a computer
works with data structures.

- [Introduction](#introduction)
- [Selection Sort](#selection-sort)
- [Recursion](#recursion)
- [Quick Sort](#quick-sort)
- [Hashtables](#hashtables)
- [Breadth First Seach](#breadth-first-seach)

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
of itmes you can use an: **array** or **linked list**.

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

> $$\Theta(n) \times \Theta(n) = \Theta(n^2)$$

## Recursion

Recursion is when a function calls itself and is used when it makes the solution
cleaner. Many algorithms use it. When writting a recursive function it is
important to tell it when to stop or you get an infinite loop.

A stack is a **data structure** where you "push" items on top and "pop" the top
most item. Computers use internally a "call stack". Each time a function is
executed it gets pushed on to the call stack. In recursion, the self calling
functions are in a partially completed state until the recursion stops and each
function returns which in turn pops each execution from the stack.

The power of recursion is that we don't need to keep track of the calls since
the call stack takes care of it for us.

## Quick Sort

Quick sort works by applying the divide and conquer technique which relies on
recursion. A problem is broken down to a base case and then recursion kicks in
to solve each of those cases. If we have an array for example and want to sum
all its members, we can use an array with divide and conquer.

```python
sum([2,4,6])
sum(2 + sum([4,6]))
sum(4 + sum([6]))
```

The function keeps calling itself until it reaches the base case and then it
starts returning. Quick sort is a sorting algorithm that is faster than
"selection sort". It uses divide and conquer in the following steps:

1. Pick a Pivot (where to divide & conquer)
2. Partition the array into 2 sub-arrays (less & greater than the pivot)
3. Repeat with the subarrays

```python
numbers = [3,5,2,1,4]
pivot = 3

sorted_list = quick_sort([2,1]) + pivot + quick_sort([5,4])
print(sorted_list)
# [1,2,3,4,5]
```

Similar to quick sort there is another sorting algorithm called **merge sort**
which has a similar performance:

| algorithm  | performance                      |
| ---------- | -------------------------------- |
| Quick Sort | $$\Theta(n log_{2}n)$$ (average) |
| Merge Sort | $$\Theta(n log_{2}n)$$ (always)  |

Average vs. worst case. The performance of quick sort depends heavily on the
pivot. By picking the middle number, one can avoid the worst case scenario of an
already sorted list (one of the 2 subarrays would hold all the numbers).
Nontheless, each quick sort will take $$\Theta(n)$$ to divide the array and the
amount of times quicksort calls itself is $$\Theta(log_{2}n)$$. Thus, the
overall runtime is:

> $$\Theta(n) \times \Theta(log_{2}n) = \Theta(n log_{2}n)$$

## Hashtables

Assuming we want to implement a search for products with a price tag. We could
use an array and sort it to use binary search on it ($$\Theta(log{2}n)$$).
Intead we want to search in $$\Theta(1)$$ or constant time and for that we can
use a **hash function**. For a hash function to work, it needs to be a constant
and map a key to a value. A hash function returns always the same values for the
searched key because a hash function:

1. maps a key to the same index
2. maps different keys to different indexes
3. knows how big the array is and only returns valid indexes

If we combine a hash function and an array we get a **hash table**. Unlike
arrays and lists, hash tables are smart and don't map directly to memory but use
a hash function to figure out where to store data.

When working with hash tables it is possible that 2 keys get assigned the same
memory spot resulting in a collision. A simple solution to this is to use a
linked list when keys collide. The hash function is very important because it
will give us few collisions.

As for performance, hash tables take $$\Theta(1)$$ for everything (read, write,
delete) on average and $$\Theta(n)$$ in the worst case scenario. In order to
avoid the worst case scenario, one has to avoid collisions. Hence, you will need
a low **load factor** and a good hash function.

> $$
> Load\ Factor = \frac{number\ of\ items\ in\ table}{number\ of\ total\ slots}
> $$

Hash tables use arrays for storage. When the array is smaller than the amount
of items it will hold we get a larger load factor (more items per slot). To
reduce the load factor we need a bigger array. Meanwhile, a good hash function
distributes values in the array evenly.

## Breadth First Seach

Graph algorithms are some of the most useful ones. Suppose we wanto to go from
**A** to **B** in the shortest amount of steps. This type of problem is called
**shortest-path problem**. The solution for this type of problem is the
**breadth first search** algorithm. We can use it for finding the smallest
number of moves to win a chess game for example. The steps are simple:

1. Model the problem like a graph
2. Solve using the Breadth First Search

A **graph** models a set of connections and consists of **nodes** and **edges**
which connect the nodes. Nodes connected to any particular node are called its
neighor.

The breadth first search algorithm answers 2 questions:

1. Is there a connection from node A to node B ?
2. What is the shortest oath from node A to node B ?

Suppose we are looking for a book seller in our friends network. We could look
for every one of our friends and eventually our friend's friends and then their
friends until we find one. That is how the breadth first search algorithm works
when it tries to find a connection from node A to node B.

Thanks to the *radiating* approaching, we can also find the shortest distance
because it will look for the closest connection first and then move outward
until it finds the node we search for.

This approach works because we search nodes in the order they have been added to
our list to check. A queue does just that, it enqueues "adds" items to a list
and dequeues "pops" them in the order added. This is called a **FIFO** data
structure (first in first out). A stack does the opposite **LIFO**
(last in first out).

To implement this algorithm we can use a hashtable where each key is a node and
the values are its neighbor. Each value gets added as a new key/value pair with
its own neighbors and so on. Finally, we create a queue where we add the nodes
to search for as we progress through the graph. Until our queue is empty, we
keep searching. At the end, we know if it there is a connection. If there is a
connection, we know the first apprearence will be the shortest one.

> keep in mind that we should check everyone first once or else we end up in an
> infinte loop checking related nodes over and over.

The runtime is $$\Theta(number\ of\ edges)$$, $$\Theta(1)$$ for the queue and we
do this for every node $$\Theta(number\ of\ nodes)$$ thus the runtime is:

> $$
> \Theta(number\ of\ edges + number\ of\ nodes) \\\\
> \Theta(V+E) \\\\
> V = vertices
>$$
