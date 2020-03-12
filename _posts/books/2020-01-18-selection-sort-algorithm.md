---
title: Understanding the Selection Sort Algorithm
image: assets/img/selection-sort
categories:
  - books
  - ruby
  - python
  - javascript
  - java
  - csharp
---

Every computer memory has addresses where it stores information. To store a list
of itmes you can use an: **array** or **linked list**.

An **array** stores data right beside each other in memory. If you want to add
an item to the list but the next address is taken, you have to take all items
and move them to a new place where they all fit. This step repeats itself each
time you add an item. You could reserve memory addresses in advance but it may
result in wasted memory. If you happen to surpass your reseved addresses, you
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

When inserting an item in a list, you only have to change the address of the
previous item it is pointing to, instead of shifting all the items that follow.

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

> Reference book **Grokking Algorithms**
