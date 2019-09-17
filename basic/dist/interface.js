var Superman = /** @class */ (function () {
    function Superman(name) {
        this.name = name;
    }
    Superman.prototype.eat = function () {
        console.log('Superman eat');
    };
    Superman.prototype.sleep = function () {
        console.log('Superman sleep');
    };
    Superman.prototype.fly = function () {
        console.log('Superman fly');
    };
    return Superman;
}());
var SupermanA = new Superman('SupermanA');
SupermanA.eat();
SupermanA.sleep();
SupermanA.fly();
