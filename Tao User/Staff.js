"use strict";
exports.__esModule = true;
exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.getPassword = function () {
        return this.password;
    };
    return Staff;
}());
exports.Staff = Staff;
