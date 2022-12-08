"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, dayofbirth, address, positionJob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dayofbirth = dayofbirth;
        this.address = address;
        this.positionJob = positionJob;
    }
    Employee.prototype.getFirstName = function () {
        return this.firstName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.getDayofBirth = function () {
        return this.dayofbirth;
    };
    return Employee;
}());
exports.Employee = Employee;
