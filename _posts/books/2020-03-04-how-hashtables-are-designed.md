---
title: How Hashtables work and how to use them
image: assets/img/hashtable
categories:
  - books
  - ruby
  - python
  - javascript
  - java
  - csharp
---

Assuming we want to implement a search for products with a price tag. We could
use an array and sort it to using binary search on it ($$\Theta(log{2}n)$$).
However, we want to search in $$\Theta(1)$$ or constant time and for that we can
use a **hash function**. For a hash function to work, it needs to be consistent
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
linked list when keys collide. The hash function is very important because a
good hash function will give us few collisions.

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

> Reference book **Grokking Algorithms**
