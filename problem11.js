// 67. Add Binary
// Topics
// Companies
// Given two binary strings a and b, return their sum as a binary string.
// Example 1:
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

let a="1010";
let b="1011";

let num1=parseInt(a,2)
// console.log(num1);
let num2=parseInt(b,2)
// console.log(num2);
let sum=num1+num2;
// console.log(sum);
console.log(sum.toString(2))


