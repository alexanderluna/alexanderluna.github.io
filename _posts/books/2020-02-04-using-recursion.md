---
title: What is recursion and why should I use it ?
image: assets/img/recursion
categories:
  - books
  - ruby
  - python
  - javascript
  - java
  - csharp
---

Recursion is when a function calls itself and is used mostly when it makes the
solution cleaner or gives better performance and many algorithms use it for those
purposes.

When you write a recursive function it is important to remember that it will
keep calling itself indefinetly. For that reason, the function needs an exit
condition which tells it when to stop or you get an infinite loop.

Recursive functions make use of the call stack. A stack is a **data structure**
where you "push" items on top and "pop" the top most item. Computers use
internally a "call stack". Each time a function is executed it gets pushed on
to the call stack. In recursion, the self calling functions are in a partially
completed state until the recursion finds the exit condiction and each function
returns which in turn pops each execution from the stack.

The power of recursion is that we don't need to keep track of the calls since
the call stack takes care of it for us.

> Reference book **Grokking Algorithms**
