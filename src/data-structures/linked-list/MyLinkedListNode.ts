export default class MyLinkedListNode<T = any> {
    constructor(public value: T, public next?: MyLinkedListNode) {}

    toString(stringifier?: (value: T) => string): string {
        if (typeof stringifier === "function") {
            return stringifier(this.value);
        }
        return String(this.value);
    } 
}