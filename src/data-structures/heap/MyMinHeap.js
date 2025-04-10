import MyHeap from './MyHeap';

export default class MyMinHeap extends MyHeap {
  pairIsInCorrectOrder(firstElement, secondElement) {
    return this.compare.lessThanOrEqual(firstElement, secondElement);
  }
}
