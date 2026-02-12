// 11. Container With Most Water
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.



// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.  



function maxArea(height: number[]): number {
    let max_calculated_area = 0;

    for (let i = 0; i < height.length; i++) {
       for (let j = i; j < height.length; j++) {
            const minHeight = (height[i] || 0) < (height[j] || 0) ? height[i] : height[j];
            const distance = j - i;
            const currentArea = (minHeight || 0) * distance;
            if(currentArea > max_calculated_area){
                max_calculated_area = currentArea
            }
       }
    }
    return max_calculated_area
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
maxArea(height)

