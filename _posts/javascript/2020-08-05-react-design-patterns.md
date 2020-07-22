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

- [Understanding React better](#understanding-react-better)
- [Ways to keep our Code Clean](#ways-to-keep-our-code-clean)
- [Improve Component reusability with Hooks](#improve-component-reusability-with-hooks)
- [Composition Patterns](#composition-patterns)
- [Understanding GraphQL](#understanding-graphql)
- [Handling Data](#handling-data)
- [Forms, Events and DOM animations](#forms-events-and-dom-animations)
- [Styling Components](#styling-components)
- [Server Side Rendering](#server-side-rendering)

## Understanding React better

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

## Ways to keep our Code Clean

React provides us with 2 ways of defining our elements, javascript functions and
JSX. In order to use modern Javascript, we need bable to compile our javascript
into a browser compatible version.

> Although JSX and HTML look similar we have to keep in mind that it gets
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
component into smaller components. However, components are not meant to be
packed with logic. One solution for this are **Higher-Order-Components** which
we will cover later.

> In order to keep a consistent format in our codebase, we can use ESLint. It
> comes with several extension which we can use to configure which format to
> follow. A popular one is the airbnb preset.

Another way of keeping our code clean is to follow the
**functional programming** style. Specifically, functional programming is a
declarative paradigm to avoid side effects and data mutation. It makes it easier
to mantain our code. In javascript, functions are first class objects which
allows us to build **Higher-Order-Functions**. HOF are functions that take a
function as a parameter and return another function.

```javascript
const add = (a, b) => a + b;
const log = (func) => (...args) => {
  console.log(...args);
  return func(...args);
};

const logAdd = log(add);
```

This concept allows us to build HoC in react. Another key aspect of functional
programming is purity or pure functions which are functions that have no side
effect. Impure functions return different results because they modify variables
outside their scope.

Yet another feature is immutability. If we have to change a variable, rather
than modify the original variable we create a new one and return it.

Finally, a popoular technique in FP is currying which consists in converting a
function with multiple arguments into a function that takes one argument at the
time returning another function.

```javascript
const add = (x) => (y) => x + y
const adder = add(1); // 1
adder(2); // 3
adder(3); // 6
```

## Improve Component reusability with Hooks

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

## Composition Patterns

No we will focus on communication between components. One key aspect is
reusablity. We can archive this through small components which we can compose
later to form complex UI.

While it is common to pass props to components to to pass data down, we can also
use the children property. This allows us to render complexer elements beyond
just text without adding more logic to our components.

```jsx
const button = ({children}) => (
  <button className="btn">{children}</button>
);
```

Components typically are a mix of logic and presentation. We can use the
**container and presentational pattern** to seperate those two concerns. It
consists in splitting components into smaller ones with clear responsibilities.
The presentational component is logic free. The container component is appended
with "container" while presentational component gets the original name.

- GeolocationContainer.tsx: handle geolocation logic, request, load, state.
- Geolocation.tsx: functional pure component, just renders the props.

> This pattern is useful when your single component logic becomes to coupled
> to the presentation (render block).

HoC are great at helping us reuse existing components to enhance them.

```jsx
const HoC = (Component) => EnhancedComponent;
```

Using HoC we can for instance add props existing components or classNames.
Similar to the children property can basically wrap the component.

```jsx
const Enhancer = (Component) => (props) => (
  <Component {...props} extraProp={true} className="enhance-me" />
);
```

A slightly new approach is to use FunctionAsChild where instead of a component
we pass a function as a child which feeds parameters at runtime to the
component.

```jsx
<Fetch url="...">
  {data => <List users={data} />}
</Fetch>
```

This allows the user of the component to not be forced to use predefined prop
names.

## Understanding GraphQL

GraphQL is a query language for APIs which  allows us to request the exact data
we need. The best way of setting it up in the backend is with Apollo Server.
Apollo among the best tools to setup graphQL on the client and server side.

On the server side we define our database models, `resolvers` and `typeDefs` to
create a schema which we can use in our Apollo server. The typeDefs mirror our
entities in the database similar to a database schema. It includes types for the
entities, queries and mutations to describe which CRUD operations are possible.
Queries are the equivalent of a GET request in a REST API. Mutation is how we
post data covering the remaining (PUT, PATCH, POST, DELETE) verbs.

> The typeDef only defines the different queries, mutations and types similar to
> a schema file.

Now we can move on to the resolvers. Resolvers are the logic behind the typeDefs
we defined previously.In here we implement the queries and mutations. Once both
typeDefs and resolvers are ready we have to combine them into a single typeDef
and a single resolver. Luckily, apollo comes with convenient tools for this.

Next up is authentication. This is very important for APIs given that there is
no state and the client is detached from the server. The most commong way to do
this is through JWT and open standard that digitally signs the token (HMAC).

The way it works is we generate a secret key, import JWT in our backend and
verify each request with the secret key. JWT takes care of signing the secret
key so that it is protected together with an expiration date. Inside the token
we can save a payload such as a user id which we can use then for our logic as
needed.

We can implement JWT on the server by adding extra middleware to check that the
user is logged in, check user privilage and redirect if needed.

> Middleware is a function with access to the request and response objects and
> the next funciton to execute the middleware and move on to the next middleware
> or request handler.

While this wasn't an exhaustive coverage of how GraphQL works with the client
and server side. It provides a high overview and may clear up any doubt.

## Handling Data

The react context API is a new addition to react. It is so popular that many
developers are shifting away from redux as it allows us to share data between
component but in a slighly simpler way. We begin by creating a context similar
to how we would define a local state.

```jsx
import { createContext } from 'react'

export const TodoContext = createContext({
  todos: [],
  url: ''
})
```

Then we create a provider component where can render the children.

```jsx
const TodoProvider = ({children, url}) => {
  // do some logic to fetch data wiht the url
  const context = { todos, url }
  return (
    <TodoContext.Provider value={context}>
      {children}
    </TodoContext.Provider>
  )
}
```

The provider component adds the context to the child component enhancing it. We
can use this inside our app now to wrap any component that should get access to
the context.

```jsx
const App = () => {
  return (
    <TodoProvider url="...">
      <Todo/>
    </TodoProvider>
  )
}

const Todo = () => {
  const { todos, url } = useContext(TodoContext)
  return (
    // todos.map(todo => ...)
  )
}
```

Another recent added feature is React Suspense. However, it is still
experimental. Suspense lets us suspend component rendering until a condition is
met. It can render a loading component or anything as fallback.

SWR (Stale-While-Revalidate) is an HTTP cache invalidation strategy. It returns
the cache first, fetches the data and then returns up to date data.

First we configure SWR in our App through the `SWRConfig` component which does
the fetching. The child is the component uses the suspense component to pass the
data to its child component or fallback if it fails. Finally the grandchild can
access and render the data using the `useSWR` hook.

```jsx
import { SWRConfig } from 'swr'

const App = () => {
  return (
    <SWRConfig fetcher>
      <TodosContainer/>
    </SWRConfig>
  )
}

import { Suspense } from 'swr'

const TodosContainer = () => {
  return (
    <Suspense fallback={FallbackComponent}>
      <Todos />
    </Suspense>
  )
}

const Todo = () => {
  const { data } = useSWR()
  return (
    // data.map(todo => ...)
  )
}
```

> Note that you can use Suspend several times. It will always perform fetches
> to validate the data is up to date. However, there isn't a defined pattern for
> using it yet.

## Forms, Events and DOM animations

When it comes to forms in react they can be controlled or uncontrolled.
Uncontrolled components are components where we don't manage the values directly
but let the DOM do it.

```jsx
const [values, setValues] = useState('')

return (
  <form>
    <input type="text" name="name" onChange={handleChange} />
    <input type="text" name="email" onChange={handleChange} />
    <button>Submit</button>
  </form>
)
```

Looking at the handler, we use can use the event target to dynamicaly set the
key in our state.

```javascript
cont handleChange = ({target}) => {
  setValues({
    ...values,
    [target.name]: target.value
  })
}
```

Using this technique we cna add as many fields as we want to our form. Every
change triggers that `handleChange` event handler.

A controlled component contriolls the values of the input elements in a form
by using the component state. For our input this means that we add the value
field to set the value dynamicaly as well based on the state.

```jsx
<input name="email" onChange={handleChange} value={values.email} />
```

An important thing to note is that events work differently across browser. React
wraps the handler to provide a consistent API for us. This is called a
**synthetic event**. We can then attach handlers for each event we want to
listen to. A cleaner approach is to use a single handler and swtich on the type
to handle different events in one function.

```javascript
const chandleEvent(event) => {
  switch(event.type) {
    case "click":
      // component was clicked
    case "dbclick":
      // component was double clicked
    case "hover":
      // component was hovered
  }
}
```

When we attach an event, React doesn't attach an actual event handler to the DOM
node. It attaches a single event handler to the root element. Through
**event bubbling** it can listen to all events. React can then call the handler
of a specific component in a technique called **event delegation**. This
improves memory and speed.

Sometimes we want to access the underlying DOM elements. We can do this with
`refs`.

```jsx
const inputRef = useRef()

const handleClick = () => {
  inputRef.current.focus()
}

return () {
  <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Submit</button>
  </div>
}
```

> In general, avoid using refs because it is impertative rather than declarative
> which is what react strives for.

In react we can create animations in a declarative way with an addon called
`react-addons-css-transistion-group`.

```jsx
import CSSTransitionGroup from "react-addons-css-transistion-group"

const Transition = () => (
  <CSSTransitionGroup
    transitionName = "fade"
    transitionAppear
    transitionAppearTimeout={500}
  >
    <h1>Hello</h1>
  </CSSTransitionGroup>
)
```

`transitionName` is the name of the css class that gets added to the element.
The component appends "-appear" to it. The "-appear-active" is there to so we
can fire the animation.

```css
// transitionName + "-appear"
.fade-appear {
  opacity: 0.01;
}

.fade-appear.fade-appear-active {
  opacity: 1;
  transition: opacity 0.5s, ease-in;
}
```

React motion is another library to handle animations.

```jsx
import { Motion, spring } from 'react-motion'

return () {
  <>
    <Motion
      defaultStyle={{opacity: 0.01}}
      style={{opacity: spring(1)}}
    >
      {interpolatinStyle => (
        <h1 style={interpolatingStyle}>Hello</h1>
      )}
    </Motion>
  </>
}
```

What is interesting about react motion is that it uses the function as a child
pattern. That way we can dynamically get updated styling for every point in
time.

## Styling Components

When it comes to styling components there are several approaches from CSS,
inline-css to styled component and modules.

The problems with vanilla CSS at scale because names are global making it hard
to name classes. It is difficult to attach one component to one CSS style in a
different file which in turn makes it difficult to make changes. Furthermore,
since the relation between CSS and components isn't clear, it makes it difficult
to delete old styles. Simply put, it is is difficult to isolate styles and
mantain them.

For those reasons react recommends to inline the styles for components.

```jsx
const style = {
  color: 'blue',
  width: 500,
};

<button style={style}>Hello</button>
```

Given that it is javascript and inlined, we can recalculate values on the client
at runtime. Some limitation with this are however media queries and animations
which can't be done via inline styles. Debugging is another problem which is
hard to do given that we don't have class names nor ids to guide us. For those
reason the react community developed tools to solve these problems.

Once of these is called `radium`. This way we can add pseudo-classes such as
hover, active and focus as well as media queries.

```javascript
const style = {
  color: 'blue',
  ':hover': {
    color: 'red'
  },
  '@media(max-width: 480px)': {
    color: 'green'
  }
};
```

Radium archives this through event listeners and attaches the styles as needed.
Another tool which lets us keep our css files but scoped to our component is
called CSS modules which works with webpack. (css-loader and style-loader). We
create our css file and a `style` object with our css which we can use to add it
as a class name.

```css
.button {
  color: blue;
}
```

```jsx
<button className={styles.button}>hello</button>
```

The good thing about CSS modules is that it scopes our css and allows us to
write normal css (animations and media queries included).

Yet another more modenr tool tries to combine inline styles with css modules
ability to keeo our css. It is called styled component. Using this library we
can write our css  like usual using template literals.

```jsx
import styled from 'styled-component';

const Button = styled.button`
  color: blue;
`
```

## Server Side Rendering

Server side rendered pages are better for SEO and can be perceived as faster
while allowing knowledge sharing between the front and back end. We can render
react components on the sever. However, at a cost.

A universal application is an app that can run on the server as well as on the
clien. Using SSR (server side rendering) we can render react on the server.
Javascript can run on the the sever as well as the client allowing knowledge
sharing which in turn makes it popular to build isomorphic applications with
react. An isomorphic applications is an app that looks the same on the client
as on the server also known as a universal app.

One of the main reasons of rendering on the server is SEO. Another big advantage
is that of using a commong language, javascript, for the entire code base. If
we render parts of the app on the server we can render viewable content quicker.
SPAare quick and responsive but their first load time is usually slow.

As proimising as SSR is it comes with its short commings. We have to mantain a
server with all its routes, handlers and logic. Thus SSR shuold only be used
when it is really necessary.

Now we can build a SSR application. We will need a server usually an express
web server and a client. Webpack allows us to combine our client and server
code. On the server side we need a `template.ts` file which exports a function
to return to the browser.

In our server we import React and express and configure it pointing at our
static assets. We import our react component and inside a request handler we
can render it.

```javascript
app.set('/', req, res, () => {
  const body = renderToString(<App/>)
  const html = template(body)
  res.send(html)
})
```

As you can see we render the app component and pass it ot the template function.
We can load data from a database or an API and feed it to the component as a
prop. For that, we have to define it in our tempalte prior and make the data
globally available through the window object `window.my_data = xyz`.

```javascript
const html = template(body, my_data)
```

While this seems quite complicated, we can simplify it through Next.js. In
Next.js we can build pages that match the browser URL and build our app using
several conventions. Nonethless, Next.js comes with its own set of solutions
and documentation 
