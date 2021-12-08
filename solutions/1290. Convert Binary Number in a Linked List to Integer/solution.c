int getDecimalValue(struct ListNode* head) {
    long long result = 0;
    while (head) {
        result <<= 1;
        result += head->val;
        head = head->next;
    }
    return result;
}