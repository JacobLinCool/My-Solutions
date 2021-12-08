function getDecimalValue(head: ListNode | null): number {
    let result = 0;
    while (head !== null) {
        result <<= 1;
        result += head.val;
        head = head.next;
    }
    return result;
}
