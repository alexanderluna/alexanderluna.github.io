---
title: Make your own Neural Network
image: /assets/img/neural-networks
categories: books
---

- [Easy for me hard for you](#easy-for-me-hard-for-you)
- [A simple prediction machine](#a-simple-prediction-machine)
- [Classifying is not different from Predicting](#classifying-is-not-different-from-predicting)
- [Training a Simple Classifier](#training-a-simple-classifier)

## Easy for me hard for you

Computers are fast calculators. They are good at doing arithmetic. On the flip
side they are bad at recognizing images or doing other human like tasks.

## A simple prediction machine

Assuming we want to build a prediction machine, a computer would take an input
and process it to produce an output.

> input => process... => output

Assuming we want to build machine which is capable of figuring out how to
convert from **kilometers** to **miles** when we feed it some data.

| kilometer | miles |
| --------- | ----- |
| 0         | 0     |
| 100       | 62    |

Thus we come up with a guess to multiply the kilometers by:

$$
100\ km = km \times 0.5 = 50\ miles \\\\
error = truth - calculated\ result
$$

Turns out we are wrong by 12 miles which is our **error**. We can use the error
to figure out a new guess.

$$
100\ km = km \times 0.6 = 60\ miles \\\\
error = 2\ miles
$$

The output is still too small thus we have to adjust again:

$$
100\ km = km \times 0.7 = 70\ miles \\\\
error = 8\ miles \\\\
100\ km = km \times 0.61 = 61\ miles \\\\
error = 1\ mile
$$

As our guess approaches the correct answer (small error rate), our steps to
ajust should decrease. Thus, our steps are a **fraction** of the error.

## Classifying is not different from Predicting

Given data, we want to classify wether an insect is a caterpillar or a ladybugs.
We can see that based on length and width. A caterpillar is longer than wide
and the opposite is true for ladybugs.

![graph](/assets/uploads/nn-plot.png)

> source: (book) make your own neural networks

The line added seperates both insects based on its characteristics. If we were
to encounter an unknown insect we can use this classifier to figure out what it
is.

> we use **training data** to teach our classifier the truth

## Training a Simple Classifier

$$