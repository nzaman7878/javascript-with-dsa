// Palindrome number

// An integer is a palindrome when it reads the same forward and backward.

// input : x =101 -----> output : true

// output : x =10 -----> output : false

const isPalindrome = (x) => {
    return x === +x.toString().split("").reverse().join("");

};

const res = isPalindrome(101);
console.log(res);
