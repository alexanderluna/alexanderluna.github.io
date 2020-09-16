---
title: Neural Prediction with forward propagation
image: /assets/img/neural-networks
categories:
  - books
  - python
---

Now we will look closer at prediction. A neural network requires a lot of data
to accurately predict. Similar to how a human would learn. We can build a neural
network that can predict based on a single input. It takes the input and adjust
its parameter or weight to produce an output (prediction).

```python
def neural_network(input, weight):
  prediction = input * weight
  return prediction
```

Through trial and error this neural network can tweak the weight to achieve a
higher probability of being right. While one data point is good to get started,
the more the better to come up with more accurate predictions.

```python
weights = [0.1, 0.2, 1]
def neural_network(input, weight):
  prediction = weighted_sum(input, weights)
  return prediction
```

> The `weighted_sum` maps each weight to a data point allowing us to adjust each
> data points weight individually.

To make accurate predictions it is important to build neural networks that
combine multiple inputs at the same time. We still multiply all data points with
the respective weights. What changes is that we have to sum the predictions,
also called waited sum of the input or waited sum or dot product.

The need for multiple inputs requires a vector or a list of numbers. Any time we
perform a mathematical operation on two factors of equal length we do an element
wise operation. That is why the order matters.

```python
import numpy as np

weights = np.array([0.1, 0.2, 0])
def neural_network(input, weight):
  prediction = input.dot(weight)
  return prediction
```

A neural network can also make multiple predictions with a single input. We
multiply the input with different weights. In the same way, a neural network
makes predictions with multiple inputs and multiple outputs. For this to work,
we have to put all our weights in a matrix or a list of vectors. We can use
vector matrix multiplication to multiply it with the input matrix. What makes
neural networks interesting is that you can stack neural networks. The output of
one neural network can be feed into another neural network essentially doing two
consecutive vector matrix multiplications. This is especially important for
matrix multiplication which are too complex for a single weight matrix.

Numpy is a great tool for working with vectors and matrices. When creating a
matrix keep in mind that rows come before columns.

> The columns of the left matric must equal the rows on the right matrix,
> `(a,b).dot(b,c) = (a,c)`