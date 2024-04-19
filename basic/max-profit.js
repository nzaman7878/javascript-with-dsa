// "Best Time to Buy and Sell Stock" problem aims to find the
//  maximum profit that can be obtained by 
// buying and selling a stock at the right time. 

function maxProfit(prices) {
    let minPrice = Infinity; // Initialize the minimum price as positive infinity
    let maxProfit = 0; // Initialize the maximum profit as 0
    
    // Iterate through the prices array
    for (let i = 0; i < prices.length; i++) {
        // Update the minimum price if the current price is smaller
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        // Update the maximum profit if the difference between the current price and the minimum price is larger
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    
    return maxProfit; // Return the maximum profit
}

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5 (because buying at 1 and selling at 6 gives the maximum profit)
