// 20. Valid Parentheses

// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

let s = "()"
let stack = s.split('');
if(stack.length % 2 != 0) return false;
let arr = []
while(stack.length)
{
    let topElem = stack.pop();
    if(topElem === ')' || topElem === '}' || topElem === ']')
    {
        arr.push(topElem);
    }
    else
    { 
        let temp = arr.pop();
        if(!((topElem==='(' && temp ===')') || (topElem==='[' && temp ===']') || (topElem==='{' && temp ==='}')))
        {
             return false;
        }
    }
}
if(arr.length){
    // return false;
    console.log(false)
} 
else{

    // return true
    console.log(true)
}
    