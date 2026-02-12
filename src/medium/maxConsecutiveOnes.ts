// 


function getFirstMaxLength(zero_indices: number[], k: number) {
    let maxLength = 0;
    for (let i = 0; i < zero_indices.length; i++) {
        const element = array[i];

    }
}

/**
 * My algorithm
 * @param nums 
 * @param k 
 * @returns 
 */
function longestOnesMy(nums: number[], k: number): number {
    const zero_indices = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zero_indices.push(i)
        }
    }
    let maxZeros = zero_indices.length > k
        ? (zero_indices[k] || 0) :  // filling the first 'k' zero
        nums.length; // number of zeros is less than the arrays to fill


    for (let i = k; i < zero_indices.length; i++) {
        const nextZero = ((i + 1) < zero_indices.length ? zero_indices[i + 1] : nums.length) as number;
        const prevZero = (i - k >= 0 ? zero_indices[i - k] : 0) as number;

        const currentWindow = (nextZero - prevZero) - 1; // exclude prev zero
        if (currentWindow > maxZeros) {
            maxZeros = currentWindow
        }
    }
    return maxZeros
};


function longestOnes(nums:number[],k:number):number{
    let left = 0,maxLength = 0;

    let zero_count = 0;
    for (let right = 0; right < nums.length; right++) {
        if(nums[right] === 0){
            zero_count++;
        }
        while(zero_count > k){
            if(nums[left] === 0){
                zero_count --
            }
            left++
        }
        maxLength = Math.max(maxLength,(right - left) + 1)
    }
    console.log(maxLength);
    return maxLength
}


const nums = [0, 0, 0, 1, 0, 1], k = 3;

longestOnes(nums, k)
