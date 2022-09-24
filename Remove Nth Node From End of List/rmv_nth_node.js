/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 function removeNthFromEnd(head, n) {
    let dummy = new ListNode(null, head);
    let behindPointer = dummy;
    let forwardPointer = head;

    let advance = n;

    while(advance > 0 && forwardPointer) {
        advance--;
        forwardPointer = forwardPointer.next;
    }

    while(forwardPointer) {
        behindPointer = behindPointer.next;
        forwardPointer = forwardPointer.next;
    }

    behindPointer.next = behindPointer.next.next;
    return dummy.next;
}