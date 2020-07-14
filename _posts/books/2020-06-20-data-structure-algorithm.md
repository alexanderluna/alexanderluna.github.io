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

Is Selection Sort the best ? At first glance, looking at the worst case scenario
we can draw that conclusion.

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

Now we will look at production code to determine how we can optimize and
analyze the efficiency of differnt algorithms under different scenarios. The
first algorithm we will look at is one that determines the mean average of even
numbers.

```python
def average_of_even_numbers(array):
   sum = 0
   even_number_counter = 0

   for item in array:
      if itme.even?
         sum += item
         even_number_counter++

   return sum/even_number_counter
```

Given that we loop the array and considering the worst case we have to add to
the sum and increment the even_number_counter each time we end up with 3N steps.
If we add the constant steps of declearing the `sum`, `even_number_counter`
variables and returning the average, we perform 3N + 3 steps. However, as we
already know in big O we don't include constants thus the resulting Big O
notation is $$\Theta(N)$$.

> For every for loop we encounter the performance of the algorithm decreases by
> the power of 1. 1 for loop = $$\Theta(N)$$, 2 for loops $$\Theta(N^2)$$, 3 for
> loops $$\Theta(N^3)$$

It is also worthwhile to note that whenever we have an algorithm that performs
$$(N-1)+(N-2)+(N-3)...+(N-M)$$ it always turns out to be about $$\Theta(N^2/2)$$
or $$\Theta(N^2)$$.

Now we will look at algorithms that work with multiple datasets. For that, lets
create an algorithm that computes the product of even numbers from two arrays.

```python
def product_of_two_arrays(array1, array2):
   products = []

   for a in array1:
      for b in array2:
         products.push(a*b)

   return product
```

While we could lump both arrays together and call it all N, we face a problem
where we could have arrays with different sizes. In order to understand this,
lets look at 2 scenarios.

1. (5x5) = 25 steps for 10 items N = 25
2. (9*1) = 10 steps for 10 items N = 10

Thus the number of steps varies greatly with differently sized ararys and it
becomes apparant that we have to express it as $$\Theta(N*M)$$. With 2 distinct
datasets that have to interact we identify both sources seperatly in terms of
Big O. Big O $$\Theta(N*M)$$ in this case lies in a specific range. If N is the
same size as M we get $$\Theta(N^2)$$. If one of the two is smaller we can
express it with a single letter since we can ignore the other one resulting in
$$\Theta(N)$$.

## Hash Tables

Assuming we want to build a search program, we ocul use an array that stores
sub arrays with the data. The performance would be $$\Theta(N)$$ for an
unordered array and $$\Theta(log_2N)$$ for an ordered one. However, using a hash
table we can archive $$\Theta(1)$$.

Most programming languages come with hash tables for fast reading which is
basically a list of key and value pairs.

```javascript
let menu = { "apple": 5 }
```

The reason search is fast is becuase hash tables use a hashing function to
convert characters to numbers. There are several hash functions but they all
have to meet one criteria. It mus convert the same string to the same number
every time. The hash table then:

1. hashes the key (105)
2. directly goes to the cell 105 where the value is stored

Given that the key stores the exact location, search takes $$\Theta(1)$$.

> Note however, that we can only look up this fast if we know the key otherwise
> we end up looping the entire hash table for $$\Theta(N)$$.

Since search is one directional, every key can exist only once. Thus, it can
happen that key collides with another. Collision handling is very important and
one way of handling it is through **seperate chaining** where we store a
reference to an array in the cell rather than the single value.

As it turns out, in the worst case all the keys collide and end up stored in the
same cell inside an array performing the same as an array. However a good
hashing algorithm takes care of producing as few collisions as possible. 3
factors are important to ensure efficiency.

1. amount of data stored in the hash table
2. amount of cells available in the hash table
3. which hashing function we use

A good hash table avoids collisions while consuming little memory. In order to
archive this, we can adjust teh ratio of data to cells also called the
**load factor**. In general terms for every 7 keys there should be 10 cells
resulting in a load factor of 0.7 to avoid collisions and save space.

## Stacks and Queues

Thus far, our focus has been performance but beyond that data structures allow
us to create simpler and easier to read code.

Two data structures that fullfill that roll are stacks and queues. Their main
purpose is to store temporary data or data that is useless after being
processed. Both archive this but in a different order. Stacks function similar
to arrays as a list of element.

1. data is inserted at the end
2. data is deleted from the end
3. only the last added data can be read

> In other words, the beginning is the bottom andthe end is the top. We
> push and pop items from the top in a process called LIFO.

Contrary to other data structures, stacks are usually not implemented in
programming languages by default. In fact, many data structures are build on top
of others. These data structures are called **abstract data types**.

Although a stack may be implemented using an array, a
**constrained data structure** is important. For once, we prevent potential bugs
by limiting the kind of operations to push and pop. Secondly, they give us a
different mental model to solve problems. Among developers, it becomes clear
what we are using and how it works.

A queue is similar to a stack in that it stores temporary data but in a
different oder, FIFO. They work with 3 restrictions.

1. data is inserted at the top
2. data is deleted at the top
3. only the last added data can be read

> Queues are great for processing asynchronous requests they can keep track of
> the process in the order they were received.

## Recursion

Recursion allows us to tap into complexer algorithms. Specifically it can be
used to solve problems in a simpler way.

> In essence, recursion is a funciton that calls itself.

We can use recursion to loop over data instead of using a for loop.

```javascript
function loop_countdown(number) {
   for(i = number; i >= 0; i++) {
      console.log(i);
   }
}

function recursion_countdown(number) {
   console.log(number);
   if (number === 0) return;
   recursion_countdown(number - 1);
}
```

As you can see however, reading recursive code takes a bit of proactice. In
order practice a little more we can look at a factorial algorithm.

```ruby
def factorial(number)
   return 1 if number === 1
   number * factorial(number - 1)
end
```

Instead of creating a loop and multiplying each number to calculate the
factorial, we recursively call the function by subtracting one from that number.
This way, the function keeps track of each number and multiplies every number
for us.

The key part is to identify the base case to avoid ending up in an endless loop.
Next we identify the "next-to-last" case or the step which we will be repeating.

```ruby
factorial 3 # returns 6
factorial 2 # returns 2
factorial 1 # returns 1
```

The way the computer executes the recursion is quite simple. The computer
makes use of the call stack to temporarily store each recursive call. First it
calls `factorial(3)`, then `factorial(2)` and finally `factorial(1)`. It does
this until it reaches the base case. At that point it looks at the call stack
and then goes in reverse order. As we learned previously about stacks, they use
LIFO method.

So what happens if there is no base case ? In that case, the same function gets
called indefinetly and the same function gets added to the call stack until the
computer runs out of memory. This is called a **stack overflow**.

## Writing Recursion

Writing recursions requires a mind set to identify when it is a good fit.
Generally speaking, any task that requires repetition is usually a good fit.
Lets take a function that doubles all its values as an example.

```python
def double_array(array, index=0):
   return if index >= len(array)
   array[index] *= 2
   double_array(array, index + 1)
```

Another broad area good for recursion is when performing claculations based on
subproblems. These problems usually take an input and return calculations based
on the input.

> A subproblem is a smaller version of the same problem but with less input.

Factorial was a good example for this. The `factorial(5)` calls `factorial(4)`
and so on. The factorial function calls itself with a subproblem until it can't
break the problem any smaller to solve it.

When looking at functions that perform calculations we essentially have two ways
to solve the calculation the **bottom up** and **top down**. The bottom up
approach would look like this.

```python
def factorial(n, i=1, product=1):
   return product if i > n
   return factorial(n, i+1, product*1)
```

A bottom up approach isn't much different from a loop. The top down approach on
the other hand works only with recursion which makes it a prefered choice for
writing recursion. Using this approach, we essentially pass the problem to the
next function call as we saw with factorial.

## Dynamic Programming

## Recursive Algorithms

## Nodes

## Binary Search Trees

## Heaps

## It doesn't hurt to try

## Graphs

## Space Constraints

## Techniques for code optimization
