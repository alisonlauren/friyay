function fizzBuzz(number) {
    if (number % 15 === 0) {
        console.log("fizz")
    } else if (number % 5 === 0) {
        console.log("buzz")
    } else if (number % 3 === 0) {
        console.log("fizzbuzz")
    }
}

fizzBuzz(6);
fizzBuzz(10);
fizzBuzz(15);

fizzBuzz(6);
fizzBuzz(10);
fizzBuzz(15);


randomStrings = ['elephant', 'cat', 'pEnguin', 'bird', 'dog', 'rat', 'lion', 'parrot']

function onlyFindE(array) {
    const onlyE_Array = [];
    const everythingElse = [];
    for (let index = 0; index < array.length; index++) {
        const string= array[index];
        if (string.includes('e')) {
            onlyE_Array.push(string)
        } else {
            everythingElse.push(string)
        }  
    }
    return onlyE_Array;
}

console.log(onlyFindE(randomStrings))


