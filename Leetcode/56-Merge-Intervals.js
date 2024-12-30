/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a, b) => {
        return a[0] - b[0];
    })

    const len = intervals.length;
    
    let i = 0;

    const res = []

    while (i < len) {
        let start = intervals[i][0];
        let end = intervals[i][1];
        i++;
        while (i < len && intervals[i][0] <= end) {
            end = Math.max(intervals[i][1], end);
            i++;
        }
        res.push([start, end]);
    }
    return res;
};