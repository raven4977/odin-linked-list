class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    if (!this.head) {
      this.head = Node(value);
      return;
    }
    let current = this.head;
    while (current.nextNode !== null) current = current.nextNode;
    current.nextNode = Node(value);
  }
  prepend(value) {
    if (!this.head) {
      this.head = Node(value);
      return;
    }
    let currentHead = this.head;
    this.head = Node(value, currentHead);
  }
  size() {}
  head() {}
  tail() {}
  at(index) {}
  pop() {}
  contains(value) {}
  find(value) {}
  toString() {}
}

const Node = (value = null, nextNode = null) => {
  return { value, nextNode };
};

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("mouse");
list.prepend("rat");

console.log(list);
