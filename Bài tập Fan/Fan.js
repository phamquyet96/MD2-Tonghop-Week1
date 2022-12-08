var Speed;
(function (Speed) {
    Speed[Speed["SLOW"] = 1] = "SLOW";
    Speed[Speed["MEDIUM"] = 2] = "MEDIUM";
    Speed[Speed["FAST"] = 3] = "FAST";
})(Speed || (Speed = {}));
var Fan = /** @class */ (function () {
    function Fan(speed, on, color, radius) {
        this.speed = Speed.SLOW;
        this.on = false;
        this.radius = 5;
        this.color = "blue";
        this.speed = speed;
        this.on = on;
        this.color = color;
        this.radius = radius;
    }
    Fan.prototype.getRadius = function () {
        return this.radius;
    };
    Fan.prototype.toString = function () {
        if (this.on === false) {
            console.log("Fan is off, Mau quat la :".concat(this.color, ",Ban kinh la :").concat(this.radius));
        }
        else {
            console.log("Fan is on, Toc do quat la : ".concat(this.speed, ", Mau quat la : ").concat(this.color, ", Ban kinh quat la : ").concat(this.radius));
        }
    };
    Fan.prototype.getCon = function () {
        console.log(this.speed);
    };
    return Fan;
}());
var fan1 = new Fan(Speed.FAST, true, "yellow", 10);
var fan2 = new Fan(Speed.FAST, false, "blue", 5);
// console.log(fan1)
// console.log(fan1.getRadius())
// console.log(fan1.color)
fan1.toString();
fan2.toString();
fan1.getCon();
