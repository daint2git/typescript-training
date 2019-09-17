"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePromise = function () {
    return new Promise(function (resolve, reject) {
        resolve('hi');
    });
};
exports.handleAsyncAwait = function () { return __awaiter(void 0, void 0, void 0, function () {
    var greeting;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.resolve('hi')];
            case 1:
                greeting = _a.sent();
                return [2 /*return*/, greeting];
        }
    });
}); };
function handleAsyncAwait2() {
    return __awaiter(this, void 0, void 0, function () {
        var greeting;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve('hi')];
                case 1:
                    greeting = _a.sent();
                    return [2 /*return*/, greeting];
            }
        });
    });
}
exports.handleAsyncAwait2 = handleAsyncAwait2;
function handleGenerator() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.handleGenerator = handleGenerator;
function handleAsyncAwaitGenerator() {
    return __asyncGenerator(this, arguments, function handleAsyncAwaitGenerator_1() {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __await(1)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, __await(2)];
                case 2: return [4 /*yield*/, _a.sent()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.handleAsyncAwaitGenerator = handleAsyncAwaitGenerator;
var fullName = 'Nguyen Tran Dai';
exports.message = "Hello\n" + fullName;
exports.myMap = new Map();
exports.myWeekMap = new WeakMap();
exports.mySet = new Set();
exports.myWeakSet = new WeakSet();
exports.myArray = Array.from([1, 2, 3], function (x) { return x + x; });
exports.cloneArray = __spreadArrays(exports.myArray);
exports.first = (_a = exports.myArray[0], _a === void 0 ? '1' : _a), exports.restArr = exports.myArray.slice(1);
exports.myObject = { name: 'Dai', age: 26 };
exports.cloneObject = __assign({}, exports.myObject);
exports.name = (_b = exports.myObject.name, _b === void 0 ? 'No name' : _b), exports.restObj = __rest(exports.myObject, ["name"]);
exports.mySymbol = Symbol('foo');
exports.isExistedInArray = ['a', 'b'].includes('a');
exports.isExistedInString = 'ab'.includes('a');
var myClass = /** @class */ (function () {
    function myClass(title) {
        this.title = '';
        this.logTime = function () {
            console.log(new Date().getTime());
        };
        this.title = title;
    }
    myClass.prototype.showTitle = function () {
        console.log(this.title);
    };
    myClass.staticLogTime = function () {
        console.log(new Date().getTime());
    };
    return myClass;
}());
exports.myClass = myClass;
var identity = function (value) {
    if (value === void 0) { value = null; }
    return value;
};
identity(123);
identity('123');
identity(Promise.resolve(123));
// Computed property names
var event = 'click';
exports.handlers = (_c = {},
    _c["on" + event] = true,
    _c);
// Extract keys, values, entries
Object.keys(exports.myObject);
Object.values(exports.myObject);
Object.entries(exports.myObject);
// For..of iteration
for (var _i = 0, myArray_1 = exports.myArray; _i < myArray_1.length; _i++) {
    var i = myArray_1[_i];
    console.log(i);
}
