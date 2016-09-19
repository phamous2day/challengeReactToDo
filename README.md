# challengeReactToDo
Coding Challenge for LoadUp to make a To Do List using React

##My approach
I'm going to do some research on the essentials that make up React. As I build the todo app, I'll be documenting each component detailing what they do for the sake of reference and replication in the future.

From a quick search, seems like the foundations are:

1. JSX - syntax extension that allows HTML-looking stuff to be readable in JS
2. Components - reusable code
3. Store data via props (immutable data) and state (where data comes from)

> The main difference between state and props is that props are immutable. This is why container component should define state that can be updated and changed, while the child components should only pass data from the state using props.
[Tutorialspoint](https://www.tutorialspoint.com/reactjs/reactjs_props_overview.htm)

##Misc. Notes:
* ReactDOM is a compiler engine
* Just as everything in HTML is composed of elements, everything in React is composed of components
* Any HTML in parenthesis() gets converted to JS
* Everyting has only 1 parent DOM element, not more
* When using Constructors, it's immediately followed by super()

```js
class Layout extends React.component{
constructor() {
super();
this.name = "phamous2day";
}
```

* State only gets used if a component has a internal value that only affects that component and DOESN'T AFFECT the rest of the app
* Props are injected into nearly every other component
