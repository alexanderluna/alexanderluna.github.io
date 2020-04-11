---
title: Solving Directed Acyclic Graphs with Dijkstra's algorithm
image: /assets/img/breadth-first-search
categories:
  - books
  - ruby
  - python
  - javascript
  - java
  - csharp
---

Thus far we have looked at the Breadth First algorithm to solve graphing
problems where we had to find the shortest path. However, the shortest path
doesn't mean the fastests.

Dijkstra's algorithm conists of 4 steps:

1. Find the cheapest node (smalles weight)
2. Update the neighbors node's costs
3. Repeat until done for every node
4. Calculate the final path.

![dijkstra's algorithm](/assets/uploads/dijkstras-algorithm.png)

Step 1.

| Node   | Weight |
| ------ | ------ |
| A      | 6      |
| B      | 2      |
| Finish | ♾      |

Step 2. (we picked the cheapest node B)

| Node   | Weight    |
| ------ | --------- |
| A      | 5 (2 + 3) |
| B      | 2         |
| Finish | 7 (2 + 5) |

Step 3. (repeat with next cheapest node A)

| Node   | Weight      |
| ------ | ----------- |
| A      | 5 (updated) |
| B      | 2           |
| Finish | 7 (updated) |

| Node   | Weight        |
| ------ | ------------- |
| A      | 5             |
| B      | 2             |
| Finish | 6 (2 + 3 + 1) |

Using this algorithm we assign a weight to each segment and find the path with
the smallest total weight.

Each edge in the graph has a number associated with it. That number is called a
weight and makes the graph a weighted graph. Thus, the Breadth First search
algorithm is ideal for unweighted graphs while Dijkstra's algorithm is ideal
for weighted graphs.

Graphs can have cycles that just add extra weight to the path. This happens
with graphs that are undirected. Thus, Dijkstra's algorithm only works with
"Directed acyclic graphs" **DAG**.

With each iteration we also update the parents of each node to know how we got
the cheapest path. Sometimes graphs have a negative weight. In those cases, the
algorithm doens't work. However, Bellman-Ford's algorithm works with negative
weights.
