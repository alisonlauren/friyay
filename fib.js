//simpliest/most readable way to solve, but horrible time complexity = O(2^n)
//if the else get's called, it has to do two checks for everytime it searches for n
function getNthFib(n) {
    if (n === 2) {
        return 1;
    } else if (n === 1) {
        return 0;
    } else {
        return getNthFib(n - 1) + getNthFib(n - 2)
    }
}
//more complicated way to solve, but far better time complexity = O(n)
function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
    //Line 13 & 14 cover the if n = 2 return 1 and if n = 1 return 0;
    if (n in memoize) {
        return memoize[n];
    } else {
        memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2);
        return memoize[n]
    }
}
//memoization is a programming technicue which attempts to increase a 
//functions performance by caching its previously computed results.
//Each time a memoized function is called, its parameters are used 
//to index the cache.

function getNthFib(n) {
    const lastTwo = [0, 1];
    let counter = 3;
    while (counter <= n) {
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter++;
    }
    //edge case in case one gets called
    return n > 1 ? lastTwo[1] : lastTwo[0];
}