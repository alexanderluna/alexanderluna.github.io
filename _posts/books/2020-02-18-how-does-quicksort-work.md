---
title: How does Quick Sort work ?
image: /assets/img/quick-sort
categories:
  - books
  - ruby
  - python
  - javascript
  - java
  - csharp
---

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

> Reference book **Grokking Algorithms**
