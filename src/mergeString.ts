function mergeAlternately(word1: string, word2: string): string {
  let result = "";
  const iterations = word1.length > word2.length ? word1.length : word2.length;
  for (let i = 0; i < iterations; i++) {
    result = result + (word1?.[i] || "") + (word2?.[i] || "");
  }
  return result;
}

console.log(mergeAlternately("geeks","tedfwdest"))
