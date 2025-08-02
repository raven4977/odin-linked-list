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
  size() {
    if (!this.head) {
      return "List items: 0";
    }
    let current = this.head;
    let total = 1;
    while (current.nextNode !== null) {
      total++;
      current = current.nextNode;
    }
    return `List items: ${total}`;
  }
  getHead() {
    return this.head;
  }
  tail() {}
  at(index) {
    if (index == 0) {
      return this.head;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    if (!current) return "Node not found";
    return current;
  }
  pop() {}
  contains(value) {
    let current = this.head;
    while (current && current.value !== value) {
      current = current.nextNode;
    }
    if (current) return true;
    return false;
  }
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
// console.log(list.size());
// console.log(list.getHead());
// console.log(list.at(0));
console.log(list.contains("dog"));

// console.log(list);
