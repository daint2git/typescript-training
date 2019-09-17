var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Course = /** @class */ (function () {
    function Course(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Course.prototype.showCourseInfo = function () {
        console.log('***Course-showCourseInfo***');
        console.log(this.id + ", " + this.name + ", " + this.price);
        console.log('******');
    };
    return Course;
}());
var CourseTypeScript = /** @class */ (function (_super) {
    __extends(CourseTypeScript, _super);
    function CourseTypeScript(id, name, price, note) {
        var _this = _super.call(this, id, name, price) || this;
        _this.note = note;
        return _this;
    }
    CourseTypeScript.prototype.showCourseInfo = function () {
        console.log('***CourseTypeScript-showCourseInfo***');
        _super.prototype.showCourseInfo.call(this);
        console.log(this.note);
        console.log('******');
    };
    return CourseTypeScript;
}(Course));
var courseInstance = new Course(1, 'React', 199);
courseInstance.showCourseInfo();
console.log('------');
var courseTypeScriptInstance = new CourseTypeScript(2, 'TypeScript', 299, 'Like');
courseTypeScriptInstance.showCourseInfo();
/**                 inside     outside     child class
 * public             +           +           +
 * protected          +           -           +
 * private            +           -           -
 */
