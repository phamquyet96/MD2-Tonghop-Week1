"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, email, password, address) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.getAddress = function () {
        return this.address;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    User.prototype.setAddress = function (address) {
        this.address = address;
    };
    return User;
}());
exports.User = User;
