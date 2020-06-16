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

## Speeding up Code

## Optimizing Code

## Optimizing Optimisticly

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
