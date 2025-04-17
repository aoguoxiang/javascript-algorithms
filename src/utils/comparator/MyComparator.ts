type ComparatorResult = 0 | 1 | -1;

function defaultComparator<T = any>(a: T, b: T) {
    if (a === b) return 0;
    if (a > b) return 1;
    return -1;
}

export default class MyComparator<T = any> {
    private _comparator: (a: T, b: T) => ComparatorResult;
    private _reverse = false;

    constructor(customComparator?: (a: T, b: T) => ComparatorResult) {
        this._comparator = (a: T, b: T) => {
            const comparatorFn = typeof customComparator === "function" ? customComparator : defaultComparator;
            return this._reverseComparator(comparatorFn(a, b))
        }
    }

    private _reverseComparator(val: ComparatorResult) {
        return this._reverse ? (0 - val) as ComparatorResult : val;
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
        this._reverse = !this._reverse;
    }
}