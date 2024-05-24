
let arr = [2,2,3,4]
const freq = {};

// Count the frequencies of each integer in the array
for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (freq[num] === undefined) {
        freq[num] = 1;
    } else {
        freq[num]++;
    }
}


   let largestLucky = -1;
const keys = Object.keys(freq); // Get the keys of the freq object
// console.log(keys); //2, 3, 4

// Iterate over the keys array to find the largest lucky integer using a for loop
for (let i = 0; i < keys.length; i++) {
    const num = parseInt(keys[i]);
    if (num === freq[num]) {
        largestLucky = Math.max(largestLucky, num);
    }
}

// return largestLucky;
console.log(largestLucky);