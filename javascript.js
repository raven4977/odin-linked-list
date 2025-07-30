class LinkedList {
  constructor(list = {}) {
    this.list = list;
  }
  append(value) {}
  prepend(value) {}
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
