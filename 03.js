/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max_length = 0
    let mapChar = {}
    let left = 0
    for (let i = 0; i < s.length; i++) {
        if (mapChar[s[i]] === undefined || mapChar[s[i]] < left) {
            max_length = Math.max(max_length, i - left + 1)
        }
        else {
            left = mapChar[s[i]] + 1
        }
        mapChar[s[i]] = i
    }
    return max_length
};

// Test cases

// console.log(lengthOfLongestSubstring("abcdefabcbb")); // Output: 6
// console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
// console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
// console.log(lengthOfLongestSubstring("")); // Output: 0
// console.log(lengthOfLongestSubstring("dvdf")); // Output: 3
console.log(lengthOfLongestSubstring("nfpdmpi")); // Output: 5