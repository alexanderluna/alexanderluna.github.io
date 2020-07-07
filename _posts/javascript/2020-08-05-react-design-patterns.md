---
title: React Design Patterns
image: /assets/img/react-testing
categories:
  - javascript
---

React is a powerful library which enables to build complex and scalable user
interfaces for the web and mobile. This article is for react developrs who want
improve their skills and dive a little deeper into the react ecosystem. If you
have build a small or medium sized application this article is right for you.

## A quick look at React

When we read the react documentation, one of the first things that we learn is
that react enforces **declarative programming**. Simply put:

- Imperative: describes how things work
- Declarative: describes what you want to archive

Imperative programming tends to be harder to read while declarative programming
avoids creating and mutating state (variables). For that reason, components
give us the perfect way of describing what we want rather than the how. Lets
assume we want to render a map in an imperative way.

```javascript
function render_map(x, y, zoom) {
  let map = new Map(longitude: x, latitude: y);
  map.setZoom(zoom);
  map.setMarker(x, y);
  map.renderView()
}
```

This is mostly pseudo code but we can see how imperative programming looks like.
We declare variables, configure, keep track of variables and potentially modify
them when needed. The declarative way is through components.

```jsx
<Map zoom={3} x={190} y={95} />
```

The central part of a component is the element which describes what gets
rendered on the screen. An element can have children or direct decendants.
There are mainly 2 types of elements.

1. String Element: DOM Node
2. Function Element: Component

Combined they form the render tree. Each component gets passed its props and
react renders them recursevly in a process called **reconciliation**.

One of the things that seems akward at first, is how react combines javascript
and HTML into one syntax called JSX. Typically we wouldn't do this because
seperation of concerns has thaught us that this is bad. However, javascript and
HTML are tightly coupled no matter how seperated they are structured. Javascript
always is there to modify and extend the HTML as we already saw from traditional
templating engines like Mustache, ERB, EJS, etc.

## Ways to keep our React Code Clean

React provides us with 2 ways of defining our elements, javascript functions and
JSX. In order to use modern Javascript, we need bable to compile our javascript
into a browser compatible version.

> Although JSX and HTML look similar we have to keep in mind that gets
> transpiled to javascript which means we can't use any javascript key words
> such as `class` and `for`. Instead we use `className` and `htmlFor` for
> example.

When writing JSX, always prefer multilines for components and properties as they
make it easier to read.

```jsx
<div>
  <header>
    <Main
      content={data}
      date="Friday"
      visible
      color={color}
    />
  </header>
</div>
```

For conditional code, we can use the `if/else` syntax however, a cleaner way of
creating conditional code in our components it through inline conditions.

```jsx
{ isLoggedIn && <LogoutButton />}
{ isLoggedIn ?<LogoutButton /> : <LoginButton /> }
```

For complexer UI elements it is better to use a helper function which
conditionally returns JSX to keep the render method cleaner or split the
component into smaller components. However, components
are not meant to be packed with logic. One solucion for this are
**Higher-Order-Components** which we will cover later.

> In order to keep a consistent format in our codebase, we can use ESLint. It
> comes with several extension which we can use to configure which format to
> follow a popular one is the airbnb preset.

Another way of keeping our code clean is to follow the
**functional programming** style. Specifically, functional programming is a
declarative paradigm to avoid side effects and data mutation. It makes it easier
to mantain our code.

In javascript, functions are first class objects which allows us to build
**Higher-Order-Functions**. HOF are functions that take a function as a
parameter and return another function.

```javascript
const add = (a, b) => a + b;
const log = (func) => (...args) => {
  console.log(...args);
  return func(...args);
};

const logAdd = log(add);
```

This concept allows us to build HOC in react. Another key aspect of functional
programming is purity or pure functions which are functions that have no side
effect. Impure functions return different results because they modify variables
outside their scope.

Yet another feature is immutability. If we have to change a variable, rather
than modify the original variable we cerate a new one and return it.

Finally, a popoular technique in FP is currying which consists in converting a
function with multiple arguments into a function that takes one argument at the
time returning another function.

```javascript
const add = (x) => (y) => x + y
const adder = add(1); // 1
adder(2); // 3
adder(3); // 6
```

## Creating Reusable Components with Hooks

Hooks let us use state and other features in functional components while at the
same time being backward compatible. Thus far, we could only use state in class
component the `useState` hook allows us to use it in functional components.

```javascript
import { useState } from 'React';

const [counter, setCounter] = useState(0);
```

We can use the the counter to reference the value and the setCounter to modify
it. As great as hooks are there are 2 main best practices.

1. Only call hooks at the top level
2. Only call hooks from react functions

Another area where we can use hooks is the lifecycle methods. For that we can
use the `useEffect` hook.

```javascript
import { useEffect } from 'React';

// componentDidMount
useEffect(() => {
  // do something
}, []);
```

The first parameter is the callback of the effect we want to use. The second is
the dependency array. We can use thh dependency array to conditionally fire the
effect whenever those dependencies change.

A new addition to react is the memo HOC. This HoC allows us to do a shallow
comparison between components based on the props and memorize similar components
to render them faster. We simply wrap it around our components.

```jsx
export default memo(MyComponent);
```

When performing filter and render heavy tasks the `useMemo` hook can help us. It
memorizes the result of a function and listens to dependencies.

```jsx
const filterTodos = useMemo(() => todos.filter(todo) => {}, []);
```

The dependency array at the end tells the hook when to render and when to ignore
changes. When working with handlers usually we pass those down to the child
components that end up using it to notify the parent. The issue is that the
handler is passed to several components generating a new function each time and
a new re-render.

Insteadm we can use the the `useCallback` hook. This hook memorizes the function
definition resulting in less re-renders.

```jsx
const handleDelete = useCallback(() => ourFunction, []);
```

Similar to other hooks the array stores dependencies to know when to re-render.
Another use for `useCallback` is inside `useEffect`. When we call a function
inside a `useEffect`, it becomes a dependency of that hook. However, functions
change constantly causing a lot of re-renders and react will warn us of this.
Instead, we can use a `useCallback` for our function.

```jsx
useEffect(() => {
  printTodos();
}, []);

const printTodos = useCallback(() => {
  // do something
}, [todoList]);
```

Here an overview of the hooks:

- memo: memorize component
- useMemo: memorizes calculated value
- useCallback: memorize function definition

> Finally, keep in mind to not use any of the hooks unless absolutly necessary.
> The purpose of these hooks is to improve performance of render intensive tasks
> in our components. However, if we over use them their worsen the performance.
