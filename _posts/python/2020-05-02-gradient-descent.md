---
title: The beauty of Gradient Descent
image: /assets/img/csruby
categories:
  - books
  - python
---

A key part of deep learning is to evaluate how good the prediction is. We do
this by comparing. The error output will tell us if we missed a lot or a little.
Once we have a way to measure the error we can move on to the next step, learn.

Learning tells each weight how to change to reduce the error rate. This process
focuses on figuring out how much each weight attributed to the error. The error
attribution is key. We will use gradient descent for this.

```python
weigth = 0.5
input = 0.5
goal = 0.8

prediction = input * weight
error = (prediction - goal)**2
```

The reason we square the error is because sometimes the error can result in a
negative number. If we miss by -2 or 2 doesn't matter both times we missed by 2.
It also makes big errors bigger and smaller errors smaller. When working with
large data sets we average the errors to see how well we did. If some errors
turn out to be negative, we could end up cancelling out errors.

In the learning process we adjust the weight up and down and the change that
reduces the error is used to update the weight. This is also known as hot and
cold learning.

Although hot and cold learning is simple it is inefficient since it predicts
multiple times to adjust one weight. Sometimes it is impossible to predict the
goal as it will either go above or below and start wiggling between the two
missing the goal.

A better way of calculating the error and direction is gradient decent becaseu
it combines both. `(prediction - goal)` gave us the pure error meaning the
direction and amount we missed. `(prediction - goal)*input` scales the input,
negative reversals and stops the pure error to multiply it with the weight.

Stopping means that if the input is zero we don't learn and thus return zero.
Negative reversal means that when the input is negative, moving the weight up
makes the prediction go down because the weight changes direction. When we
multiply the pure error with the input we reverse the sign when the input is
negative ensuring the weight moves in the correct direction. Finally, scaling
means that if the input big the change to the weight will also be big.

```python
weigth = 0.5
input = 0.5
goal = 0.8

for iteration in range(20):
  prediction = input * weight
  error = (prediction - goal)**2
  direction_and_amount = (prediction - goal) * input
  weight = weight - direction_and_amount
  print(error, prediction)
```

> Using this approach we make finer changes as we get closer to the goal. All
> the changes happen inside the prediction without touching the input or error.

Our goal should be to understand the relationship between weight and error.
Basically, changing one variable changes the other. This kind of relationship is
known as a derrivative. A derrivative plots a curve. We can use the slope of the
curve to determine the steepness and how far we are from the optimal point. It
is about the sensitivity between two variables.

Our weight or `weighted_delta` it's our derivative. Sometimes neural networks
can explode in value which happens when the input is too large this makes the
weight large as well. Our problem is that a large input causes the weight to
overreact. The solution is to use a new variable alpha to multiply it with the
weight. We have to guess the Alpha. If our prediction starts diverging then the
Alpha is too high. If learning happens too slow the Alpha is too low.

```python
weight = weight - (alpha * direction_and_amount)
```

> Make sure you understand our small neural network and how it works is the
> basis for all other models.

## Improving and getting deeper with Gradient Descent

Gradient Descent also work with multiple inputs.

```python
delta = prediction - goal
weighted_delta = element_multiplication(delta, input)
```

Once we calculate our delta we loop over all inputs and multiply the delta with
each input.

```python
alpha = 0.01
for index in range(len(weights)):
  weights[index] -= alhpa * weighted_delta[index]
```

Once we have our `weighted_delta` we can update the actual weight based on the
learning speed alpha. Keep in mind that delta measures how much a node value is
different. `weighted_delta` is an estimate of the direction and amount to move
the weight to reduce a nodes delta.

```python
def neural_network(input, weights):
  output = 0
  for index in range(len(input)):
    output += (input[i] * weights[i])
  return output
```

Our neural network multiplies each input with its corresponding weight when
learning. Each input is multiplied with the delta to determine how much the
weight has to change. Then we use the difference for each input to update the
corresponding weight on it. We repeat this process for each iteration.

> Each input is mapped to it's weight so that each weight has its own learning
> curve. Given that the error (delta) is shared once one weight finds the
> bottom of the curve all find it.

Each weight with its learning curve is a 2D slice of an N-dimensional shape. N
being the number of weights + error. This shape is also known as the error
plane. The goal of a neural network is to find the bottom of the error plane.

Just like a neural network can predict with multiple inputs it can also make
multiple predictions using only one input. We calculate each delta the same way
and multiply them all by the same input.

```python
weights = [0.3, 0.2, 0.1]
prediction = neural_network(input, weights)

error = [0,0,0]
delta = [0,0,0]

for index in range(len(goal)):
  error[index] = (prediction[index] - goal[index])**2
  delta[index] = (prediction[index] - goal[index])

weighted_delta = element_multiplication(input, weights)
alpha = 0.1
for index in range(len(weights)):
  weights[index] -= (weighted_delta[index] * alpha)
```

We can also generate multiple outputs with multiple inputs. For that we store
our weights in a matrix. We do matrix multiplication to multiply each input
with the array of weights that correspond to the output.

```python
for index in range(len(input)):
  output[index] = weighted_sum(input, weights[index])
return output
```

`weighted_sum` is a dot product or a measurement of similarity between two
vectors. In other words, if an input is similar to the weight it outputs a high
score and vicaversa.
