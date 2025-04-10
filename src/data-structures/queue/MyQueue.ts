// import MyLinkedList from '../linked-list/MyLinkedList';

// export default class MyQueue {
//   constructor(compareFunction) {
//     this.linkedList = new MyLinkedList(compareFunction);
//   }

//   isEmpty() {
//     return !this.linkedList.head;
//   }

//   peek() {
//     const firstElement = this.linkedList.head;
//     if (firstElement) return firstElement.value;
//     return null;
//   }

//   enqueue(value) {
//     this.linkedList.append(value);
//   }

//   dequeue() {
//     const node = this.linkedList.deleteHead();
//     if (node) return node.value;
//     return null;
//   }

//   toString(callback) {
//     return this.linkedList.toString(callback);
//   }
// }

export default class MyQueue<T = any> {
  linkedList: unknown;

  constructor() {}

  enqueue(element: T) {}

  dequeue(): T | null {}

  peek(): T | null {}

  isEmpty(): boolean {}
  
  toString(stringifier?: (value: T) => string): string {}
}
