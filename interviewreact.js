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

//19. 