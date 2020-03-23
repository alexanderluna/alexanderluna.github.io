---
title: A quick look at Numpy
image: /assets/img/numpy
categories:
  - python
---

Numpy is a package used for scientific computation. It is fast thanks to its
optimized C code core, easy to use and open source.

Getting started with Numpy is easy simply start by importing the package.

```python
import numpy as np
```

Numpy offers us different data types but the most frequent data type is an
**ndarray**. The n stands for number and d stands for dimensional.

```python
# our first ndarray
one_dimensional = np.array([1,2,3])

three_dimensional = np.array([
    [
        [15.5, 20, 44],
        [34, 23, 78.2],
        [43, 64.3, 76]
    ],
    [
        [24, 24, 24],
        [80, 69, 32],
        [12, 15, 19]
    ]
])
```

An array can have 1 to nth dimension but usually they are named as followed:

- 1D = Vector
- 2D and above = Matrix

Since ndarrays can have different shapes and dimensions we can easily check
what we are looking at.

```python
# returns (3,) where 3 are the number of items [1,2,3]
one_dimensional.shape 

# returns (2, 3, 3) where 2 is the number of first level arrays
# 3 is the number of arrays within each array
# and the last 3 is the number of items in each array
three_dimensional.shape

# number of dimension of each ndarray
one_dimensional.ndim # returns 1
three_dimensional.ndim # returns 3

# number of items in each ndarray
one_dimensional.size # returns 3
three_dimensional.size # returns 18
```

## Creating ndarrays

Thus far we looked at how ndarrays are shaped and how they look. Now we will
learn how to make our own ndarrays.

```python
# the simplest one
first = np.array([1,2,3])

# create an ndarray with a specific shape and fill it
# this renders an ndarray with 2 arrays inside and each array has 3 arrays
# and each of those inner arrays have 3 items filled with the number 1
# but displayed like a string thanks to the dtype argument we passed
second = np.ones((2,3,3), dtype=str)

array([[['1', '1', '1'],
        ['1', '1', '1'],
        ['1', '1', '1']],

       [['1', '1', '1'],
        ['1', '1', '1'],
        ['1', '1', '1']]], dtype='<U1')

# use a range to fill an ndarray
# here we start at 0 and go up to 20 in steps of 3
array_from_range = np.arange(0, 20, 3)

array([ 0,  3,  6,  9, 12, 15, 18])

# we can also randomly fill an ndarray with a given shape
# randint takes a minium = 1 and a maximum = 100 as well a shape (5,4)
array_with_random_ints = np.random.randint(1, 100, (5,4))

array([[0.90437567, 0.22028631, 0.72788259],
       [0.7913316 , 0.31966372, 0.58556257],
       [0.22827483, 0.88165549, 0.52483884],
       [0.09496781, 0.76239879, 0.31752114],
       [0.64415386, 0.85145683, 0.17401625],
       [0.82328818, 0.95793898, 0.86793474]])
```

A quick note on randomness. At the end, we use **np.random** to randomly fill
our ndarray. It may look like true randomness but in fact those numbers come
from a seed. They are pseudo random numbers which means that we can specify
a seed number and numpy will stick to that seed rather than picking a different
seed everytime which will make our randomness render the same numbers always.

```python
np.random.seed(5)
```

## Manipulating ndarray values

We can use mathematical operations on our ndarrays to do some fun things and
numpy comes with built in methods that allow us to do some statistical
operations easier as well.

``` python
one_dimensional = np.array([2,4,6])
placeholder_ones = np.ones(3) # array([1., 1., 1.])


one_dimensional + placeholder_ones
one_dimensional - placeholder_ones
one_dimensional * placeholder_ones
one_dimensional / placeholder_ones
```

Numpy uses broadcasting to make arithmetic operation fast.

> The term broadcasting describes how numpy treats arrays with different
> shapes during arithmetic operations. Subject to certain constraints, the
> smaller array is “broadcast” across the larger array so that they have
> compatible shapes. Broadcasting provides a means of vectorizing array
> operations so that looping occurs in C instead of Python.

```python
two_dimensional * three_dimensional # this fails
```

The reason the previous multiplication fails is because the shapes don't match.

> When operating on two arrays, NumPy compares their shapes element-wise. It
> starts with the trailing dimensions, and works its way forward. Two dimensions
> are compatible when
>
> 1. they are equal, or
> 2. one of them is 1
>
> If these conditions are not met, a ValueError: operands could not be broadcast
> together exception is thrown, indicating that the arrays have incompatible
> shapes.

```python
# numpy comes with math methods as well
np.sum(one_dimensional)
np.mean(one_dimensional)
np.max(one_dimensional)
np.min(one_dimensional)
np.std(one_dimensional) # standard variation
np.var(one_dimensional) # variance
np.sqrt(one_dimensional) # square root
```

And thats about it. We have covered some of the common operations in numpy. Of
course, there is more and you can look at the numpy documentation for more
information on how to do more advanced things as well.
