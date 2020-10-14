function profitNestedLoops(prices) {
    let maxProfit = 0;
    for(let i=0; i<prices.length; i++) {
        for(let j=i+1; j<prices.length; j++) {
            let currentProfit = prices[j] - prices[i];
            if(currentProfit > maxProfit) {
                maxProfit = currentProfit
            }
        }
    }
    return maxProfit;
}

function profitOneLoop(prices) {
    let currentMin = prices[0];
    let currentProfit = 0;
    for (let price of prices) {
        if(price < currentMin) {
            currentMin = price;
        } else if (price - currentMin > currentProfit) {
            currentProfit = price - currentMin;
        }
    }
    return currentProfit;
};

function profitReduce(prices) {
    let currentMin = prices[0]
    return prices.reduce((acc, curr) => {
        if (curr < currentMin) {
            currentMin = curr;
            return acc;
        } else if (curr - currentMin > acc) {
            return curr - currentMin;
        } else {
            return acc;
        }
    }, currentMin)
}

function profitPartTwo(prices) {
    let maxProfit = 0;
    for (let i=1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    return maxProfit;
}

function countIslands(ocean) {
    //set island count to 0
    let islandCount = 0;
    
    if (ocean[0] === 1) {
        islandCount++;
    }
    for (let i=0; i<ocean.length - 1; i++) {
        if (ocean[i] === 0 && ocean[i + 1] === 1) {
            islandCount++;
        }
    }
    return islandCount;
}

function countIslandsReduce(ocean) {
    return ocean.reduce((acc, curr, i) => {
        if (i === 0 && curr === 1) {
            return 1;
        } else if (i < ocean.length - 1 && curr === 0 && ocean[i + 1] === 1) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0)
}

function countAndSay(n) {
    let sequence = "1";
    for (let i = 2; i <= n; i++) {
        let count = 1;
        let newSequence = "";
        for (let j = 0; j < sequence.length; j++) {
            if (j < sequence.length - 1 && sequence[j] === sequence[j + 1]) {
                count += 1;
            } else {
                newSequence += `${count}${sequence[j]}`;
                count = 1;
            }
        }
        sequence = newSequence;
    }
    return sequence;
};