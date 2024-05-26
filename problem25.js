// 73. Set Matrix Zeroes
// Solved
// Medium
// Topics
// Companies
// Hint
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
let matrix = [[1,1,1],[1,0,1],[1,1,1]];
var track = []
    
// find zeros
for(var i = 0; i < matrix.length; i++){
  for(var j = 0; j < matrix[0].length; j++){
    if(matrix[i][j] === 0) track.push([i, j])                
  }
}

for(var i = 0; i < track.length; i++){
  var [x, y] = track[i]
  
  // update row
  for(var j = 0; j < matrix[0].length; j++){
    matrix[x][j] = 0
  }
  
  // udpate column
  for(var j = 0; j < matrix.length; j++){
    matrix[j][y] = 0
  }

}

