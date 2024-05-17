// 41. First Missing Positive
// Solved
// Hard
// Topics
// Companies
// Hint
// Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

 

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.

let nums = [1,2,0];
const n = nums.length;

    // Step 1: Segregate positive numbers to the start of the array
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }

    // Now, only the first `j` elements in the array are positive
    // Step 2: Use index marking technique on the first `j` positive numbers
    for (let i = 0; i < j; i++) {
        let val = Math.abs(nums[i]);
        if (val <= j) {
            nums[val - 1] = -Math.abs(nums[val - 1]);
        }
    }

    // Step 3: Identify the first missing positive
    for (let i = 0; i < j; i++) {
        if (nums[i] > 0) {
            // return i + 1;
            console.log(i+1);
        }
    }

    // If all indices are marked, the missing number is `j + 1`
    // return j + 1;
    console.log(j+1);