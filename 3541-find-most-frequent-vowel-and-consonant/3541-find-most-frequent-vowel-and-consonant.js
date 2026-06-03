/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const vowels = new Set(['a','e','i','o','u']);
    const frequencies = {};

    for(const char of s){
        frequencies[char] = (frequencies[char] || 0) + 1;
    }
    let maxVowelFreq = 0;
    let maxConFreq = 0;

    for(const char in frequencies){
        const count = frequencies[char];

        if(vowels.has(char)){
            maxVowelFreq = Math.max(maxVowelFreq, count);
        }else{
            maxConFreq = Math.max(maxConFreq, count);
        }
    }
    return maxVowelFreq + maxConFreq;
};