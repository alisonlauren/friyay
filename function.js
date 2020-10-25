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