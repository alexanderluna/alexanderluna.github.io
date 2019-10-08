---
title: Clean Code
categories:
- ruby
- javascript
- python
- books
image: "/assets/img/cleancode"
---

Bad code slows down development because it is messy and hard to make changes to
without breaking functionality and consulting multiple methods and classes.

- [Meaningful Names](#meaningful-names)
- [Functions](#functions)
- [Comments](#comments)
- [Formatting](#formatting)

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
