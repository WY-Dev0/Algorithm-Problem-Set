/**
 * @param {number} n
 * @return {number}
 */

// dp[i] means the combination we have to reach this step
// n = 4
// dp[i] = 1   dp[2] = dp[2-1] + 1   dp[3] = dp[3-1] + 1

// recursive;
// combination(n) = combination(n-1) + combination(n-2)

// if (n == 1) {
//     return 1
// } else if (n == 2) {
//     return 1
// }

// f(44) = f(42) + f(43)

// f(42) = f(41) + f(40)
// f(43) = f(41) + f(42)



var climbStairs = function(n) {
    const state = new Array(n + 1).fill(0);
    // console.log(state);
    state[1] = 1;
    state[2] = 2; 
    const getCombination = (n) => {
        if (n < 0) {
            return 0;
        } else if (n == 2) {
            return 2;
        } else if (n == 1) {
            return 1;
        }
        if (state[n] != 0) {
            return state[n];
        }
        state[n] = getCombination(n - 1) + getCombination(n - 2);
        return state[n];
    }
    // console.log(state)
    getCombination(n);
    return state[n]
};