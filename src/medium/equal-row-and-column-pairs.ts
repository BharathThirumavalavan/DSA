// 2352. Equal Row and Column Pairs
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).



// Example 1:


// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]
// Example 2:


// Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
// Output: 3
// Explanation: There are 3 equal row and column pairs:
// - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]


// Constraints:

// n == grid.length == grid[i].length
// 1 <= n <= 200
// 1 <= grid[i][j] <= 105


function equalPairs(grid: number[][]): number {
    try {
        const rowFreq: { [key: string]: number } = {};
        const column: number[][] = Array.from({ length: (grid?.[0]?.length || 0) }, () => []);
        for (let i = 0; i < grid.length; i++) {
            if (!!rowFreq[grid[i]?.join('.') as string]) {
                rowFreq[grid[i]?.join('.') as string] = (rowFreq[grid[i]?.join('.') as string] || 0) + 1
            } else {
                rowFreq[grid[i]?.join('.') as string] = 1
            }
            for (let colIndex = 0; colIndex < (grid[i] || []).length; colIndex++) {
                column[colIndex][i] = Number(grid?.[i]?.[colIndex])
            }
        }
        let totalRepetitions = 0;

        for (let i = 0; i < column.length; i++) {
            if (!!rowFreq[column[i]?.join('.') as string]) {
                totalRepetitions = totalRepetitions + ((rowFreq[column[i]?.join('.') as string] || 0))
            }
        }
        return totalRepetitions
    } catch (error) {
        console.log(error);
        return 0
    }
};

// Intuition
// Convert all columns into rows using transpose
// Compare every original row with every transposed row
// Complexity
// Time complexity: O(n³)
// Space complexity: O(n²)
// class Solution {
//     public int equalPairs(int[][] grid) {
//         int n = grid.length, count=0;
//         int[][] transpose = new int [n][n];
//         for(int i=0;i<n;i++){
//             for(int j=0;j<n;j++){
//                 transpose[i][j]=grid[j][i];
//             }
//         }
//         for(int i=0;i<n;i++){
//             for(int j=0;j<n;j++){
//                 if(Arrays.equals(transpose[i],grid[j])){
//                     count++;
//                 }
//             }
//         }
//         return count;

//     }
// }




const grid = [[13, 13, 13], [13, 13, 13], [13, 13, 13]]


const result = equalPairs(grid)
console.log(result, 'const');