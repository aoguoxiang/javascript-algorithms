import MyLinkedList from '../linked-list/MyLinkedList';

const defaultHashTableSize = 32;

export default class MyHashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array.from({ length: hashTableSize }, () => new MyLinkedList());
    this.keys = {};
  }

  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0,
    );

    return hash % this.buckets.length;
  }

  set(key, value) {
    const hash = this.has(key) ? this.keys[key] : this.hash(key);
    this.keys[key] = hash;
    const linkedList = this.buckets[hash];
    const findNode = linkedList.find({ callback: (linkedValue) => linkedValue.key === key });
    if (findNode) {
      findNode.value = { key, value };
    } else {
      linkedList.append({ key, value });
    }
  }

  delete(key) {
    if (!this.has(key)) return null;
    const hash = this.keys[key];
    delete this.keys[key];
    const linkedList = this.buckets[hash];
    const findNode = linkedList.find({ callback: (linkedValue) => linkedValue.key === key });
    linkedList.delete(findNode.value);
    return findNode.value.value;
  }

  get(key) {
    if (!this.has(key)) return undefined;
    const hash = this.keys[key];
    const linkedList = this.buckets[hash];
    const findNode = linkedList.find({ callback: (linkedValue) => linkedValue.key === key });
    return findNode.value.value;
  }

  has(key) {
    return key in this.keys;
  }

  getKeys() {
    return Object.keys(this.keys);
  }

  getValues() {
    const keys = this.getKeys();
    // 按 hash 升序
    keys.sort((key1, key2) => this.keys[key1] - this.keys[key2]);
    return keys.map((key) => this.get(key));
  }
}
