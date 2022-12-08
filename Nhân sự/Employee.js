"use strict";
exports.__esModule = true;
exports.Gender = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, gender, birthday, email, phone) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    return Employee;
}());
var Gender;
(function (Gender) {
    Gender["MALE"] = "Male";
    Gender["FEMALE"] = "Female";
    Gender["OTHER"] = "Other";
})(Gender = exports.Gender || (exports.Gender = {}));
function CreateEmployee(object) {
    employeeList.push(object);
}
function DeleteEmployee(index) {
    employeeList.splice(index, 1);
}
var employeeList = [];
var ManagerQuyet = new Employee("Quyet", Gender.MALE, 1996, "phamquyet9688@gmail.com", 22121212);
var Trung = new Employee("Trung", Gender.MALE, 1994, "phamtrung@gmail.com", 22566121233);
var Nam = new Employee("Nam", Gender.OTHER, 1998, "phamnam@gmail.com", 287121233);
var Phuong = new Employee("Phuong", Gender.FEMALE, 2000, "phuongg2489@gmail.com", 965734326);
console.log(employeeList);
CreateEmployee(Phuong);
CreateEmployee(Trung);
CreateEmployee(Nam);
CreateEmployee(ManagerQuyet);
// let quyet=ManagerQuyet.getName();
// console.log(quyet)
// DeleteEmployee(1)
// console.log(employeeList)
