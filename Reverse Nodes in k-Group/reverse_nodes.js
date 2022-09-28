/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 function arrayToLinkedList(arr){
    return arr.reduceRight((next, val) => ({val, next}), null);
  }
  
  var reverseKGroup = function(head, k) {
      let linkedList = head;
      const arr = [];
      let result = [];
      while (linkedList !== null) {
          arr.push(linkedList.val);
          linkedList = linkedList.next;
      }
      while (arr.length > 0) {
          const chunk = arr.splice(0, k);
          if (chunk.length === k) chunk.reverse();
          result = result.concat(chunk);
      }
      let resultNode = arrayToLinkedList(result);
      return resultNode;
  };