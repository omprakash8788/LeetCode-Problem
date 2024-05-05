// 5. Longest Palindromic Substring
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

let s="cbbd"
let count = 0;
    let pal = '';
    
    for(let i = 0; i < s.length; i++) {
        let forward = ''
        let reverse = ''
        for(let j = i; j < s.length; j++) {
            forward += s[j];
            reverse = s[j] + reverse;
            
            if((forward === reverse) && (count < forward.length)) {
                count = forward.length;
                pal = forward;
            }
        }
    }
console.log(pal)    