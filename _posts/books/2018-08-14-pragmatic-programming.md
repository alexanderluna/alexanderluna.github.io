---
title: How to become a Pragmatic Programmer
image: /assets/img/pragmatic
categories: books
---

This book walks you through the specifcations and technical knowledge of a
good software developer. You will learn to take requirements and convert them
into working and mantainable code. The goal is to write software that is self
contained, tested, documented and easy to read. While the book covers a lot of
topics and pratical theories it doesn't cover how to implement these things
directly. It focuses on teaching you the right way to develop software.

- [Pragmatic Philosophy](#pragmatic-philosophy)
- [A pragmatic approach](#a-pragmatic-approach)
- [The Basic Tools](#the-basic-tools)
- [Pragmatic Paranoia](#pragmatic-paranoia)
- [Bend or Break](#bend-or-break)
- [While you are coding](#while-you-are-coding)
- [Before the Project](#before-the-project)
- [Pragmatic Project](#pragmatic-project)

## Pragmatic Philosophy

> A pragmatic programmer is defined by his: philosophy, attidude and problem
> approach

- You take responsability for what you do
- You understand the context you program in
- You develop good enough code
- You need broad knowledge and experience

> Always provide solutions to problems rather than excuses

Pay attention to the details to avoid entropy and fix the little things
before they become worse.

> Always be a catalyst of change and pay attention to the big picture

Write code that is good enough and doesn't put extra pressure on the deadlines
and communicate with the client.

> Learn 1 new language every year and read a technical book every 1-2 months
> for fun to learn how to approach problems differently

Avoid information and knowdledge which is influenced by vendors and media such
as trends. Don't forget to analyze what you hear and read.

When you communicate know what you are saying, know your audience and present
your information well.

## A pragmatic approach

- Programmers are always in maintance mode
- Don't duplicate knowledge to avoid maintance nightmare (keep it DRY)
- Modify code to cover different scenarios rather than duplicate it
- Don't write comments for low level implementations but for high level components
- Write documentation for code
- Create highlevel implementations shared across teams to avoid code duplication
- Communicate with other developers

> Make your code easy to resuse

Orthogonality: two lines meet at a right angle meaning that one thing doesn't
affect the other thing
{:.info-box}

Use Orthogonality to eliminate effects among non-related things. For that,
create simple self contained blocks of code. That way, you can avoid sikness
spreading across modules. Furthermore, be careful of third party libraries and
toolkits, keep your code decoupled, avoid global data and avoid similar functions.

> Avoid making critical and irreversable changes. Try to make your code changes
> reversable

Develop `tracer code` which gets you from the requirement to some aspect of the
final system quickly. Keep in mind that tracer code isn't prototyping since
tracer code will be the skeleton of your final project while a prototype is
disposable code.  You can use prototyping to explore and experiment with models
but it ALWAYS is disposable. Tracer code allows you to produce flexible code.
Furthermore, learn to program close to the problem domain and to make good
estimates to avoid surprises.

## The Basic Tools

- Don't adopt a single tool, be confortable beyond the limits.
- Use plain text to store knowledge in a human readable form.
- Command line shells have enourmous power and are good to automate and build.

> Learn to use a single editor well

Your editor should be configurable, extensible and programmable.

> Debugging is problem solving don't involve finger pointing and excuses

When debugging discover the root of the problem not just the problem and pin
point exactly how the bug occures. Learn text manipulation languages to automate
common tasks and write code that writes code.

## Pragmatic Paranoia

> You can't write perfect software

- Design by Contract (DBC) documents the rights and responsibilities of software
- Use assertions to avoid crashes and bugs and leave them on
- Check for all possible errors using exceptions (try, catch, return)
- Use error handlers and exceptions interchangeably

> Finish what you start to avoid resource hogging

Deallocate resources in the opposite order in which you allocated them.

## Bend or Break

Write you code lose and flexible. Minimize coupling across modules to avoid
unwanted changes. Coupling is fine as long it is well known and acceptable.
Modules should manage all module delegation, this requires wrapper methods to
forward third modules instead of calling them directly. Use metadata to
configure, tune and run applications as much as possible. Avoid temporal
coupling (sequential dependence) to improve concurrency. Use hungry consumer
model, using independent tasks and a centralized queue.

> Design using servies

In concurrency protect resources and ensure objects are in the right state always.

> Always design for concurrency

Use events to handle communication across modules without coupling. For event
notification use pub/sub protocol (MVC). Blackboard systems allow for complete
decoupling. You have a single consistent interface to the blackboard.

## While you are coding

Avoid programming by coincidence (ex. lucky it worked). When you don't pay
attention, implementation accidents start to happen. Don't code deliberatly
and be aware of what the code does, document you assumptions, test your code
and assumptions and change your code so it doesn't get dusty. Use big O notation
to approximate algorithm efficiency (time, memory) as this notation helps you
to quickly  spot bottlenecks and make improvements.  Investigate if a given
algorithm is a bottleneck before investing time improving it. Software has to
keep being changed and refactored.

When you Refactor your code look for code that:

1. Doesn't fit
2. Is duplicated
3. Is not orthogonal
4. Is outdated
5. Is a performance bottleneck

> Refactor early and refactor often

Write code that is easy to test

> Test your software or your users will

Boilerplate generators produce code but don't use them unless you understand
the code they produce.

## Before the Project

Determine the requirements at the beginning

> Don't gather requirements - dig for them as they are hidden

Become the user to get a better feeling for the requirements. Document your
requirements and define your use cases. Don't overspecify, requirements are
not design/UI rules but user needs.

> Abstractions live longer than details

Don't keep piling up requirements. Use a project glossary to specify vocabulary
and terms that the team uses. Find the constraints you work with to solve
seemingly difficult tasks.

> Don't think outside the box - find the box

Look for an easier way to solve the problem. Solve the right problem not the
perceived problem.

> Listen to nagging doubts - start when you are ready

Don't fall into specification hell

> Some things are better done than described

Formal methods were created to make programming more like engineering.

> Don't be a slave to formal methods

Most formal methods are too rigid and don't allow to adapt code to the situation.
Formal methods are important as they are a tool in our tool belt but don't over
do it.

> Expensive tools don't produce better designs

## Pragmatic Project

When you work in teams it is important to establish rules. Don't discourage your
team from fixing bugs and broken windows. Everyone should monitor the environment
for changes. Create a brand to create a sense of union and improve communication.
Appoint code librarians to handle specific parts of the code (keep it DRY).

> In the software hierarchy the closer to the client you are allowed the more
> senior you are

Organize around functionality not job functions. Split your people into teams
and let them communicate, organize and work. Changes should only affect the
particular team in charge of the feature. Automate everything the team does.

> Don't use manual procedures

Use cron to automate tasks and schedule them. Compiling should be repeatable
and reliable (use make files). Automate project creation. We can use comments
at the top of our code to indicate review and filter the code files using a
script.

> Test early, test often, test automatically

Test state coverage not code coverage.

> Find bugs once

Catch bugs and write a test for it. Always document your code.

> Build documentation in don't built it on

Comment your code. Publish documentation online where it is updated frequently
rather than print it and stick to the requirements.

> Gently exceed your user's expactations

Manage expecations and convey what can and cannot be done. Surprise your users
in a good way and be proud of the code you write and take responsability for it.
