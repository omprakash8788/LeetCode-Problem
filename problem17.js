//  Rotate Image
// Medium
// Topics
// Companies
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

let matrix = [[1,2,3],[4,5,6],[7,8,9]];

const n = matrix.length;

// Transpose the matrix
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
}

// Reverse each row
for (let i = 0; i < n; i++) {
    matrix[i].reverse();
}

// return matrix; 
console.log(matrix);