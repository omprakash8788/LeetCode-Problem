// 94. Binary Tree Inorder Traversal
// Solved
// Easy
// Topics
// Companies
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

let root = [1,null,2,3]

let res=[]
inorder(root)
 function inorder(root){
    if(!root){
        return null;
    }
    inorder(root.left)
    // console.log(root.left)
    res.push(root.val)
    inorder(root.right)
 }
 return res;
 console.log(res);
