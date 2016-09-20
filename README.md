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

##Research Notes:
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


##Obstacles
I'm having a tough time fully understanding "state" and "props." I know props is immutable, but my confusion comes from knowing when to use them. In some example code, I see state scattered everywhere. I'm thinking the closest thing it resembles is how $scope looks in AngularJS. I guess for every component that references states (source of data) needed for function, then use the referenced state.

For example, for the ToDo list, if I have states that collect data for taskdescriptions which I want to reference in another component that deals with *when* the descriptions actually change, I'll use something like:

```js
this.setState({
newTaskDescription: event.target.value});
},
```
This helps me understand the differences between *properties and state*
#### Changing _props_ and _state_

- | _props_ | _state_ | 
--- | --- | --- 
Can get initial value from parent Component? | Yes | Yes
Can be changed by parent Component? | Yes | No
Can set default values inside Component?* | Yes | Yes
Can change inside Component? | No | Yes
Can set initial value for child Components? | Yes | Yes
Can change in child Components? | Yes | No

[Chart source](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)

##Main Components
1. The main todo app
2. The task descriptions
3. The checkboxes to mark them as completed


