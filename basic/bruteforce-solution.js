//  a brute force solution involves comparing every possible permutation of characters in one 
//string against the other string. Here's a simple brute force approach in JavaScript:


function isAnagram(str1, str2) {
    // Helper function to generate all permutations of a string
    function generatePermutations(str) {
        const results = [];

        // Base case: if the string length is 1, return an array containing that string
        if (str.length === 1) {
            return [str];
        }

        // Loop through each character in the string
        for (let i = 0; i < str.length; i++) {
            // Get the current character
            const char = str[i];

            // Get all permutations of the string excluding the current character
            const remainingChars = str.slice(0, i) + str.slice(i + 1);
            const permutationsOfRemaining = generatePermutations(remainingChars);

            // Add the current character to each permutation of the remaining characters
            for (let j = 0; j < permutationsOfRemaining.length; j++) {
                results.push(char + permutationsOfRemaining[j]);
            }
        }

        return results;
    }

    // Get all permutations of the first string
    const permutations = generatePermutations(str1);

    // Check if any permutation matches the second string
    for (let i = 0; i < permutations.length; i++) {
        if (permutations[i] === str2) {
            return true; // If a match is found, return true
        }
    }

    return false; // If no match is found, return false
}

// Example usage:
const string1 = "listen";
const string2 = "silent";
console.log(isAnagram(string1, string2)); // Output: true
