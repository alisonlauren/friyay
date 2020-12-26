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

//3. Difference between controlled and uncontrolled component?
//in a controlled comp, form data is handled by react componenent, while
//an uncontrolled the form data is handled by the DOM itself.
//uncontrolled in not bound to state or onchange. need to change it? use a ref.

//4. What are refs in react?
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



//5. Importance of keys?
//keys are for iterating over an array of items, giving it unique key idenitfiers
//they are important because they can help you specifically identify what you want rendered
//react does not render duplicate keys.

//6. What is context and its purpose?
//context is a mechanism to pass data between components like props,
//but props move down components like a parent. if parent wants to go to grandchild,
//context allows that. while props would need to pass from parent-child-grandchild.
