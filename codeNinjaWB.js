//Question One: Let's declare a variable! There's three ways 
//we can do so in Javascript. With var, let and const.

//var: when you declare a variable starting with "var", the variable
//can be used anywhere else in your project. you can also change the
//value of a variable that was declared with var.

//const: any variable declared with the "const" can not have its value
//changed and it must be used in the code block it is declared in. It will
//not be recognized in other parts of your code.

//let: any variable declared with "let" also needs to be used within
//the code block it was declared in but you can update its value.

//Question One: Declare your own name in a variable. Use the declaration
//that can be used anywhere in your code and have its value's changed.

///ANSWER HERE////

//Question 2: Let's assign a value to a variable! The reason we create
//variables in our code is so that we can give a name or identifier, to certain
//parts of our code that we plan on using or changing in our projects.

//Question 2: Let's assign a value to our variable written above. In 
// Javascript, we assign a value with a single "=" equal sign. Assign your
//age to your variable.

///ANSWER HERE///

// Question 3: Let's make an Array! What's an Array anyway? An array is 
//is an ordered list of values. Why would we need arrays? In our projects,
//we may have certain data that could be categorized, like a list of characters
//in your video game, or a list of catch phrases that your characters
//may say. In regular life, we want to order items we will start counting
//with the number one, but in code we start counting with zero. So the 
//first index or item in any array is 0 and then 1,2,3 etc. To create an
//array we give it a declaration, a name, and then a list of items like so,
//EX        var myList = ["item1", "item2", "item3"]

//Question 3: Write your own array about your own hobbies. Make sure
//that you include "coding" as index 3 in your array.




//Question 4: Is there more we can do with Arrays? Absolutely! There
//are built in methods that we can use in Javascript. Let's talk about
//push! Push does what it sounds like, it can take any value in one array
//and put it in another.

//EX:
var hats = ["baseball cap", "party hat", "sombrero"]
var partySupplies = ["cake", "decorations", "candles"]

//But lets say we want to move party hat on over to party supplies?
//How could we do that? Be sure to try this code in your console.

partySupplies.push(hats[1])
console.log(partySupplies)

//Question 4: Now its your turn. First, create two arrays. One about your
//favorite foods and another list about your friends favorite foods. Once you
//have to array's push a single item from one array to another.



//Question 5: What's a function and why do we need to "call" it? A 
//function is a list of instructions you give to a computer, a function call
//is when you tell the computer to do it! For instance, when your parent
//says "I need you to go clean your room right now", the function of this
//sentence is cleaning your room while the function call of this sentence
// is "right now". Computers need instructions and need to be told when
//to do them. 

//Here's an example of a function
function addUp(number1, number2) {
    var sum = number1 + number2
    return sum;
}
//Here's an example of a function call. Javascript will read code
//from line one down, so when it gets to line 62, its going to say
//ok! now's time to run that addUpFunction.
addUp(1,2)

//to prove your function works and is running we can ask the computer
//to print it to our "console", its just like our debug in the GDP. We can
//tell the computer to output our function like this...
//we just need to wrap our previous code in console.log().
console.log(addUp(1,2))

//Copy and past all the code below and try it on CodeSandBox! Be
//sure to check out the console.
function addUp(number1, number2) {
    var sum = number1 + number2
    return sum;
}
console.log(addUp(1,2))

//Question 5: Why does the below code not work in console?
function subtactDown(number1, number2) {
    var total = number1 - number2;
    return total;
}



