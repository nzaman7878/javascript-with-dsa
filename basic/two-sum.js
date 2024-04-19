// two sum ,  given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target in javascript



function twoSum(nums, target) {
    const numMap = {}; // Create an empty object to store indices
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement
        
        // If the complement exists in the map, return the indices
        if (complement in numMap) {
            return [numMap[complement], i];
        }
        
        // Store the current element's index in the map
        numMap[nums[i]] = i;
    }
    
    // If no solution is found, return an empty array
    return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)
