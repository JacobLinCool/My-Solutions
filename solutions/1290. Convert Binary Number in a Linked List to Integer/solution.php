class Solution {

/**
 * @param ListNode $head
 * @return Integer
 */
function getDecimalValue($head) {
    $result = 0;
    
    while ($head != null) {
        $result <<= 1;
        $result += $head->val;
        $head = $head->next;
    }
    return $result;
}
}