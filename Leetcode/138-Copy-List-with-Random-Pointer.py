\\\
# Definition for a Node.
class Node:
    def __init__(self, x, next=None, random=None):
        self.val = int(x)
        self.next = next
        self.random = random
\\\

class Solution(object):
    def copyRandomList(self, head):
        \\\
        :type head: Node
        :rtype: Node
        \\\

        if not head:
            return None
        
        # Dictionary to map original nodes to their copies
        old_to_new = {}
        
        # First pass: Create all nodes and store them in the dictionary
        curr = head
        while curr:
            old_to_new[curr] = Node(curr.val)
            curr = curr.next
        
        # second pass: Assign next and random pointers
        curr = head
        while curr:
            old_to_new[curr].next = old_to_new.get(curr.next, None)
            old_to_new[curr].random = old_to_new.get(curr.random, None)
            curr = curr.next
        # Return the copied head node
        return old_to_new[head]

        