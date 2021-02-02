// // //array that returns/pushes a new number starting at 5 and working down to zero one at a time
// // // Setup
// // var myArray = [];
// // // Only change code below this line.
// // var i = 5;
// // while(i >= 0) {
// //     myArray.push(i);
// //     i--;
// // }
// // console.log(myArray);

// //iterate with javascript for loops
// // var ourArray = [];
// // for (var i = 1; i < 6; i++) {
// //     ourArray.push(i);
// // }
// // console.log(ourArray);

// // //iterate odd number with for loop
// // var ourArray = [];
// // for (var i = 1; i < 10; i += 2) {
// //     ourArray.push(i);
// // }
// // console.log(ourArray);

// // //loop running from 9 to zero only odds
// // var myArray = [];
// // for (var i = 9; i > 0; i -= 2) {
// //     myArray.push(i);
// // }

// // console.log(myArray);

// // var arr = [10, 9, 8, 7, 6];
// // for (var i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// // // Setup
// // var myArr = [ 2, 3, 4, 5, 6];
// // var total = 0;
// // for (var i = 0; i < myArr.length; i++) {
// //     total += myArr[i];
// //     console.log(total);
// // }

// // function multiplyAll(arr) {
// // var product = 1;
// //     // Only change code below this line
// // for (var i=0; i < arr.length; i++) {
// //     for (var j=0; j < arr[i].length; j++) {
// //         product *= arr[i][j];
// //         console.log(product);
// // }
// // }
// // // Only change code above this line
// // return product;
// // }

// // multiplyAll([[1,2],[3,4],[5,6,7]]);


// // Setup
// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];


// // function lookUpProfile(name, prop){
// //     for (let i = 0; i < contacts.length; i++) {
// //         if (contacts[i].firstName === name) {
// //             console.log(contacts[i][prop] || "No such Property")
// //         } 
        
// //         }
// //         return "No such Contact";
        
        
// //     }


// // lookUpProfile("Akira", "likes");


// function filter_list(num) {
// if (num > 1 && !== int) {
//     return num
// }
// // Return a new array with the strings filtered out
// }
// filter_list(1, 2, 'a', 'b');


// function titleCase(str) {
//     var arr = str.toLowerCase().split(" ");
//     var result = arr.map(
//         function(val){

//             return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//         });

//     return result.join(" ");
// }
// titleCase("alison is my name");


// function replaceWord(nStr) {
//     const string = "Four Score and Seven Years Ago";
//     const newString = string.replace("Four", nStr);
//     console.log(newString);
// }

// replaceWord("Seven");

// function digital_root(n){
//   let result = 0;
//   String(n).split('').map(num => {
//     result += Number(num);
//   });
//   return result > 10 ? digital_root(result) : result;
// }



// const digital_root = n => {
// while (n > 9) {
//     const newN = n.toString().split("").map(i => parseInt(i)).reduce((a,b) => a + b)
//     n = newN
// }
// return n
// }

// digital_root(1234);

// const s = [5, 5, 5]
// console.log(s)
// function changeSpots() {
//     s[0] = 4,
//     s[1] = 3,
//     s[2] = 1
// console.log(s)
// }

// changeSpots()


// const greeting = (name = "Someone") => "Hello " + name;

// console.log(greeting());
// console.log(greeting("Helen"));


// const sum = (...args) => {
//     return args.reduce((a, b) => a + b, 10);
// }
//   console.log(sum(1, 2, 3)); // 6

//create function tat takes a variable number of arguements.
// const sum = (...args) => {
//     return args.reduce((a,b) => a + b, 0);
// }
// console.log(sum(2,3,4,5,6,7));


//the spread operator (...) allow us to copy and paste an array
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// arr2 = [...arr1];
// arr2.pop();
// arr2.unshift("DEC")


// console.log(arr2);

//find the longest word in a string
// function longWord (str) {
//     //naming a variable to the method of the str being split it sub-arrays
//     let strSplit = str.split(' ');
//     //initalizing the variable to be set for zero for now
//     let longestWord = 0;
//     //create a forloop
//     for (let i = 0; i < strSplit.length; i++) {
//         //if string i is bigger than the word its being compared with...
//         if(strSplit[i].length > longestWord) {
//             longestWord = strSplit[i].length; //then the longest word takes the new spot of var longestword
//         }
            
//     }
//     return longestWord;
// }

// console.log(longWord("hi hello wuts up tyrannosaurus rex"));



//check an array and see if it has duplicates





//return indexes of two numbers that equal the target number



// //reverse a string
function revString(str) {
    //string first must be split up in seperate sub arrays
    //then use the reverse method to reverse the indeces 
    //lastly, we re-join the subarrays to single array.
    return str.split("").reverse().join("");
}
// console.log(revString("hello"));
// console.log(revString("I am Backwards"));



function findP(str) {
    const newStr = str.toLowerCase().split("").reverse().join('')
        return str.toLowerCase() == newStr ? true : false
}

// console.log(findP("raCecar"))
// console.log(findP("interview"))

// function findOcc(letter, string) {
//     let count = 0
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === letter) {
//             count++
//         }
        
//     }
//     return count
// }

// console.log(findOcc("p", "apple"))


// function findDup(number) {
//     let dup = []
//     let obj = {}
//     for (let i = 0; i < number.length; i++) {
//         if (!obj[number[i]]) {
//             obj[number[i]] = 1
//         } else {
//             dup.push([number[i]])
//         }
        
//     }
//     return dup
// }

// console.log(findDup([1,2,4,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,11]))


//5 must know interview questions for javascript 

//1. (meant to weed out beginners)
//How do you add to the beginning or end of an array? 

var myArray = ['a', 'b', 'c', 'd']
myArray.push("end")
myArray.unshift("begin")
console.log(myArray)

//2. how do you create a private variable in JS?

function secretVariable() {
    var private = "super secret code";
    return function() {
        return private
    }
}

var getPrivateVariable = secretVariable()
console.log(getPrivateVariable())

//honestly i dont really get this 🤷‍♀️


//3. What is the output of the function? (Checking your understanding of closures)

var num = 4;
function outer() {
    var num = 2
    function inner(){
        num++;
        var num = 3;
        console.log(num)
    }
    inner();
}
outer();


//the answer is 3. the first variable is irrelevant, the outer() just overrides and
//takes a new assignment. then inner() just assigns a new number again and prints.
//when inner() runs it prints 3, and when outer runs, it runs inner() therefore, still
//just printing 3 afterall. 

//4. What is the output?

console.log(typeof (typeof 1));

//while it looks like it should return integer, it returns string because 
// typeof 1 returns "number", and when you ask for the type of again, it 
//process your output "number" as a string.

//5. What is the output?

var hero = {
    _name: "John Doe",
    getSecretIdentity: function () {
        return this._name;
    }
}

var stoleSecretIdentity = hero.getSecretIdentity

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

//it will return undefined first, and then "John Doe"
//if you were to add ".bind(hero)" to the end of var stoleSecretIdentity = hero.getSecretIdentity;
//it would return "John Doe" twice.

