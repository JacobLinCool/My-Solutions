class Solution {
    public int getDecimalValue(ListNode head) {
        var result = 0;
        
        while (head != null) {
            result <<= 1;
            result += head.val;
            head = head.next;
        }
        return result;
    }
}