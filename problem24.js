// 70. Climbing Stairs
// Solved
// Easy
// Topics
// Companies
// Hint
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

let n=2;
if (n === 1) return 1; // If there's only one step, there's only one way to climb it
let dp = new Array(n + 1);
dp[1] = 1; // There's one way to climb to step 1
dp[2] = 2; // There are two ways to climb to step 2: (1, 1) or (2)
for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // Number of ways to reach step i is the sum of ways to reach (i-1) and (i-2)
}
// return dp[n];
console.log(dp[n]);