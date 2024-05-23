// 69. Sqrt(x)
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 
let x = 4
if (x <= 1) return x; // Base case: if x is 0 or 1, square root is x itself
let left = 1;
let right = Math.floor(x / 2); // Maximum possible square root of x

while (left <= right) {
    let mid = Math.floor((left + right) / 2); // Middle value of the current range
    let midSquared = mid * mid; // Square of the middle value
    
    if (midSquared === x) {
        return mid; // Found the exact square root
        // console.log(mid);
    } else if (midSquared < x) {
        left = mid + 1; // Search in the right half
    } else {
        right = mid - 1; // Search in the left half
    }
}

// At this point, 'left' will be the next integer after the square root
return left - 1;
// console.log(left-1);
