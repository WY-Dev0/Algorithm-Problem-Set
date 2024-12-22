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
    // [-1, 2, 4, 3] => [-1, 4, 2, 3] => [-1, ]
    // console.log(l1, l2);

    const reverse = (pre, cur) => {
        if (cur == null) {
            return pre;
        }
        let res = reverse(cur, cur.next);
        cur.next = pre; 
        return res
    }

    // l1 = reverse(null, l1);
    // l2 = reverse(null, l2);

    // console.log(l1, l2);

    let [p1, p2] = [l1, l2];
    let carry = 0;
    let sum = new ListNode(-1);
    let pSum = sum;
    while (p1 != null && p2 != null) {
        let nextVal = carry + p1.val + p2.val;
        if (nextVal >= 10) {
            carry = 1;
        } else {
            carry = 0;
        }
        nextVal %= 10;
        pSum.next = new ListNode(nextVal);
        pSum = pSum.next;
        p1 = p1.next;
        p2 = p2.next;
    }
    while (p1 != null) {
        let nextVal = carry + p1.val;
        if (nextVal >= 10) {
            carray = 1;
        } else {
            carry = 0;
        }
        nextVal %= 10;
        pSum.next = new ListNode(nextVal);
        // console.log(pSum);
        pSum = pSum.next;
        p1 = p1.next;
    } 
    // console.log(pSum);
    while (p2 != null) {
        let nextVal = carry + p2.val;
        if (nextVal >= 10) {
            carray = 1;
        } else {
            carry = 0;
        }
        nextVal %= 10;
        pSum.next = new ListNode(nextVal);
        pSum = pSum.next;
        p2 = p2.next;
    }
    // console.log(sum, carry)
    if (carry >= 1) {
        pSum.next = new ListNode(1);
        pSum = pSum.next;
        carry = 0;
    }
    return sum.next;
};