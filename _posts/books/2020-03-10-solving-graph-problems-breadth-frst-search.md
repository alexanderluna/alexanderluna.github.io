---
title: Solving Graph problems with the Breadth First Search Algorithm
image: assets/img/breadth-first-search
categories:
  - books
  - ruby
  - python
  - javascript
  - java
  - csharp
---

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

> Reference book **Grokking Algorithms**
