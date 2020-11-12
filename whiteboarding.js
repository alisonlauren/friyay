
// // // ============== QUESTION ONE 1 🖍 =================================
// // //find the longest word in a string
// // function longWord (str) {
// //     // naming a variable to the method of the str being split it sub-arrays
// //     let strSplit = str.split(' ');
// //     //initalizing the variable to be set for zero for now
// //     let longestWord = 0;
// //     //create a forloop
// //     for (let i = 0; i < strSplit.length; i++) {
// //         //if string i is bigger than the word its being compared with...
// //         if(strSplit[i].length > longestWord) {
// //             longestWord = strSplit[i].length; //then the longest word takes the new spot of var longestword
// //         }

// //     }
// //     return longestWord;
// // }
// // console.log(longWord("hi hello wuts up tyrannosaurus rex"));

// // function longWord (str) {
// //     let strSplit = str.split(' ');
// //     let longestWord = 0;
// //     for (let i = 0; i < strSplit.length; i++) {
// //         if(strSplit[i].length > longestWord) {
// //             longestWord = strSplit[i].length;
// //         }

// //     }
// //     return longestWord;
// // }
// // console.log(longWord("hi hello wuts up tyrannosaurus rex"));


// // ============== QUESTION 2 🦞 ======================
// // // check an array and see if it has duplicates
// // function dupChecker(arr) {
// //     let valueReturn = [];
// //     for (let i = 0; i < arr.length; i++) {
// //         const value = arr[i];
// //         if (valueReturn.indexOf(value) !== -1) {
// //             return value;
// //         }
// //         valueReturn.push(value);     
// //     }
// //     return "no dupes here";
// // }

// // console.log(dupChecker([1,2,3]))


// // //========== QUESTION 3 🐠 ========================
// // // Return index of two numbers out of an array that equal the target number given 
// // function gotDupes(arrayInput) {
// //     let freqCounter = {}

// //     for (let x = 0; x <= arrayInput.length; x++) {
// //         if (freqCounter[arrayInput[x]] > 1) {
// //             return true;
// //         }
// //         else if (!freqCounter[arrayInput[x]]) {

// //             freqCounter[arrayInput[x]] = 1
// //         }
// //         else {
// //             freqCounter[arrayInput[x]] = freqCounter[arrayInput[x]] + 1;
// //         }
// //     }
// //     return false;
// // }
// // //else there are none

// // console.log(gotDupes([1, 2, 3, 4, 5, 6, 7]))
// // console.log(gotDupes([3, 3, 3]))





// // function reverseString(str) {
// //     const newString = str.split(" ").reverse().join("");
// //     return newString;
// // }
// // console.log(reverseString("hello there"));


// // function centuryFromYear(year) {
// //     return Math.floor((year -1)/100 + 1);
// // }
// // console.log(centuryFromYear(1990));

// // find the mean, median and mode 
// const findTheMean = [3, 7, 2, 6, 5, 4, 9]
// let total = 0;
// for (let i = 0; i < findTheMean.length; i++) {
//     total += findTheMean[i];  
// }
//     const avg = total / findTheMean.length 


// //create an array
// const arr = [3, 7, 2, 6, 5, 4, 9];
// //set variable to use length property
// const len = arr.length;
// // set variable to sort function
// const arrSort = arr.sort();
// //set variable for function, Math.ceil always rounds up 
// const mid = Math.ceil(len / 2);

// const median =
// //is the array length even? if so sort the array with mid and divide by 2,
// //if not sort the array with the the mid minus 1 
//     len % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];



// console.log("The average is " + avg + " and the median is " + median);


//find palindrome, word that is same spelled backward and forward

// function findPal(str) {
//     //this removes spaces and converts to lowercase to avoid unnecessary errors
//     const newStr = str.toLowerCase().split("");
//     //for loop, goes through each char, start at 1st letter, i is less than the 
//     //new str.length/2, and go through the string
//     for (let i = 0; i < (newStr.length)/2; i++) {
//         //if new string has same value as the new string minus the char and one then its a pallindrome
//         if(newStr[i] == newStr[newStr.length-i-1]) {
//             return true;
//         } else {
//             return false;
//         }
        
//     }
// }


//find pallindrome, which is a function that will tell you if a string is spelled
//the same, forward and backward


//find pallindrome, write a function that solves whether a string is spelled same back/for

// function findPalindrome(str) {
//     const newStr = str.toLowerCase().split("").reverse().join('')
//     return str.toLowerCase() == newStr ? true : false
// }

// console.log(findPalindrome("eye"));  //true
// console.log(findPalindrome("RaCecAr")); //true
// console.log(findPalindrome("roar")); //false
// console.log(findPalindrome("function")); //false




//ex: returns occurences of char in string


// function findOcc(number, array) {
//     let count = 0 
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === number) {
//             count++
//         }
        
//     }
//     return count;
// }

// console.log(findOcc(4, [2,3,4,4,4,5,1]))


//given array of numbers 1-100, exactly one number in that array is a duplicate,
//write method to find duplicate
// exactly one number duplicated in this



function findDup(string) {
    let dup = []
    let obj = {}
    for (let i = 0; i < string.length; i++) {
        if (!obj [string[i]]) {
            obj[string[i]] = 1000000000
        } else {
            dup.push(string[i])

        }
        
    }
    return dup
}

console.log(findDup("stringgg"))






