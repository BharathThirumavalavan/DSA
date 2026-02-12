// 238. Product of Array Except Self
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.
 

// function productExceptSelf(nums: number[]): number[] {
//     const result = []
//     for (let i = 0; i < nums.length; i++) {
//         let current_total = 1
//         for (let j = 0; j < nums.length; j++) {
//             if(i != j){
//                 current_total = current_total * nums[j]
//             }
//         }
//         result.push(current_total)
       
//     }

//     console.log(result);

//     return nums
// };


// function productExceptSelfDep(nums: number[]): number[] {
//     const n = nums.length;
    
//     // Initialize arrays with 1s or 0s
//     const pre: number[] = new Array(n).fill(1);
//     const suff: number[] = new Array(n).fill(1);
//     const ans: number[] = new Array(n);

//     // Build the Prefix product array
//     // pre[i] contains the product of all elements to the left of i
//     for (let i = 1; i < n; i++) {
//         pre[i] = pre[i - 1] * nums[i - 1];
//     }

//     // Build the Suffix product array
//     // suff[i] contains the product of all elements to the right of i
//     for (let i = n - 2; i >= 0; i--) {
//         suff[i] = suff[i + 1] * nums[i + 1];
//     }
//     console.log(pre,'pre');
//     console.log(suff,'suff');
//     // Calculate result by multiplying prefix and suffix
//     for (let i = 0; i < n; i++) {
//         ans[i] = pre[i] * suff[i];
//     }

//     return ans;
// }


function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const ans: number[] = new Array(n).fill(1);
    
    let curr = 1;
    
    // Left-to-Right Pass: Calculate Prefix Products
    for (let i = 0; i < n; i++) {
        ans[i] = (ans[i] ?? 1) * (curr ?? 1);
        curr *= nums[i] ?? 1;
    }
    console.log(ans,'ans');
    curr = 1; // Reset for the next pass
    
    // Right-to-Left Pass: Calculate Suffix Products
    for (let i = n - 1; i >= 0; i--) {
        ans[i] =  (ans[i] ?? 1) * (curr ?? 1);
        curr *= (nums[i] ?? 1);
    }
    console.log(ans,'ans');
    return ans;
}

const nums = [-1,1,0,-3,3]
productExceptSelf(nums)