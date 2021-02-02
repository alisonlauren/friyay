// // function solution(A, B) {
// //     /*result variable stores the total number of characters to inser*/
// //     var result = 0;
// //     /*frequency array stores the result of each character*/
// //     var frequency = Array(26);
// //     /* initialize frequency array as 0*/
// //     for (var i = 0; i < 26; i++) {
// //         frequency[i] = 0;
// //     }
// //     /*update frequency table with the result of
// //     each eleemtn in A string */
// //     for (var i = 0; i < A.length; i++) {
// //         /*calculate the position of character by using its ascii value*/
// //         frequency[A.charCodeAt(i) - 97]++;
// //     }
// //     /*Decrease the frequency result of element if that element exists in B*/
// //     for (var i = 0; i < B.length; i++) {

// //         frequency[B.charCodeAt(i) - 97]--;


// //     }
// //     /*if the frequency of any character is not zero add its frequency to result*/
// //     for (var i = 0; i < 26; i++) {
// //         if (frequency[i] !== 0) {
// //             result += Math.abs(frequency[i]);
// //         }
// //     }
// //     console.log(result);

// // }
// // solution("apple", "pear")


// function solution(A, B) {
//     // first we need to set up an empty counter 
//     var counter = 0
//     // we want to count each number that occurs
//     //we can use array(26) refrencing the 26 varters in alphaB
//     var check_occurence = Array(26)
//     //set up for loop that only goes as high as 26 and loops through each element, setting up our occurance counter to 0 for now
//     for (var i = 0; i < 26; i++) {
//         check_occurence[i] = 0;
//     }
//     //now we need the occurance tracker to keep that count going from the a string
//     for (var i = 0; i < A.length; i++) {
//         //something i learned recently, using ascii values
//         check_occurence[A.charCodeAt(i)-97]++;
//     }
//     //now to lower the count of element that is in B
//     for (var i = 0; i < B.length; i++) {
//         check_occurence[B.charCodeAt(i) - 97]--;
//     }
//     //basically if your a positive number come join the counter
//     for (var i = 0; i < 26; i++) {
//         if(check_occurence[i] !== 0) {
//             counter += Math.abs(check_occurence[i]);
//         }
//     }
//     console.log(counter)

// }
// solution("lemons", "melon")



function solution(A, B) {
    // first we need to set up an empty counter 
    var counter = 0
    A = A.toLowerCase()
    B = B.toLowerCase()
    
    // we want to count each number that occurs
    //we can use array(26) refrencing the 26 varters in alphaB
    var check_occurence = Array(26)
    //set up for loop that only goes as high as 26 and loops through each element, setting up our occurance counter to 0 for now
    for (var i = 0; i < 26; i++) {
        check_occurence[i] = 0;
    }
    //now we need the occurance tracker to keep that count going from the a string
    for (var i = 0; i < A.length; i++) {
        //something i learned recently, using ascii values
        check_occurence[A.charCodeAt(i)-97]++;
    }
    //now to lower the count of element that is in B
    for (var i = 0; i < B.length; i++) {
        check_occurence[B.charCodeAt(i) - 97]--;
    }
    //basically if your a positive number come join the counter
    for (var i = 0; i < 26; i++) {
        if(check_occurence[i] !== 0) {
            counter += Math.abs(check_occurence[i]);
        }
    }
    console.log(counter)

}
solution('LemoN', 'MeLon')


