import { ListNode } from "./models.js";

const reverse = (node, k) => {
  let prev = null,
    curr = node,
    next = null;
  while (k > 0 && curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    k--;
  }
  if (k > 0) {
    (curr = prev), (prev = null), (next = null);
    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return [prev, null];
  }
  node.next = curr;
  return [prev, node];
};

const reverseKGroup = function (head, k) {
  const dummy = new ListNode(0, head);
  let itr = dummy;
  while (itr !== null && itr.next !== null) {
    const [head, tail] = reverse(itr.next, k);
    itr.next = head;
    itr = tail;
  }
  return dummy.next;
};

(function () {
  let head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  head.next.next.next.next.next = new ListNode(6);

  let newHead = reverseKGroup(head, 4);
  while (newHead !== null) {
    console.log(newHead.val);
    newHead = newHead.next;
  }
})();
