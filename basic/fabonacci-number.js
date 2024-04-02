// Fibonacci number

// Fibonacci Seriries -> 0,1,1,2,3,5,8,13,21,34

// F(0) = 0,F(1) =1 

// F(n) = F(n-1) + f(n-2), for n>1

// Input : n = 3 ------> output: 2

// Define a function called fib which takes an integer n as input
var fib = function (n) {
    // Create an array to store Fibonacci numbers, initialize with the first two Fibonacci numbers
    const arr = [0, 1];

    // Iterate from index 2 up to n
    for (let i = 2; i <= n; i++) {
        // Calculate the ith Fibonacci number and push it to the array
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    // Return the nth Fibonacci number
    return arr[n];
}

// Call the fib function with input 5
fib(5); // Output: 5
