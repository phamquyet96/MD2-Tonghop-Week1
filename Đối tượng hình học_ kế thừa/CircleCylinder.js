var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circlee = /** @class */ (function () {
    function Circlee(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    Circlee.prototype.getRadius = function () {
        return this.radius;
    };
    Circlee.prototype.getColor = function () {
        return this.color;
    };
    Circlee.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circlee.prototype.setColor = function (color) {
        this.color = color;
    };
    Circlee.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circlee.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circlee;
}());
var Cylinder = /** @class */ (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(radius, height, color) {
        var _this = _super.call(this, radius, color) || this;
        _this.height = height;
        return _this;
    }
    Cylinder.prototype.getHeight = function () {
        return this.height;
    };
    Cylinder.prototype.setHeight = function (height) {
        this.height = height;
    };
    Cylinder.prototype.getArea1 = function () {
        return 2 * Math.PI * this.radius * this.height;
    };
    Cylinder.prototype.getVolume = function () {
        return Math.PI * this.radius * this.radius * this.height;
    };
    return Cylinder;
}(Circlee));
var cylinder = new Cylinder(20, 40, "red");
console.log(cylinder.getVolume());
