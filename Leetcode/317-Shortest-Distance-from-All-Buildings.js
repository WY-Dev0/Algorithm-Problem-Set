var shortestDistance = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const dist = Array.from({ length: m }, () => Array(n).fill(0));
    const reach = Array.from({ length: m }, () => Array(n).fill(0));
    let totalBuildings = 0;

    // Directions for moving up, down, left, right
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    // Perform BFS from each building
    const bfs = (startX, startY) => {
        const visited = Array.from({ length: m }, () => Array(n).fill(false));
        const queue = [[startX, startY]];
        let level = 1;

        while (queue.length > 0) {
            const size = queue.length;

            for (let i = 0; i < size; i++) {
                const [x, y] = queue.shift();

                for (const [dx, dy] of directions) {
                    const newX = x + dx;
                    const newY = y + dy;

                    // Check if the new cell is valid and not visited
                    if (
                        newX >= 0 && newX < m &&
                        newY >= 0 && newY < n &&
                        !visited[newX][newY] &&
                        grid[newX][newY] === 0
                    ) {
                        visited[newX][newY] = true;
                        dist[newX][newY] += level;
                        reach[newX][newY]++;
                        queue.push([newX, newY]);
                    }
                }
            }
            level++;
        }
    };

    // Start BFS from each building
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                totalBuildings++;
                bfs(i, j);
            }
        }
    }

    // Find the minimum distance among all reachable empty lands
    let minDistance = Infinity;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0 && reach[i][j] === totalBuildings) {
                minDistance = Math.min(minDistance, dist[i][j]);
            }
        }
    }

    return minDistance === Infinity ? -1 : minDistance;
};
