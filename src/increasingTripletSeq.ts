// 334. Increasing Triplet Subsequence
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.



// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: One of the valid triplet is (1, 4, 5), because nums[1] == 1 < nums[4] == 4 < nums[5] == 6.


// Constraints:

// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1


// Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?



function increasingTripletDep(nums: number[]): boolean {
    const prefix = [];

    let curr = Infinity;
    // Smallest
    for (let i = 0; i <= nums.length - 1; i++) {
        curr = curr < nums[i - 1] ? curr : nums[i - 1]
        prefix.push(curr)
    }
    curr = 0
    for (let i = nums.length - 1; i >= 0; i--) {
        curr = curr > nums[i + 1] ? curr : nums[i + 1];
        if (!isNaN(curr) && !isNaN(prefix[i]) && prefix[i] < nums[i] && nums[i] < curr) {
            return true
        }

    }
    return false
};

const nums = [1, 15, 10, 4, 1, 3, -1 ,3]


function increasingTriplet(nums) {
    let first = Infinity, second = Infinity;

    for (const num of nums) {
        console.log(num);
        // first < second < third so this is the rule, if there are three number in sequence larger than the prev one that is the algo
        if (num <= first) {
            first = num;
        } else if (num <= second) {
                        console.log(first,second, num,'setting second');

            second = num;
        } else {
            console.log(first,second,num);
            return true; // Found a number greater than both first and second
        }
    }

    return false;
}


const result = increasingTriplet(nums)
console.log(result, 'result');