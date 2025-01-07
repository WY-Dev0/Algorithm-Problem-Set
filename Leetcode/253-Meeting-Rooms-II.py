class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        # sortedIntervals = sorted(intervals, ascendingSort);
        
        # def ascendingSort(num):
        #     return nums[0] - nums[1]
        #  Sort intervals by start time
        def sortByAscending(num):
            return num[0]

        intervals.sort(key=sortByAscending)
        
        # Min-heap to track end times of meetings
        que = []

        for interval in intervals:
        # If the earliest meeting to end is finished before the current meeting starts
            if len(que) != 0 and interval[0] >= que[0]:
                heapq.heappop(que)
            
            # Add the current meeting's end time to the heap
            heapq.heappush(que, interval[1])
        return len(que)

        