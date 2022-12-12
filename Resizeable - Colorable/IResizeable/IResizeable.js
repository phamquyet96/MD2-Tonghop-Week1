"use strict";
exports.__esModule = true;
var Circle_1 = require("../Circle/Circle");
var Rectangle_1 = require("../Rectangle/Rectangle");
var Square_1 = require("../Square/Square");
var arr = [];
var circle = new Circle_1.Circle("tron", 20);
var rectangle = new Rectangle_1.Rectangle(30, 40, "hinh chu nhat");
var square = new Square_1.Square("vuong", 20, 20);
// arr.push(circle)
// arr.push(rectangle)
// arr.push(square)
// console.table(arr)
// console.log(circle.calculateArea())
//
// console.log(circle.resize(Math.random()*100))
// console.log(circle.calculateArea())
console.log(rectangle.calculateArea());
console.log(rectangle.resize(Math.random() * 100));
console.log(rectangle.calculateArea());
