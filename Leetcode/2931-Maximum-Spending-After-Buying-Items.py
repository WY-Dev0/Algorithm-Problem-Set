class Solution:
    def maxSpending(self, values: List[List[int]]) -> int:
        que = []
        for value in values:
            for v in value:
                heapq.heappush(que, v)
        d = 1
        ans = 0
        while len(que) != 0: 
            ans += heapq.heappop(que) * d
            d += 1
    
        return ans;
            