import DoublyLinkedListNode from './DoublyLinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

export default class MyDoublyLinkedList {
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  prepend(value) {
    const newHead = new DoublyLinkedListNode(value, this.head, null);
    if (this.tail === null) {
      this.head = newHead;
      this.tail = newHead;
      return this;
    }
    this.head.previous = newHead;
    this.head = newHead;
    return this;
  }

  append(value) {
    const newTail = new DoublyLinkedListNode(value, null, this.tail);
    if (this.head === null) {
      this.head = newTail;
      this.tail = newTail;
      return this;
    }
    this.tail.next = newTail;
    this.tail = newTail;
    return this;
  }

  delete(value) {
    let deleteNode = null;

    let currentNode = this.head;

    while (currentNode !== null) {
      if (this.compare.equal(currentNode.value, value)) {
        deleteNode = currentNode;
        const perDeleteNode = deleteNode.previous;
        const nextDeleteNode = deleteNode.next;
        if (perDeleteNode) {
          perDeleteNode.next = nextDeleteNode;
        } else {
          // 删除的是头元素
          this.head = nextDeleteNode;
        }

        if (nextDeleteNode) {
          nextDeleteNode.previous = perDeleteNode;
        } else {
          // 删除的是尾元素
          this.tail = perDeleteNode;
        }
      }

      currentNode = currentNode.next;
    }

    return deleteNode;
  }

  find({ value = undefined, callback = undefined }) {
    let currentNode = this.head;

    while (currentNode !== null) {
      const isEqual = callback
        ? callback(currentNode.value)
        : this.compare.equal(currentNode.value, value);
      if (isEqual) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  deleteTail() {
    if (this.tail === null) return null;

    const deletedNode = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedNode;
    }
    this.tail = this.tail.previous;
    this.tail.next = null;

    return deletedNode;
  }

  deleteHead() {
    if (this.head === null) return null;

    const deletedNode = this.head;
    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
      return deletedNode;
    }
    this.head = this.head.next;
    this.head.previous = null;

    return deletedNode;
  }

  toArray() {
    const nodeList = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      nodeList.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodeList;
  }

  fromArray(values) {
    values.forEach((value) => {
      this.append(value);
    });

    return this;
  }

  toString(callback) {
    return this.toArray().map((node) => node.toString(callback)).join(',');
  }

  reverse() {
    let currentNode = this.head;
    let preNode = null;
    let nextNode = null;

    while (currentNode) {
      // 先存储当前元素的前指针和后指针
      preNode = currentNode.previous;
      nextNode = currentNode.next;

      // 调换当前元素的前指针和后指针
      currentNode.next = preNode;
      currentNode.previous = nextNode;

      // 同时移动前指针元素和当前元素
      preNode = currentNode;
      currentNode = nextNode;
    }

    // 更换 head 和 tail
    this.tail = this.head;
    this.head = preNode;

    return this;
  }
}
