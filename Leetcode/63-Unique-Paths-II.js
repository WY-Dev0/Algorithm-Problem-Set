/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const [m, n] = [obstacleGrid.length, obstacleGrid[0].length];

    const uniquePath = []

    for (let i = 0; i < m; i++) {
        const row = new Array(n).fill(-1);
        uniquePath.push(row);
    }
    
    const dfs = (x, y) => {
        if (x < 0 || x >= m || y < 0 || y >= n) {
            return 0;
        }
        if (uniquePath[x][y] != -1) {
            return uniquePath[x][y];
        }
        if (obstacleGrid[x][y] == 1) {
            return 0;
        }
        if (x == m - 1 && y == n - 1) {
            return 1;
        }
        uniquePath[x][y] = dfs(x+1, y) + dfs(x, y+1);
        return uniquePath[x][y];
    }
    // dfs(0, 0)
    // console.log(uniquePath)
    return dfs(0, 0);

};