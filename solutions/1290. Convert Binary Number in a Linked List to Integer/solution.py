class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        result = 0
        
        while head != None:
            result <<= 1
            result += head.val
            head = head.next
        
        return result