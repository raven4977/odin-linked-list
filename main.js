import { LinkedList } from "./linked-list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("mouse");
list.prepend("rat");
console.log(list.size());
console.log(list.getHead());
console.log(list.tail());
console.log(list.at(0));
console.log(list.pop());
console.log(list.contains("dog"));
console.log(list.find("dog"));
console.log(list.toString());
