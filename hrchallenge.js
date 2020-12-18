//count all the words in a sentence, except numbers, and all hyphenated words count as 1. 

// write a function that takes in an array of distinct integers and a target sum
// if any two numbers in the input array sum up to the target sum return the two numbers

// 1. Two number sum in an array

function twoNumberSum(array, targetSum) {
    //essentially, setting up two "pointers", i and j
    //but for now i, and setting the - 1 because im going to start pointer j on the last integer
    for (let i = 0; i < array.length - 1; i++) {
        //setting varialbe for wherever the pointer is at the given time
        const firstNum = array[i];
        //now for pointer j, which is always one ahead of pointer i
        for (let j = i + 1; j < array.length; j++) {
            //setting varialbe for wherever the pointer is at the given time
            const secondNum = array[j];
            //if the firstnum and secondnum equal the target sum
            if (firstNum + secondNum === targetSum) {
                //return new array with the two numbers that equaled the target sum
                return [firstNum, secondNum]
            }
        }
    }
    //return it!
    return [];
}


// 2. CHeck if valid subsequence

//given two non empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one
//example: // array = [5, 1, 22, 25, 6, -1, 8, 10]
//sequence = [1, 6, -1, 10]
//output = true
//the reason its true is because the 1, 6, -1, and 10 are in the same order as the array, regardless of the fact that is has fewer values. its really just an order question

function isValidSubsequence(array, sequence) {
    //setting up my pointers, one for the array and one the sequence
    let arrIdx = 0;
    let seqIdx = 0;
    // while arrIdx pointer never exceeds the array length and same for the seqIdx and sequence length
    while (arrIdx < array.length && seqIdx < sequence.length) {
        // if the arrIdx and seqIdx ever match as the same number, then move on in the list in the array and the sequence
        if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
        arrIdx++;
    }
    //this will basically return true or false based on the condition that seqIdx is absolutely equal to sequence.length
    return seqIdx === sequence.length;
}




// 3. Find Closest Value in BST

//Write a function that takes in a binary Search Tree and a target integer value
//and returns the closest value to that target value contained in the BST.

function findClosestValueInBst(tree, target) {
    //to implement recursively, we will take in closest value
    //via the helper method
    //the last parameter being the closest value
    return findClosestValueInBstHelper(tree, target, tree.value)
}

function findClosestValueinBstHelper(tree, target, closest) {
    //if the bst gets to point where there is no value then just return the closet value instead
    if (tree === null) return closest;
    //if the cloest value is greater than the the new value from the target
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        //the value now gets assigned as the closest value
        closest = tree.value
    }
    if (target < tree.value) {
        //if we get to a root that is smaller than the target ignore that side of the tree
        return findClosestValueinBstHelper(tree.left, target, closest);
        //if the target is bigger than the tree value then ignore that side of the tree
    } else if (target > tree.value) {
        return findClosestValueInBstHelper(tree.right, target, closest);
    } else {
        return closest;
    }

}


class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



// 4. Write a function that takes in a Binary Tree and returns a list of its branch
//sums ordered from leftmost branch sum to rightmost branch sum.

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    //appends value to list
    const sums = []
    calculateBranchSums(root, 0, sums)
    return sums;
}
//the recursive function 
function calculateBranchSums(node, runningSum, sums) {
    if (!node) return;

    const newRunningSum = runningSum + node.value;
    if (!node.left && !node.right) {
        sums.push(newRunningSum);
        return;
    }
    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);

}


exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;


// 5. calculate an array using the fib sequence

const fib = (n) => n <= 2 ? 1 : fib(n - 1) + fib(n - 2);

console.log(fib(28));

//6. calculate a base to its power (example 2 to the 2 second power is 4) 
const power = (base, exponent) => {
    //if exponent is equal to zero that just return the number 1
    if(exponent === 0) return 1;
    //otherwise base x power
    return base * power(base, --exponent);
}

//7. write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// productOfArray([1, 2, 3]) //6
// productOfArray([1, 2, 3, 10]) //60
​
const productOfArray = (arr) => {
    //arrow function, setting total for 1
    let total = 1;
​       //if there's nothing in the array than return the total as is
    if(arr.length === 0){
        return total;
    }
    //otherwise, total is equal to the array, times each item, seperated by 1
    total = arr[0] * productOfArray(arr.slice(1));
    return total;
}
​
console.log(productOfArray([1, 2, 3])) //6

//or

const numbers = [10, 20, 30, 40]
const add = (a, b) =>
a + b
const sum = numbers.reduce(add)
console.log(sum)

