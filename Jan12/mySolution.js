/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let p3 = new ListNode();
  let sumHead = p3;
  let carry = 0;
  while(p1 !== null || p2 !== null) {
      let val1 = 0;
      let val2 = 0;
      if(p1 !== null) {
          val1 = p1.val;
      }
      if(p2 !== null) {
          val2 = p2.val;
      }
      let sum = carry + val1 + val2;
      if(sum > 9) {
          carry = 1;
      } else {
          carry = 0;
      }
      p3.next = new ListNode(sum % 10);
      p3 = p3.next;
      if(p1 !== null) {
          p1 = p1.next;
      } else {
          p1 = null;
      }
      if(p2 !== null) {
          p2 = p2.next;
      } else {
          p2 = null;
      }
  }
  if(carry > 0) {
      p3.next = new ListNode(carry);
  }
  return sumHead.next;
};

