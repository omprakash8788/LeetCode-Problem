// 83. Remove Duplicates from Sorted List
// Solved
// Easy
// Topics
// Companies
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
 

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

let head = [1,1,2]

let cur=head
while(cur && cur.next){
    if(cur.val==cur.next.val){
        cur.next=cur.next.next
    }else{
        cur=cur.next
    }
}
// return head
console.log(head);