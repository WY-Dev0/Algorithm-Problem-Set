/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */

// let x = val of nums[index]   part1 is the part before x and part2 is the part after
// [..., x] + [x, ...] <= x;
// use countSum(x, cnt) to denote the sum of cnt consecutive vals with a max val of x    
// details of counSum:
// if       x >  cnt: sum = (((x - cnt + 1) + x) * cnt) / 2
// elif     x <= cnt: sum = ((x + 1) * x) / 2 + cnt - x;
// l = 1, r = maxSum, x = (1 + maxSum) / 2;         
// if countSum(x, cnt) + countSum(x-1, n-cnt) <= maxSum: l = m
// else r = m - 1
// do it until l meets r or l > r and return l

var maxValue = function(n, index, maxSum) {
    const countSum = (x, cnt) => {
        let sum = 0;
        if (x > cnt) {
            sum = (((x - cnt + 1) + x) * cnt / 2);
        } else {
            sum = ((x + 1) * x) / 2 + cnt - x;
        }
        return sum;
    }

    let [l, r] = [1, maxSum];
    while (l < r) {
        let m = Math.ceil((l + r) / 2);
        let curSum = countSum(m-1, index) + countSum(m, n - index);
        // console.log(l, r, m, curSum, maxSum);
        if (curSum <= maxSum) {
            l = m;
        } else {
            r = m - 1;
        }
    }
    return l;
};