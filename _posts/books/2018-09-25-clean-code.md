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

- [Meaningful Names](#Meaningful-Names)
- [Functions](#Functions)
- [Comments](#Comments)

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
licenses or to give a basic idea when the code it too complex. You may also use
comments to warn future readers of consequences or such as a long load time or
to mark an implementation as a **TODO**. Avoid any other type of comment such as
journal comments used to log changes made by individiual programmers as well as
commented out code.