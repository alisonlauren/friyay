//REACT INTERVIEW QUESTIONS

//1. What is unidirectional data flow?
//the recognization that in react data only flows in one, and only direction.
//the only view you see in react, is the status of your state, in order to change
//you would have to change the data.

//2. What is the difference between props and state?
//state referrs to the status of the component, which can be altered within the component of
//within the data. While props is passing inheritence from one comp to another.

//3. Difference between controlled and uncontrolled component?
//in a controlled comp, form data is handled by react componenent, while
//an uncontrolled the form data is handled by the DOM itself.
//uncontrolled in not bound to state or onchange. need to change it? use a ref.

//4. What are refs?
//allows you to manipulate the underlying dom node, dev against the virtual dom
//like the .focus() method in JS.


//5. Importance of keys?
//keys are for iterating over an array of items, giving it unique key idenitfiers
//they are important because they can help you specifically identify what you want rendered
//react does not render duplicate keys.

//6. What is context and its purpose?
//context is a mechanism to pass data between components like props,
//but props move down components like a parent. if parent wants to go to grandchild,
//context allows that. while props would need to pass from parent-child-grandchild.
