---
title: Clean Code
categories:
- ruby
- javascript
- python
- books
image: /assets/img/cleancode
---

Bad code slows down development because it is messy and hard to make changes to
without breaking functionality and consulting multiple methods and classes.

- [Meaningful Names](#meaningful-names)
- [Functions](#functions)
- [Comments](#comments)
- [Formatting](#formatting)
- [Objects and Data Structure](#objects-and-data-structure)
- [Error Handling](#error-handling)
- [Boundaries](#boundaries)
- [Unit Tests](#unit-tests)
- [Classes](#classes)
- [Systems](#systems)
- [Emergence](#emergence)
- [Concurrency](#concurrency)
- [Succesive Refinement](#succesive-refinement)

## Meaningful Names

Names hold a special meaning to programmers. A good name has common traits. It
describes what it does or is well. It informs the reader about its intentions
and makes code more readable. For reasons names should be descriptive,
pronouncable and searchable.

> Make names shorter as their scope decreases. Make the length of a name match
> the size of the scrope of the variable.

Avoid prefixing names to associate them with a member. Similar interfaces should
have a name describing what the interface is rather than a prefix like
**"interfaceXYZ"**.

In the case of classes. Their names should be a noun without verbs. Methods on
the other hand, should use verbs. Pick one word per concept to avoid mixing
synonims. Ex: fetch, get, retrieve are all the same action so use just one. This
will ensure that variables, methods and classes are defined in a meaningful
context:

```java
User.addFirstName("John");
```

> The overall trend is to have small classes and short methods which are good
> at doing one thing.

## Functions

Functions should be small. The shorther they are the easier they are to
understand and follow around.

> Keep functions around 2 lines of codes

Indented code such as **if/else and while** statements should be one line of
code. Ideally, a function call with a **descriptive name** to make it easy to
read.

> Functions should do one thing. They should should do it well. They should
> do it only and they shouldn't repeat themselves.

Make statments in a function all the at the same level of abstraction. Burry
larger functions in low level classes. Functions should take ideally zero
arguments but not more than 2. Avoid passing flags as arguments to keep
functions from. Use objects to group agruments under a logical name. Avoid
output arguments as a way of changing state and use methods instead. Use
exceptions instead of returning error codes in your function and catch them
using a **try/catch** block. As always plan your functions well and refactor
them, reshape them and rename them to improve readability.

> Think of systems as stories to be told rather than programs to be written.

## Comments

> Good code doesn't need comments because it is readable and easy to understand.

Comments don't make up for bad code. Comments introduce a lot of problems in our
source code. Comments get outdated quickly and misinform the readers. You want
to use comments only when they are really needed such as for legal notices and
licenses or to give a basic idea when the code is too complex. You may also use
comments to warn future readers of consequences of such as a long load time or
to mark an implementation as a **TODO**. Avoid any other type of comment such as
journal comments used to log changes made by individiual programmers as well as
commented out code.

## Formatting

Code formatting is about communication and is very important because it persists
across future releases and changes. Code formatting can divided in three main
types:

1. Vertical Formatting
2. Horizontal Formatting
3. Indentation

In **Vertical Formatting**, we care for spacing, positioning and the length of
our code. Similar like a newspaper, every source file should provide a high
level concept at the top of the file to let the reader know if the file hosts
the desired information. As the reader scrolls down, the amount of details
should increase. Keep in mind however, a long file usually is a hint that the
given file has too much logic and should be split across different classes.

When writing code, each line represents a different clause. The space between
each line of code denotes how related/unrelated the concepts are. For that same
reason, variables should be declared as close as possible to where they are
used. However, instances variables should be declared at top of the file
because they belong to the entire class rather than a method. Related functions
should be placed as close as possible and the called function should be placed
after the caller function following allowing the amount of details to increase
as the file gets longer.

In **Horizontal Formatting**, we care about readability. Similar to Vertical
formatting space denotes how related concepts are to each other. The width of
the file should never surpass 80-120 characters because it would force the
reader to scroll horizontally and this is highly undesirable.

Every source file, exposes a code hierarchy to the reader. **Indentation**
allows that same reader to easily see that hierarchy. Avoid breaking the
indentation only for creating conscise/smart one-liners as those usually
decrease the code readability.

> Teams should agree on a single format to improve code sharing and readability
> as this allows each reader to feel right at home when working on the file.

## Objects and Data Structure

When working with objects the most important thing is to keep variables private
so that no one depends on them. In order to archive this, we use
**Data Abstraction**. In other words, we expose the implementation of an object
as little as possible. When we have to expose implementation we prefer to use
interfaces rather than getter/setters for variables because they allow data
manipulation without knowing the implementation.

While Objects and Data Structures may seem like two similar things they are in
fact the opposite. Objects hide their data behind abstraction and expose
function that operate on the data. Data Structures on the other hand, expose
their data and have no meaningfull functions.

> Procedural code (code using data structures) makes it easy to add new
> function without changing the existing data structures. Object-Oriented code,
> on the other hand make it easy to add new classes without changing existing
> functions - excerpt from *clean code*

In a nutshell, whats hard for Object-Oriented is easy for Procedures and
vice-versa.

**Law of Demeter** states that modules shouldn't know about the innards of the
objects it manipulates. A method of a class should only call the following
methods:

- the class it belongs to
- an object created by the method
- an object passed as an argument to the method
- object held in an instance variable of the class

Failing to follow this law leads to **Train Wrecks** or chained method calls
which are undesirable because a method ends up navigating methods it shouldn't
know of. Similarly, not adhering to Objects or Data Structures will result in
**Hybrids** which take the worst of both worlds either because the owner of the
code doesn't know the difference or doesn't understand the implementation.

A **Data Transfer Object** is a special kind of Data Structure class with public
variables and no functions. This type of Data Structure is usefull for
communication with a database. For example, an **Active Record** is a direct
translation of a database table to an object.

## Error Handling

Error handling is important but if done poorly it can obscure the logic. When
working with errors prefer exceptions rather than error codes because this makes
the callers code cleaner. Use try-catch-finally blocks since the *try* block
denotes that the following code block can abort at any point and then it should
immeadiatly execute the catch block. Therefor, try to force exceptions and
exception handlers on the caller. Whenever possible use unchecked exceptions,
because checked exceptions violate the open/closed principal by forcing the
caller to the exception in the signiture of each method even when the code is
several levels deep.

When working exceptions, provide enough context to determine the source and
location of an error. Define the exception classes in terms of a callers needs.
Classify errors by source or type. In a similar way, avoid returning null from
a method and passing null as an argument to a method as it leads to unnecessary
*NullPointerException*s which have to be checked extensively further down.

## Boundaries

We rarely control software in our systems. Thus we will look at practices and
techniques to keep the boundaries of our software clean.

3rd party code providers want to cover use cases as broad as possible but
consumers want to cover as close as possible to their needs which results in a
conflict. The key is to hide the interface boundaries as much as possible,
uncluttering the users code of managing code. For this, we can create our own
adapter to cnonvert the interface to our own needs.

When integrating 3rd party code its a burden to both learn their code and
testing it on our production code so a better approach is to learn and explore
the code through tests. Tests allow for a controlled experiment.

The cost of learning tests is none. Tests allow us to run code experiments in a
controlled way. Fruthermore, we can run the same tests to verify a future
release of the software. This allows us to migrate code at a much faster pace
and more confortably.

Good software design allows us to do changes without huge investements and
rework. Thus we should avoid letting too much of our code know about the 3rd
party particulars.

## Unit Tests

Agile and Test driven development encourage programmers to write automated unit
tests. When writing unit tests it is important to follow the 3 layers of TDD
(*test driven development*):

1. Don't write production code until you have written a failing test
2. Don't write more of a unit test than is sufficient to make it fail.
3. Don't write more production code than sufficient to pass the test.

This pushes us into a cycle on which we iterate. Working this way we write tests
that cover almost all our code.

Tests have to change as production code changes and unorganized and sloppy tests
can't do that. As a result, test start failing, production code becomes harder
to write, maintance increases with every release.

> Test's code is just as important as production code.
> excerp from Clean Code

When we have tests we don't fear making changes to our production code which is
why they add flexibility to our code.

Clean tests are defined by readability, clarity, simplicity and density of
expressiong. You want to say as much as possible with as few expressions as
possible.

> Use the build-operate-check pattern. First, build the test data. Second,
> operate on the test data. Third, check that the operation yields the expected
> results.

When writing tests, a DSL (domain specific language) allows us to follow a
convention and build an API on top of existing API's. Among the various school
of thoughts around testing, there is one that says that every test should only
have one assert statement. The benefits of this are modular, easy to understand
and precise tests. An even better approach would be to test a single concept per
test. Another helpful concept for writing tests is the **F.I.R.S.T** principle
which says that *tests should be*:

- **fast** otherwise it becomes a pain to run tests frequently
- **independent** from each other to avoid failures from cascading
- **repeatable** in any environment to avoid excuses due to conditions
- **self-validating** by returning booleans so failures don't become subjective
- **timely** before the production code because its harder to write tests afterwards

## Classes

Until now we looked at writing blocks of code but we won't have clean code until
we pay attention to higher levels of code organization.

A class should be organanized as followed from top to bottom:

1. begin with a list of variables
2. public state constants
3. private state variables
4. private instance variables
5. public functions
6. private utitilites (right below the calling function)

> There is seldome a good reason to have a public variable. We like to keep our
> variables and utility functions private. - excerpt from ***Clean Code***

All classes should be small. The size of a class is measured in
responsabilities. If you can't give a class a concrete name, it hints that the
class is too big.

> **SRP**: Single responsability principle states that a class/module should
> have one and only one reason to change.

It is thought that having many small classes makes the code unmanagable, but a
system with many small classes has no more moving parts than a system with few
large classes. There is just as much to learn so readability clearly pays off.

Most systems change is continued. A clean system organizes classes so to reduce
the risk of change.

> **OCP**: open close principle says that a class should be open for extension
> and closed for modification.

## Systems

We will look how to stay clean at higher levels of abstraction, the system level.

> System construction and system consumption are very different.

Software should seperate the startup process, when the application objects are
constructed and the dependencies are "wired" together, from the runtime logic
that takes over after the startup.

- using factories (AFP) our application controls when to create an object
- dependency injection seperates construction from use (inversion of control)

Software systems are unique compared to physical systems. Their architecture can
grow incrementally if we mantain the proper seperation of concerns.

An optimal system architecture consists of a modularized domain of concern each
of which is implemented with a plain old object. This architecture can be TTD
just like the code.

The agility provided by a POJO system with modularized concerns allows us to
make optimal just in-time decisions based on the most recent knowdledge. The
complexity of these decisions is also reduced.

Standards make it easier to reduce ideas and components. Recruit people with
relevant experience encapsulate good ideas and write components together.
However, the process of creating standards can take longer than the industry can
wait and some standards lose touch with the real needs of the adapter they are
intended to use.

## Emergence

What if there were rules that facilitaed the emergence of good design. Many feel
that Kent Beck's four rules of simple design are of significant help in creating
well designed software.

1. Runs all the tests
2. Contains no duplications
3. Expresses the intend of the programmer
4. Minimizes the number of classes and methods

The design must produce a system that runs as intended. A non-testable system is
a non-verifiable system. We tests in place we can improve our code by
incrementally refactoring our code. We can apply rules 2-4 that way without any
problems. Duplication is the primary enemy of a well designed system because it
creates additional work, risk and complexity. The majority of the costs of
software projects is the long term maintenance. Therefore, it is crucial to
write code that everyone can understand. The key idea to archive a well designed
system is to keep the classes and methods small instead of reducing the amount
of them.

## Concurrency

Writing concurrent programs is hard but it is a decoupling strategy that
improves the throughput and structure of an app. Nonetheless, there are some
myths and misconceptions around concurrency:

| Myth                                                  | Reality                           |
| ----------------------------------------------------- | --------------------------------- |
| always improves perfomance                            | when there is a long wait time    |
| design doesn't change                                 | it can be very different          |
| understanding concurrency isn't important             | it is very important              |
| it increases some overhead                            | adds perfomance & additional code |
| correct concurrency is complex                        | ...                               |
| bugs are not repeatable                               | so they are ingnored (bad)        |
| it requires a fundamental change in design strategies |                                   |

Due to the added complexity of concurrency, we need defense principles and
techniques to protect us from it's problems.

> SRP: a class/method/component should have 1 reason to change. Concurrency
> related code has it's own cycle of development. Therefore, keep your
> concurrency related code seperate from other code.

- limit the scope of data
- use copies of data
- threats should be as independant as possible

Know your execution model:

- Producer - Consumer: producer queue work and consumer complete it
- Reader - Writer: shared resources for readers and writers update them
- Dining Philosopher: processes compete for resources

Beware dependencies between syncronized methods cause subtle bugs in concurrency
code. Therefore, keep your syncronized methods small with as few critical
sections as possible.

Think about shut down code early and get it working early. It is going to take
longer than you would expect. Review exiting algorithms.

Testing concurrent code doesn't guarantee correctness but it minimizes risk.
Write tests with the potential to expose problems and then run them frequently
with different programmatic configurations and system configurations.

## Succesive Refinement

In order to create a clean program, one has to crete a dirty program  first and
then clean it up through successive refinements. When the program starts getting
messie, stop adding features and start refactoring.

> One of the biggest ways of ruining a program is by making massive changes to
> "improve" the program. Unfortunetly, programs rarely recover from such
> changes. In order to avoid this, we use TDD to keep our program working at
> all times.
