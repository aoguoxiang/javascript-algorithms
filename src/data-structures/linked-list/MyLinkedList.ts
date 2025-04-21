import LinkedListNode from './MyLinkedListNode';
import Comparator from '../../utils/comparator/MyComparator';

export default class MyLinkedList {
  constructor(comparatorFn?: Comparator) {}

  prepend(value) {}

  append(value) {}

  insert(value, rawIndex) {}

  find({ value = undefined, callback = undefined }) {}

  deleteHead() {}

  deleteTail() {}

  delete(value) {}

  fromArray(values) {}

  toArray() {}

  toString(callback?: () => string) {}

  reverse() {}
}
