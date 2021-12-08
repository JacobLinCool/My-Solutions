function getDecimalValue(head) {
    let result = 0;
    while (head) {
        result <<= 1;
        result += head.val;
        head = head.next;
    }
    return result;
}
