import Comparator from '../../utils/comparator/Comparator';

export default class MyHeap {
  constructor(comparatorFunction) {
    if (new.target === MyHeap) {
      throw new Error('不能直接调用 MyHeap 创建一个实例');
    }
    this.compare = new Comparator(comparatorFunction);
    this.heapContainer = [];
  }

  pairIsInCorrectOrder(firstElement, secondElement) {
    throw new Error(`
      You have to implement heap pair comparision method
      for ${firstElement} and ${secondElement} values.
    `);
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return this.getLeftChildIndex(parentIndex) + 1;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(childIndex) {
    const parentIndex = this.getParentIndex(childIndex);
    return parentIndex > -1 && parentIndex < this.heapContainer.length;
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  hadRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  swap(indexOne, indexTwo) {
    const temValue = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = temValue;
  }

  order(swapIndexList) {
    // for (let i = 0, len = swapIndexList.length; i < len; i += 1) {
    //   const swapIndex = swapIndexList[i];
    //   const targetValue = this.heapContainer[newIndex];
    //   const swapValue = this.heapContainer[swapIndex];
    //   if (!this.pairIsInCorrectOrder(targetValue, swapValue)) break;
    //   this.swap(newIndex, swapIndex);
    // }
  }

  getSwapIndex(newIndex) {
    const swapIndexList = [newIndex];
    let parentIndex = this.getParentIndex(newIndex);
    while (parentIndex > -1) {
      swapIndexList.push(parentIndex);
      parentIndex = this.getParentIndex(parentIndex);
    }
    return swapIndexList;
  }

  add(value) {
    const newIndex = this.heapContainer.length;
    this.heapContainer.push(value);
    const swapIndexList = this.getSwapIndex(newIndex);
    this.order(swapIndexList);
  }

  remove(value) {

  }

  poll() {
    return this.remove(this.heapContainer[0]);
  }

  peek() {
    return this.isEmpty() ? null : this.heapContainer[0];
  }

  find(target) {
    const findIndex = [];
    this.heapContainer.forEach((value, index) => {
      if (this.compare.equal(value, target)) {
        findIndex.push(index);
      }
    });
    return findIndex;
  }

  isEmpty() {
    return !this.heapContainer.length;
  }

  toString(callback = (val) => val) {
    let str = '';

    this.heapContainer.forEach((value) => {
      const valueSerialization = callback(value);
      str = `${str === '' ? '' : `${str},`}${valueSerialization}`;
    });

    return str;
  }
}
