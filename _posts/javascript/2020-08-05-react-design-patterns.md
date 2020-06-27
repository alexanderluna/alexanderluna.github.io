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
