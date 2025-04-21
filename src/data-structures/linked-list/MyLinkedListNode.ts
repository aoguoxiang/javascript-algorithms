export default class MyLinkedListNode<T = any> {
    next: MyLinkedListNode | null
    constructor(public value: T, next?: MyLinkedListNode) {
        this.next = next ?? null;
    }

    toString(stringifier?: (value: T) => string): string {
        if (typeof stringifier === "function") {
            return stringifier(this.value);
        }
        return String(this.value);
    } 
}