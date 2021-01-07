/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let newHead = new ListNode();
   newHead.next = head;
   let node = newHead;

   while(node.next) {
       if(node.next.next && node.next.val === node.next.next.val) {
           let distinct = node.next.next.next;
           while (distinct && distinct.val === node.next.val) {
               distinct = distinct.next;
           }
           node.next = distinct;
       } else {
           node = node.next;
       }
   }
   return newHead.next;
};
