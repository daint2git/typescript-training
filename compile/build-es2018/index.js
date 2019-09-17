export const handlePromise = () => {
    return new Promise((resolve, reject) => {
        resolve('hi');
    });
};
export const handleAsyncAwait = async () => {
    const greeting = await Promise.resolve('hi');
    return greeting;
};
export async function handleAsyncAwait2() {
    const greeting = await Promise.resolve('hi');
    return greeting;
}
export function* handleGenerator() {
    yield 1;
    yield 2;
}
export async function* handleAsyncAwaitGenerator() {
    await 1;
    yield 2;
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
export const cloneObject = { ...myObject };
export const { name = 'No name', ...restObj } = myObject;
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
