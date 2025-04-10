import MyLinkedList from '../linked-list/MyLinkedList';

// export default class MyStack {
//   constructor() {
//     this.linkedList = new MyLinkedList();
//   }

//   isEmpty() {
//     return !this.linkedList.head;
//   }

//   peek() {
//     const { head } = this.linkedList;
//     return head ? head.value : null;
//   }

//   push(value) {
//     this.linkedList.prepend(value);
//   }

//   pop() {
//     const head = this.linkedList.deleteHead();
//     return head ? head.value : null;
//   }

//   toArray() {
//     return this.linkedList.toArray().map((node) => node.value);
//   }

//   toString(callback) {
//     return this.linkedList.toString(callback);
//   }
// }

export default class MyStack<T = any> {
  linkedList: any;

  constructor() {}

  push(elemnt: T) {}

  pop(): T | null {}
  
  peek(): T | null {}

  isEmpty(): boolean {}

  toString(stringifier?: (value: T) => string) {}

  toArray(): T[] {}
}
