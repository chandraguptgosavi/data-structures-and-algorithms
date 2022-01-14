// https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1#

function Node(data = 0) {
  this.data = data;
  this.bottom = null;
  this.next = null;
}

class FlatteningaLinkedList {
  flatten(head) {
    //your code here
    if (head === null) return null;

    return this.merge(head, this.flatten(head.next));
  }

  merge(n1, n2) {
    if (n1 === null) return n2;
    if (n2 === null) return n1;

    const dummy = new Node(0);
    let temp = dummy;

    while (n1 !== null && n2 !== null) {
      if (n1.data >= n2.data) {
        temp.bottom = n2;
        n2 = n2.bottom;
      } else {
        temp.bottom = n1;
        n1 = n1.bottom;
      }
      temp = temp.bottom;
    }

    if (n1 !== null) temp.bottom = n1;
    if (n2 !== null) temp.bottom = n2;
    return dummy.bottom;
  }
}

(function () {
  const head = new Node(5);
  head.bottom = new Node(7);
  head.bottom.bottom = new Node(8);
  head.bottom.bottom.bottom = new Node(30);

  const node1 = new Node(10);
  head.next = node1;
  node1.bottom = new Node(20);

  const node2 = new Node(19);
  head.next.next = node2;
  node2.bottom = new Node(22);
  node2.bottom.bottom = new Node(50);

  const node3 = new Node(28);
  node2.next = node3;
  node3.bottom = new Node(35);
  node3.bottom.bottom = new Node(40);
  node3.bottom.bottom.bottom = new Node(45);

  const list = new FlatteningaLinkedList();
  let flattenList = list.flatten(head);
  while (flattenList) {
    console.log(flattenList.data);
    flattenList = flattenList.bottom;
  }
})();
