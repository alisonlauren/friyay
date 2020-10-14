// //array that returns/pushes a new number starting at 5 and working down to zero one at a time
// // Setup
// var myArray = [];
// // Only change code below this line.
// var i = 5;
// while(i >= 0) {
//     myArray.push(i);
//     i--;
// }
// console.log(myArray);

//iterate with javascript for loops
// var ourArray = [];
// for (var i = 1; i < 6; i++) {
//     ourArray.push(i);
// }
// console.log(ourArray);

// //iterate odd number with for loop
// var ourArray = [];
// for (var i = 1; i < 10; i += 2) {
//     ourArray.push(i);
// }
// console.log(ourArray);

// //loop running from 9 to zero only odds
// var myArray = [];
// for (var i = 9; i > 0; i -= 2) {
//     myArray.push(i);
// }

// console.log(myArray);

// var arr = [10, 9, 8, 7, 6];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// // Setup
// var myArr = [ 2, 3, 4, 5, 6];
// var total = 0;
// for (var i = 0; i < myArr.length; i++) {
//     total += myArr[i];
//     console.log(total);
// }

// function multiplyAll(arr) {
// var product = 1;
//     // Only change code below this line
// for (var i=0; i < arr.length; i++) {
//     for (var j=0; j < arr[i].length; j++) {
//         product *= arr[i][j];
//         console.log(product);
// }
// }
// // Only change code above this line
// return product;
// }

// multiplyAll([[1,2],[3,4],[5,6,7]]);


// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


// function lookUpProfile(name, prop){
//     for (let i = 0; i < contacts.length; i++) {
//         if (contacts[i].firstName === name) {
//             console.log(contacts[i][prop] || "No such Property")
//         } 
        
//         }
//         return "No such Contact";
        
        
//     }


// lookUpProfile("Akira", "likes");


