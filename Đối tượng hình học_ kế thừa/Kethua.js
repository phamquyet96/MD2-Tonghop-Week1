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
var Box = /** @class */ (function () {
    function Box(length, width, height) {
        this.height = height;
        this.length = length;
        this.width = width;
    }
    Box.prototype.volume = function () {
        return this.length * this.width * this.height;
    };
    return Box;
}());
var BoxWeight = /** @class */ (function (_super) {
    __extends(BoxWeight, _super);
    function BoxWeight(length, width, height, depth) {
        var _this = _super.call(this, length, width, height) || this;
        _this.depth = depth;
        return _this;
    }
    BoxWeight.prototype.volume = function () {
        return _super.prototype.volume.call(this) * this.depth;
    };
    return BoxWeight;
}(Box));
var boxObj;
var box = new Box(20, 40, 60);
boxObj = new BoxWeight(10, 20, 30, 40);
console.log(boxObj.volume());
console.log(box.volume());
