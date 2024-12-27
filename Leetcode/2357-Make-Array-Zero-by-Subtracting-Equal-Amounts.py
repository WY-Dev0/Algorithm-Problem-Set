class Solution(object):
    def minimumOperations(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        num_set = set()
        for num in nums:
            if num != 0:
                num_set.add(num)
        return len(num_set)