"use strict";
exports.__esModule = true;
exports.Manager = exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setName = function (name) {
        this.name = name;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Product;
}());
exports.Product = Product;
var Manager = /** @class */ (function () {
    function Manager() {
        this.products = [];
    }
    Manager.prototype.getAll = function () {
        return this.products;
    };
    Manager.prototype.add = function (product) {
        this.products.push(product);
    };
    return Manager;
}());
exports.Manager = Manager;
var laptop = new Product("Laptop", 20000);
var iphone = new Product("Iphone", 10000);
var productManager = new Manager();
productManager.add(laptop);
productManager.add(iphone);
console.log(productManager.getAll());
