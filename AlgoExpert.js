// function fizzBuzz(number) {
//     if (number == 2) {
//         return "fizz";
//     } else if (number == 3) {
//         return "buzz";
//     } else {
//         return "we didn't code that number sorry";
//     }
// }

// console.log(fizzBuzz(2));
// console.log(fizzBuzz(3));
// console.log(fizzBuzz(4));

function fizzBuzz(number) {
    if (number % 15 == 0) {
        console.log("fizz")
    } else if (number % 5 == 0) {
        console.log("buzz")
    } else if (number % 3 == 0) {
        console.log("fizzbuzz")
    }
}
fizzBuzz(6);
fizzBuzz(10);
fizzBuzz(15);
