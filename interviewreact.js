//REACT INTERVIEW QUESTIONS

//1. What is unidirectional data flow?
//the recognization that in react data only flows in one, and only direction.
//the only view you see in react, is the status of your state, in order to change
//you would have to change the data.
//in this certain problem, you can fix it by giving an actual value change in the onchange handler
//with setState(e.target.value);

//2. What is the difference between props and state?
//state referrs to the status of the component, which can be altered within the component of
//within the data. While props is passing inheritence from one comp to another.
//state can be changed, and props cannot change unless changing the parent component.

//3. What is the concept of "Lift State Up"?
// if you ever have more than one component that is sharing from the same data
// put the two components together as siblings in a single componenet 
//because they will operate in sync anyways 

//4. Difference between controlled and uncontrolled component?
//in a controlled comp, form data is handled by react componenent, while
//an uncontrolled the form data is handled by the DOM itself.
//uncontrolled in not bound to state or onchange. need to change it? use a ref.

//5. What are refs in react?
// in regular JS, you can use that ID to query select and use the focus method,
//but focus method doesn't exist in JSX. Use refs come in to play this way,
//attatch ref to jSX element, getting access to underlying DOM node. 
// 1. import useRef from react
// 2. definie simple input in return   <input ref={inputRef} type="text" />
// 3. creating a ref and set it equal to useRef();
// 4. in useEffect you can use the focus() inputRef.current.focus();
//like using a query selector in JS but how to use it in JSX.
// it has to happen after comp is rendered, now it has a real input element represented in the brower
//Refs provide a way to access DOM nodes or React elements created in the render method.
//Managing focus, text selection, or media playback.
//Triggering imperative animations.
// Integrating with third-party DOM libraries.
//state is reserved for what you want to render on screen, but sometimes you have values
//that dont need to be on screen. 
//useful when you dont want a user to have a token for more than 15 minutes in idle, 
// create a client side timer, render cycle will continue until it hits 15 min, then log them out
//

//6. Importance of keys?
//keys are for iterating over an array of items, giving it unique key idenitfiers
//they are important because they can help you specifically identify what you want rendered
//react does not render duplicate keys.

//7. What is context and its purpose?
//context is a mechanism to pass data between components like props,
//but props move down components like a parent. if parent wants to go to grandchild,
//context allows that. while props would need to pass from parent-child-grandchild.

//8. What is an high order component?
//still relevant, they've been used heavily in the past, to understand now we must under stand the past
// function that receives a component as an arguement, then returns a newly augmented component
//ability to share logic within the app without having to re-write logic over and over

//9. What is a render prop?
//Render props is a pattern in react which helps us to pass the functions as a prop to the 
//components so that we can decide the component rendering logic instead of let 
//component render it’s own logic

//10. what are hooks, and how are they useful?
//allows us to hook into the lifecylce methods of a functional component, without defining a class
//help us share our own customized logic which we can use across different components
// useeffect hook can act like a component didmount, didupdate, unmount

//11. Explain Error Boundaries?
// to catch errors, like try catch. if an error happens, catch.. aka... do this if error happens
//static getDerivedStateFromError, change the state accordingly
//a fallback component can render, like a plan B. 
//componentDidCatch. 

//12. Best LifeCycle method for making API calls?
// when you make an API call it pulls data from the server,
//when you make the call you make sure DOM is ready, component didmount, or useEffect
//

//13. name some react patterns and usage?
//context-api pattern: when we pass props in deeply rooted component, allows you to access
//to be wrapped in a special tag
//render props: using children comp as functions, pass them as functions instead of comp

//14. Why would you use react in your project?
// depends on project, like where you are in your project lifecycle, which framework is changing
//in the next 6 months. 

//15. What is CSS-in-JS pattern?
//inline css in JSX

//16. Why can't you update state directly without setState()?
//setState will always trigger re rendering of the componenet,
//directly setting the state wont work.

//17. How many ways you can conditionally render in react?
//with an if statement, using expression, conditional operator

//18. What is fragments, and why do we use them?
// is for a component to return multiple elements. Fragments 
//let you group a list of children without adding extra nodes to the DOM.
// you can declare them with empty jsx tags or <React.Fragment> </React.Fragment>
// make rendering groups of elements a lot easier without adding extra markup.

//19. How to do code-splitting in react?
// when the react node compiles, it creates a single large file that is bad if you have a 
//huge project. you can split the code with dynamic import, you use react.lazy to init
//a component, loads async, need to provide some type of fallback componment so it wont break

//20. What are some alternatives to redux?
// mobX, appolo client + graphQL, RxJS

//21. What is redux middleware?
//middlewares are used to deal with asynchronous actions in your app. Redux provides with API called applyMiddleware which 
//allows us to use custom middleware as well as Redux middlewares like redux-thunk 
//and redux-promise.

//22. What is the diff between redux-saga and redux-thunk?
// both middlewares, in saga you can cancel actions

//23. What is a promise?
//A Promise in JavaScript is a object representing a value which may be available 
//in the future. For example, when asking the JavaScript runtime to make a request 
//to Twitter, it might give you a Promise of the HTTP response instead of giving you 
//the response immediately.

//24. How to optimize a react app?
//depends on complexity of app, "how big is this application?","What does the application do?",
//"What is breaking?". If preformance related, it may be rendering componenets that shouldn't rerendering
// if you're setting the same state over and over, it can slow the app down. you could use ShouldComponentUpdate,
//if the file size is huge taking to long to load, you can use lazyload certain routes.
// perhaps the API are slows, sever side improvement. perhaps the methods of updating state is incorrect
//videos and images may be loading slowly. changing class components to functional components could
//amp run time. //arrow function could improve run time. 

//25. Explain virtual DOM?
// react came up with virtual dom, updating the dom can be expensive you have to repaint on the dom//
//update as less as possible. 
//The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI 
//is kept in memory and synced with the “real” DOM by a library such as ReactDOM. 
//This process is called reconciliation.

//26. Algo/debugging
//fix it for me, state may not be updating, typos? console.log as you can
//understand what's going on first
//add functionality, ask questions, use paper and pen to explain logic


//27. EXPLAIN YOUR PROJECT:
//i recently created a e commerce react application where I focused my energy in the functionality of the project.
//the features included, password protected user login, setting up paypal with paypal developer, 
//at this point its only in the sandbox version, the ability to "add to cart", with the functionality
//to add subtotal, tax, you can see your order history as well as your "status" of payment and delivered,
//you can browse product, read more about the product and change your profile information.
//I used mongoDB to set up my database, I used redux in order to build my store of functionalities,
//


//28. Name lifecycle methods and their purpose?
//lifecycle methods are changing, depends on your version
// constructor: runs only once, sets init state, this.state = {}, then use setState
// render: the inital render
// useEffect and hooks: Using the Effect Hook Hooks are a new addition in React 16.8. 
//They let you use state and other React features without writing a class. 
//The Effect Hook lets you perform side effects in function components

//29. Why do we use arrow functions in react?
//first off, they do make your code look cleaner and more presentable. 
// one benefit of using arrow functions is that "this" is already bound to that function
//so we don't need to specify that anywhere else.

//30. How to prevent components from re-rendering?
// react.memo, shouldComponentUpdate or React.PureComponent

//31. What do you know about BoltSource?
//help companies transform their digital presence and develop delightful digital experiences 
//that are uncompromisingly fast, secure, and reliable.
// help companies design new features quickly,


//32. What made you want to apply at BoltSource?
// The values, especially extreme ownership, is that related to the book 
//extreme ownership by jocko willink? quality growth and empathy

//





import React from "react";
import "./styles.css";

import {useState} = React;

export default function App() {
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
        </div>
    );
}
