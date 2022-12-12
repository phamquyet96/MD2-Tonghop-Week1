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
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = "blue";
        this.filled = false;
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.isFilled = function () {
        return this.filled;
    };
    Shape.prototype.setFilled = function (filled) {
        this.filled = filled;
    };
    Shape.prototype.toString = function () {
        if (this.isFilled()) {
            return "A shape with color of " + this.getColor() + " and filled.";
        }
        else {
            return "A shape with color of " + this.getColor() + " and not filled.";
        }
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, filled, radius) {
        var _this = _super.call(this, color, filled) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.toString = function () {
        return "A Circle with ".concat(this.radius, ", which is a subclass of ").concat(_super.prototype.toString.call(this), " ");
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, filled, width, length) {
        var _this = _super.call(this, color, filled) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.getLength = function () {
        return this.length;
    };
    Rectangle.prototype.setLength = function (length) {
        this.length = length;
    };
    Rectangle.prototype.getArea = function () {
        return this.getWidth() * this.getLength();
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.getWidth() + this.getLength());
    };
    Rectangle.prototype.toString = function () {
        return "A Rectangle with ".concat(this.width, " and ").concat(this.length, ", which is a subclass of ").concat(_super.prototype.toString.call(this));
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, filled, side) {
        var _this = _super.call(this, color, filled, side, side) || this;
        _this.side = side;
        return _this;
    }
    Square.prototype.getSide = function () {
        return this.side;
    };
    Square.prototype.setSide = function (side) {
        this.side = side;
    };
    Square.prototype.setWidth = function (side) {
        this.side = side;
    };
    Square.prototype.setLength = function (side) {
        this.side = side;
    };
    Square.prototype.toString = function () {
        return "A Square with ".concat(this.side, ", which is a subclass of ").concat(_super.prototype.toString.call(this));
    };
    return Square;
}(Rectangle));
var rec = new Rectangle("red", true, 20, 40);
console.log(rec.toString());
