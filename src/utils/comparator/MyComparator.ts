function defaultComparator<T = any>(a: T, b: T) {
    if (a === b) return 0;
    if (a > b) return 1;
    return -1;
}

export default class MyComparator<T = any> {
    private _comparator: (a: T, b: T) => 0 | 1 | -1;

    constructor(customComparator?: (a: T, b: T) => 0 | 1 | -1) {
        this._comparator = typeof customComparator === "function" ? customComparator : defaultComparator
    }

    equal(a: T, b: T) {
        return this._comparator(a, b) === 0;
    }

    lessThan(a: T, b: T) {
        return this._comparator(a, b) < 0;
    }

    lessThanOrEqual(a: T, b: T) {
        return this._comparator(a, b) <= 0;
    }

    greaterThan(a: T, b: T) {
        return this._comparator(a, b) > 0;
    }

    greaterThanOrEqual(a: T, b: T) {
        return this._comparator(a, b) >= 0;
    }

    reverse() {

    }
}