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
var Laptop = /** @class */ (function () {
    function Laptop() {
    }
    Laptop.prototype.keyboard = function () {
        console.log('Laptop keyboard');
    };
    Laptop.prototype.mainboard = function () {
        console.log('Laptop mainboard');
    };
    Laptop.prototype.chipset = function () {
        console.log('Laptop chipset');
    };
    return Laptop;
}());
var LaptopDell = /** @class */ (function (_super) {
    __extends(LaptopDell, _super);
    function LaptopDell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Laptop Dell';
        return _this;
    }
    LaptopDell.prototype.chipset = function () {
        console.log('LaptopDell chipset');
    };
    LaptopDell.prototype.price = function () {
        console.log('LaptopDell 999');
    };
    return LaptopDell;
}(Laptop));
var laptopInstance = new LaptopDell();
console.log(laptopInstance);
laptopInstance.keyboard();
laptopInstance.mainboard();
laptopInstance.chipset();
laptopInstance.price();
