---
title: Basic Data Science
permalink: basic-data-science
image: /assets/img/ds
---

Over the past years Data science has become increasingly important throughout different industries. Which is why I'm writing this post to collect valuable information which will aid anyone to learn about this topic. Most of the information presented here will be taken from different sources which I will list at the bottom under the reference section.

## Index
1. [Basics](#basics)
2. [Types of Data](#types-of-data)
3. [Five Steps of Data Science](#five-steps-of-data-science)
4. [Basic Mathematics](#basic-mathematics)
5. [Impossible or Improbable](#impossible-or-improbable)
6. [Advanced Probability](#advanced-probability)
7. [Basic Statistics](#)
8. [Advanced Statistics](#)
9. [Communicating Data](#)
10. [Machine Learning](#)
11. [References](#references)

# Basics
Data Science is all about acquiring knowledge from Data. Data itself is a collection of information which can be:

- Organized Data: in some form of row/column structure
- Unorganized Data: in free form like text

The ultimate goal is to use the new knowledge to do something like predicting, making decisions, etc. In the past it used to be that people would crunch data and analyze it but this is no longer possible due to the size of the data today. That is why we need Data Science.

Data Science consists of three basic areas which work together (consult: Venn Diagram):

1. Math/Statistics: formula for analysis
2. Programming: perform analysis
3. Domain knowledge: understanding of the field (ex. Medicine)

#### Common Vocabulary:
- **Machine Learning:** computer ability to learn from data.
- **Probabilistic Model:** use of probability to find relationship between elements
- **Statistical Model:** use Statistical theorems to formalize the relationships.
- **Data Mining:** find relationships between elements


# Types of Data
Continuing where we left off, we will look at different data now.

- **Structured Data** is organized (tables, json, xml, etc.)
- **Unstructured Data** exists freely without a standard organization
- **Quantitative Data:** can be described using numbers & math
- **Qualitative Data:** can be described using natural language

※ To understand better how Quantitative and Qualitative data are different we are going to look at some examples now:
{: class="info-box"}

- business name (Qualitative): not numeric expression
- revenue (Quantitative): numeric & mathematical operations are possible
- zip code (Qualitative): numeric but no mathematical operation possible

#### How to differentiate between Qualitative and Quantitative data ?
Quantitative data can be described using numbers but at the same time this data should make sense even if you add/subtract/multiply/divide it. For example a Zip code is Qualitative because even tho it is a number it makes no sense to add two Zip codes together. On the other hand, the revenue of a business is Quantitative data because not only is is a number but we can actually add it or multiply it to know what the annual, quarterly or daily revenue could be.

Quantitative Data can be broken down even further into:
- Discrete Data: has minimum or maximum values (ex. dice 1-6)
- Continuous Data: has an infinite range

#### Structured Data can be broken down into four levels of data:
- Nominal: described by name/category
- Ordinal: puts elements in order
- Interval: allow meaningful subtraction between data points
- Ratio:

**Nominal** (ex. Animal Species) is Qualitative which means to find the `center` it is more common to use the `mode` (most common element) of the dataset because neither the `median` nor the `mean` would make sense.

**Ordinal** (ex. Satisfaction on a scale from 1-10) can be put in order allowing us to place one element before/after another element. The data itself can't be modified using mathematical operations which limits our options to `Ordering` and `Comparing` our data. As with Nominal Data, is makes the most sense to use the `mode` to determine the `center`.

**Interval** (ex. Temperature) is all about the difference between two data points. Although is seems similar to compare Temperature with the Satisfaction scale from the Ordering level, it doesn't because we cannot subtract one Satisfaction Scale from another. We can however subtract one Temperature from another to tell how much warmer Spain is compared to Alaska. At the Interval level we can use the `median`, `mode` and `mean` to find the center of our dataset but the best option would be the `mean`.

※ Measures of Variation: describes how spread out the data is. Standard Deviation is one way of measuring this.
{: class="info-box"}

**Ratio** (ex. Money) at this level we have the biggest flexibility in terms of mathematical operations allowing us to define order, difference, multiplication and division. The best way of determining the `center` in this level is the `mean`. It also common that data at this level is non-negative which makes this level less attractive for Data Scientists than the Interval level.


## Five Steps of Data Science
What distinguishes Data Science from Data Analysis is that Data Science follows a step by step process that preserves the integrity of the results. These key steps are recognized and followed from beginner to professionals.

1. Asking an interesting question
2. Obtaining the data
3. Exploring the data
4. Modeling the data
5. Communicating & Visualizing the results

The first step is to ask question and it is important because it lets you brainstorm ideas and get a feeling for what data you need/want/expect as you move on. The seconds step is rather creative as it involves finding the data which can originate from many places and be in many shapes as you saw earlier. The third step is all about breaking down the data into its different types. The fourth step requires you to use models (Statistical/ML/etc.) to validate and quantify the effectiveness of each model. The fifth step is considered the most important step because you have to find a way of conveying your results through Visualizations that are easy to understand.

#### Exploring the Data Questions
- Is the data Organized ?
- What does each Row represent ?
- What does each Column represent ?
- Are the any missing data points ?


## Basic Mathematics
Now we will look at some basic mathematical principles for Data Science:
- Basic Symbols/Terminology
- Logarithm/exponents
- The set theory
- Calculus
- Matrix (linear) Algebra

#### Basic Symbols and Terminology
**Vectors** are objects with magnitude and direction. In Data Science a 1 dimensional array.
**Matrix** is a 2 dimensional representation of an array of numbers. Matrices have 2 characteristics:
1. dimension of matrix (n x m = n-rows, m-columns)
2. matrices are denoted with capital/bold letter ex. X

The upper case sigma symbol `Σ` is the universal symbol for addition. Ex. `Σx1 = 15` the sum of the vector `x1`. The lowercase alpha symbol `α` represents values that are proportional to each other. The dot product `.` is used to combine two vectors similar to addition and multiplication. Ex. `(3 7).(9 5) = 3*9 + 7*5 = 62`

**Graphs** depict points using coordinates. The rate of change between two points is defined as `slope` and they can be very important in Data science. The rate of change of two points shows us how variables move together and to what degree.

**Exponents** tells us how many times to multiply a number to itself. A **logarithm** on the other hand, tells us what exponent gets us from the base to another number. For example: `log2(16) = 4` because two is the base and we want to know what exponent makes 2 into 16 which is 4 because 2 to the power of 4 is 16 or `2 * 2 * 2 * 2 = 16`.

The **Set Theory** involves mathematical operations at a set level. A **set** is a collection of distinct objects similar to an array. The **magnitude** of a set is the number of elements in the set. The epsilon notation tells us that an element is within a set. For example: `2∈{1,2,3}` shows that 2 is within the set of 1,2,3. If one set has items that are present in another set we call the first set a subset of the counterparts. For Example `A={1,3,6} B={1,2,3,4,5,6}` A is a subset of B or `A⊆B`. The **intersection** of two sets is a set whose elements appear in both sets: `A∩B = {1,3,6}` because A has 1,3,6 and those are also present in B. The **union** of two sets is a set whose elements appear in either set: `A∪B = {1,2,3,4,5,6}` because although A only has 1,3,6, B has all the numbers from 1-6 which means that the union of both includes them all. The **jaccard measure** divides the intersection by the union as a way of measuring the similarity of two sets.

**Linear Algebra** is an area of Mathematics that deals with the math of matrices and vectors to make large multiplication more efficient. **Matrix Multiplication** is a simpler way of mass producing dot products. It is important to note that matrix multiplication is sensitive to the order you multiply them unlike normal numbers and the matrices must have equal dimensions which means that the first matrix must have the same number of columns as the second matrix rows.


## Impossible or Improbable
We use probability to define the chances of the occurrence of an event. We will first go through some basic definitions:

A **procedure** is an act that leads to a result. An **event** is a collection of the outcomes of the procedure. A **simple event** is an outcome/event that cannot be broken down further. The **sample space** of a procedure is the set of all _possible_ simple events.

### Probability
**Probability** of an event represents the frequency that the event will happen `P(A)`. The probability can be defined like this: `P(A) = number of ways A occurs / size of sample space`.

### Bayesian vs. Frequentist
In reality it is nearly impossible to count all the possible ways event `A` can happen. For example, to find out the probability of a person smoking a single cigarette a day we would have to figure out how many different ways a person is a smoker which is impossible. When faced with these types of situations there are 2 schools of thought:

1. Frequentist approach
2. Bayesian approach

In a Frequentist approach the probability of an event is calculated through experimentation. Similar to how we determined the probability before we the basic formula for this approach is as follows:

`P(A) = number of times A occurred / number of times the procedure was repeated`

The Bayesian approach on the other hand relies heavily on theoretical means. Using this approach we would have to think a bit more critically about the events and why they occur.

The Frequentist approach relies on the **relative frequency** of an event (how often event occurs divided by the total number of observations). This approach can get very close to actual probability of an event thanks to the **law of large numbers** which states that if we repeat a procedure enough times, the relative frequency probability will approach the actual probability.

**Compount Events** is any event that combines two or more simple events. We use the union and intersection Symbols to define the probability:

- `P(A∩B) = Probability of A and B happening`
- `P(A∪B) = Probability of A or B happening`

Conditional Probability builds on this concept. If Event B occurred, then what is the probability of event A ? Since our condition depends on event B it means that our sample space is reduced down to the size of event B:

- `P(A∪B) = P(A and B) / P(B)`

As probability Visualization becomes more cumbersome we can start to use probability rules to help us calculate compound probabilities:

1. Addition Rule (or) events: `P(A∪B) = P(A) + P(B) - P(A∩B)`
2. Mutual Exclusivity (not at same time): `P(A∪B) = P(A) + P(B) - P(A∩B)`
3. Multiplication Rule (and) events: `P(A∩B) = P(A) . P(B|A)`
4. Independence (no event relation): `P(A∩B) = P(A) . P(B|A)`
5. Complementary Events: `P(Ā) = 1 - P(A)`

**Type 1 error** are false positives while **Type 2 error** are false negatives.


## Advanced Probability
In this chapter we will go through some more advanced topics as well as some common machine learning algorithms such as the **Naive Bayes algorithm** some of the other topics include:

- Exhaustive events
- Bayes theorem
- Basic prediction rules
- Random Variables

**Collectively exhaustive events** happen when one of two or more events must occur. **Mutually exhaustive events** happen when two events cannot happen at the same time.

**Bayesian** is all about three things and how they interact with each other:

- A prior distribution
- A posterior distribution (what we care about)
- A likelihood

At all moments data updates our hypothesis. The **bayes theorem** is the result of **Bayesian inference**:

`P(A,B) = P(A) * P(B|A)`

The probability that A and B occur is the probability that A occurs times the probability that B occurred, given that A already occurred.
{: class="info-box"}

- `P(B,A) = P(B) * P(A|B)`
- `P(A,B) = P(B,A)`
- `P(B) * P(A|B) = P(A) * P(B|A)`

If we divide both sides by `P(B)` we get:

`P(A|B) = P(A) * P(B|A) / P(B)`

The Bayes theorem is popular because it tries to figure out `P(H|D)` where `H` is our hypothesis and `D` is our data.

In other words: The probability that our hypothesis is correct, given the data we have
{: class="info-box" }

**Random Variables** use real numerical values to describe a Probabilistic event and it may change value depending on the situation. For each value the random variable can take, there is a single probability.


## References
- [Principles of Data Science (Packt Book)](https://www.amazon.com/Principles-Data-Science-techniques-making-ebook/dp/B01A8T8YNC)
