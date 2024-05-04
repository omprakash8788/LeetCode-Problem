// 3. Longest Substring Without Repeating Characters
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

let s="abcabcbb"
let maxLength=0;
let start=0;
// let charMap={}
let obj={}

for(let i=0; i<s.length; i++){
    const currentChar=s[i];
    if(obj[currentChar]!==undefined){
        start=Math.max(start, obj[currentChar]+1);

    }
    obj[currentChar]=i;
    maxLength=Math.max(maxLength, i-start+1);
}
console.log(maxLength)

