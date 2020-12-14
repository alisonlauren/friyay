//find the amount of unique values in an array, without creating a new array.
//use pointers in order to help you find the answer.

var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    var pointer1 = 0;
    for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
        if (nums[pointer1] !== nums[pointer2]) {
            pointer1++
            nums[pointer1] = nums[pointer2]
        }
    }
    return pointer1 + 1 

};

console.log(removeDuplicates([1,1,1,2,2,4,4,4,4,4]))


//find the best day to sell stock [from given array, assuming each price reflects the price of the day] and have the profit be the output

var maxProfit = function (prices) {
    if (prices.length === 0 || null) {
        return 0;
    }
    let profit = 0;
    for (i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1]
        }
    }
    return profit;

};


console.log(maxProfit([7, 4, 9, 10]))
console.log(maxProfit([7, 4, 9, 10]))

