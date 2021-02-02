function isPalindrome(string) {
    //to take out all non alphanumeric values
    let only_letters = /[\W_]/g;
    //then set all letters to lowercase and replace onlyletters with empty string
    let case_and_replace = string.toLowerCase().replace(only_letters, '');
    //reverse string by using methods to split up each value, reverse the order and join them together
    let reverse_string = case_and_replace.split('').reverse().join('')

    return reverse_string === case_and_replace

}

console.log(isPalindrome('racecar'))
console.log(isPalindrome(''))
