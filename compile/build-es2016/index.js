var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
export const handlePromise = () => {
    return new Promise((resolve, reject) => {
        resolve('hi');
    });
};
export const handleAsyncAwait = () => __awaiter(void 0, void 0, void 0, function* () {
    const greeting = yield Promise.resolve('hi');
    return greeting;
});
export function handleAsyncAwait2() {
    return __awaiter(this, void 0, void 0, function* () {
        const greeting = yield Promise.resolve('hi');
        return greeting;
    });
}
export function* handleGenerator() {
    yield 1;
    yield 2;
}
export function handleAsyncAwaitGenerator() {
    return __asyncGenerator(this, arguments, function* handleAsyncAwaitGenerator_1() {
        yield __await(1);
        yield yield __await(2);
    });
}
const fullName = 'Nguyen Tran Dai';
export const message = `Hello
${fullName}`;
export const myMap = new Map();
export const myWeekMap = new WeakMap();
export const mySet = new Set();
export const myWeakSet = new WeakSet();
export const myArray = Array.from([1, 2, 3], x => x + x);
export const cloneArray = [...myArray];
export const [first = '1', ...restArr] = myArray;
export const myObject = { name: 'Dai', age: 26 };
export const cloneObject = Object.assign({}, myObject);
export const { name = 'No name' } = myObject, restObj = __rest(myObject, ["name"]);
export const mySymbol = Symbol('foo');
export const isExistedInArray = ['a', 'b'].includes('a');
export const isExistedInString = 'ab'.includes('a');
export class myClass {
    constructor(title) {
        this.title = '';
        this.logTime = () => {
            console.log(new Date().getTime());
        };
        this.title = title;
    }
    showTitle() {
        console.log(this.title);
    }
    static staticLogTime() {
        console.log(new Date().getTime());
    }
}
const identity = (value = null) => value;
identity(123);
identity('123');
identity(Promise.resolve(123));
// Computed property names
let event = 'click';
export let handlers = {
    [`on${event}`]: true,
};
// Extract keys, values, entries
Object.keys(myObject);
Object.values(myObject);
Object.entries(myObject);
// For..of iteration
for (let i of myArray) {
    console.log(i);
}
