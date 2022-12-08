"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.employees = [];
    }
    EmployeeManager.prototype.display = function () {
        return this.employees;
    };
    EmployeeManager.prototype.add = function (employee) {
        this.employees.push(employee);
    };
    EmployeeManager.prototype.Delete = function (firstName, lastName, dateofbirth) {
        for (var i = 0; i < this.employees.length; i++) {
            if (this.employees[i].getFirstName() == firstName && this.employees[i].getLastName() == lastName
                || this.employees[i].getDayofBirth() == dateofbirth) {
                this.employees.splice(i, 1);
            }
        }
    };
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
