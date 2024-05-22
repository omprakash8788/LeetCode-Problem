// 67. Add Binary
// Solved
// Easy
// Topics
// Companies
// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.
let a = "11", b = "1"
const aBin = `0b${a}`
const bBin = `0b${b}`
const sum = BigInt(aBin) + BigInt(bBin)
// return sum.toString(2)
console.log(sum.toString(2));