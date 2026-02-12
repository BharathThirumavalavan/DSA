// 394. Decode String
// Medium
// Topics
// premium lock icon
// Companies
// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.



// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"


// Constraints:

// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be a valid input.
// All the integers in s are in the range [1, 300].


function repeatString(s: string, count: number) {
    let result = ''
    while (count >= 1) {
        count--
        result = result + s;
    }
    return result;
}


function decodeChunk(s: string, result: string = '', repetitions = 0): string {
    result = result;
    let currentChunk = ''
    let brackets = 0
    for (let i = 0; i < s.length; i++) {
        const currChar = s[i];
        if (!isNaN(Number(currChar))) {
            repetitions = Number(currChar)
        } else if (currChar == '[' || currChar == ']') {
            if (currChar == ']') {
                result = repeatString(currentChunk, repetitions) + decodeChunk(s.slice(i + 1), result);
                currentChunk = ''
                break;
            }
        } else {
            currentChunk = currentChunk + currChar
        }
    }
    return result + currentChunk
}


// class Solution {
//     i: number;
//     constructor() { this.i = 0; }
//     decodeString(s: string) {
//         this.i = 0;
//         return this.decode(s);
//     }
//     decode(s: string) {
//         let res = "", num = 0;
//         while (this.i < s.length) {
//             let c = s[this.i];
//             if (/[0-9]/.test(c)) {
//                 num = num * 10 + (c - '0');
//                 this.i++;
//             } else if (c === '[') {
//                 this.i++;
//                 let inner = this.decode(s);
//                 res += inner.repeat(num);
//                 num = 0;
//             } else if (c === ']') {
//                 this.i++;
//                 return res;
//             } else {
//                 res += c;
//                 this.i++;
//             }
//         }
//         return res;
//     }
// }
function decodeString(s: string, result = ''): string {
    const splitString = s.split('')
    // let result = '';
    let chunk = ''
    let repetitions = 0
    // const solve = new Solution()
    // return solve.decodeString(s)
    return ''
};

const s1 = "3[a]2[bc]";
const s2 = "2[abc]3[cd]ef"
const s = "3[a2[c]]"
const result = decodeString(s)
console.log(result);