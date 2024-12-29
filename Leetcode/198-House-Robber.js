/**
 * @param {number[]} nums
 * @return {number}
 */
 //dp[i] = max(dp[i-1], dp[i-2] + nums[i])
// return max(dp[last], dp[last-1])
var rob = function(nums) {
    const len = nums.length;
    if (len == 1) {
        return nums[0];
    }
    const dp = new Array(len).fill(0);
    [dp[0], dp[1]] = [nums[0], nums[1]]
    for (let i = 2; i < len; i++) {
        if (i == 2) {
            dp[i] = Math.max(dp[0] + nums[i], dp[1]);
            continue;
        }
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i], dp[i-3] + nums[i]);
    }
    return Math.max(dp[len - 1], dp[len - 2]);
};