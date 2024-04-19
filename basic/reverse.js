// // Reverse Integer:
// Problem: Given a signed 32-bit integer x, return x with its digits reversed.
// Solution: Convert the integer to a string, reverse the string, and convert it back to an integer.

function reverseInteger(x) {
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }
    return reversed;
}

// Example usage:
const num = 123;
console.log(reverseInteger(num)); // Output: 321
