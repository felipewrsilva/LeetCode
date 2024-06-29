/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const head = new ListNode()
    let current = head
    let carry = 0
    while (l1 || l2 || carry) {
        let l1Value = l1 ? l1.val : 0
        let l2Value = l2 ? l2.val : 0
        let value = l1Value + l2Value + carry
        current.next = new ListNode(value % 10)
        carry = Math.floor(value / 10)
        current = current.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    return head.next
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

// Output: 7 -> 0 -> 8
let result = addTwoNumbers(l1, l2)
while (result) {
    console.log(result.val)
    result = result.next;
}
