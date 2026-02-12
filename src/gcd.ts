// 1071. Greatest Common Divisor of Strings
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.



// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"

// Output: "ABC"

// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"

// Output: "AB"

// Example 3:

// Input: str1 = "LEET", str2 = "CODE"

// Output: ""

// Example 4:

// Input: str1 = "AAAAAB", str2 = "AAA"

// Output: ""


// Input: str1 = "ABCBEDABCBEDABCBED", str2 = "ABCBEDABCBEDABCBEDABCBED"

// Output: "ABCBED"






function getPatterns(str: string, str2: string): string[] {
    const patterns = []
    for (let patternLength = 1; patternLength <= str.length / 2; patternLength++) {
        if (str.length % patternLength == 0 && str2.length % patternLength == 0) {
            let doesPatternFound = true;
            for (let j = patternLength; j < str.length; j = j + patternLength) {
                if (str.slice(0, patternLength) != str.slice(j, j + patternLength)) {
                    doesPatternFound = false
                    continue
                }
            }
            if (doesPatternFound) {
                patterns.push(str.slice(0, patternLength))
            }
        }
    }
    if (str2.length % str.length == 0) {
        patterns.push(str)
    }
    return [...patterns]
}


function gcdOfStrings(str1: string, str2: string): string {
    let longestStr = str1;
    let shortedStr = str2;
    if (str2.length > str1.length) {
        longestStr = str2
        shortedStr = str1
    }

    const patterns = getPatterns(shortedStr, longestStr)
    const results = []
    for (let i = 0; i < patterns.length; i++) {
        let isPatternFound = true
        const currPattern = patterns[i] || ""
        for (let j = 0; j < longestStr.length; j = j + currPattern.length) {
            if (currPattern !== longestStr.slice(j, j + currPattern.length)) {
                isPatternFound = false;
                continue
            }

        }
        if (isPatternFound) {
            results.push(currPattern)
        }
    }

    console.log(results, 'results');
    const result = results.length > 0 ? results.pop() : ""
    return result || ""
};

gcdOfStrings("ABABAB", "ABABCC")

