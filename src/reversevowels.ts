// 345. Reverse Vowels of a String
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.



// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"



// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.


const vowels = ['a', 'e', 'i', 'o', 'u']
// function reverseVowelsTemp(s: string): string {
//     const vowel_indices = [] as number[];
//     const vowel_found = [];
//     let str_arr = s.split('')
//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
//         if(vowels.includes(char?.toString()?.toLowerCase() as string)){
//             vowel_found.unshift(char)
//             vowel_indices.push(i)
//         }
//     }

//     for (let i = 0; i < vowel_indices.length; i++) {
//         const index = (vowel_indices[i] || 0);
//         str_arr[(index || 0)] = vowel_found[i]
//     }

//     return str_arr.join('');
// };

reverseVowels('IceCreAm')



// Better solution with O(n)


// const vowels = ['a','e','i','o','u']

function reverseVowels(s: string): string {
    let str_arr = s.split('')
    let start = 0;
    let end = str_arr.length - 1

    while (start < end) {
        console.log(str_arr[start], !vowels.includes(str_arr[start]?.toString()?.toLowerCase() || ''), start, end, `str_arr[start]`);
        while (start < end && !vowels.includes(str_arr[start]?.toString()?.toLowerCase() || '')) {
            start = start + 1
        }
        while (start < end && !vowels.includes(str_arr[end]?.toString()?.toLowerCase() || '')) {
            end = end - 1;
        }
        let temp = str_arr[start];
        str_arr[start] = str_arr[end] || ''
        str_arr[end] = temp || ''

        // Move the pointers towards each other
        start++;
        end--;

    }
    console.log(str_arr);
    return str_arr.join('')
}