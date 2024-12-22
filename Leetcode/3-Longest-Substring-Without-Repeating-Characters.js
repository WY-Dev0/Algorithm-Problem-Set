/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const wordSet = new Set();
    let [front, end, len] = [0, 0, s.length];
    let res = 0;
    while (end < len) {
        if (!wordSet.has(s[end])) {
            wordSet.add(s[end]);    
            res = Math.max(res, end - front + 1);
            end++;
            continue;
        } 
        while (wordSet.has(s[end]) && front < end) {
            wordSet.delete(s[front])
            front++;
        }
        wordSet.add(s[end]);    
        res = Math.max(res, end - front + 1);
        end++;
    }
    return res; 
};