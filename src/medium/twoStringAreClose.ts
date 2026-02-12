// 1657. Determine if Two Strings Are Close
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.



// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"


// Constraints:

// 1 <= word1.length, word2.length <= 105
// word1 and word2 contain only lowercase English letters.


function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;
    const iter: { [key: string]: number } = {}
    for (const char of word1) {
        if (iter[char]) {
            iter[char]++
        } else {
            iter[char] = 1
        }
    }
    const iter2: { [key: string]: number } = {}

    for (const char of word2) {

        if(!iter[char]) return false; // Check if the character present in the previous word, if not then they're not close string

        if (iter2[char]) {
            iter2[char]++
        } else {
            iter2[char] = 1
        }
    }
    const repetitionIn1 = [...Object.values(iter)]
    const repetitionIn2 = [...Object.values(iter2)]
    for (const num of repetitionIn1) {
        const index = repetitionIn2.indexOf(num)
        if (index === -1) {
            return false
        } else {
            repetitionIn2.splice(index, 1)
        }
    }

    return repetitionIn2.length === 0

};

// Better solution with less space complexity
var closeStringsS = function(word1, word2) {
    let freq1 = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);

    for (let ch of word1) {
        freq1[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let ch of word2) {
        freq2[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < 26; i++) {
        if ((freq1[i] === 0 && freq2[i] !== 0) || (freq1[i] !== 0 && freq2[i] === 0)) {
            return false;
        }
    }

    freq1.sort((a, b) => a - b);
    freq2.sort((a, b) => a - b);

    for (let i = 0; i < 26; i++) {
        if (freq1[i] !== freq2[i]) {
            return false;
        }
    }

    return true;
};


const word1 = "uau", word2 = "ssx"
const result =closeStrings(word1, word2)
console.log(result);
