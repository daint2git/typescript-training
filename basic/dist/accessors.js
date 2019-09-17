var CourseExample = /** @class */ (function () {
    function CourseExample(name) {
        this._name = name;
    }
    CourseExample.prototype.showCourseInfo = function () {
        console.log(this._name);
    };
    Object.defineProperty(CourseExample.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return CourseExample;
}());
var courseExampleInstance = new CourseExample('TypeScript');
console.log(courseExampleInstance);
console.log(courseExampleInstance.name);
courseExampleInstance.name = 'React';
console.log(courseExampleInstance.name);
