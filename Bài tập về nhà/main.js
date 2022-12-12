var Employee = /** @class */ (function () {
    function Employee(firstN, lastN, getAge) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = getAge;
    }
    Employee.prototype.FullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Employee.prototype.GetAge = function () {
        return this.age;
    };
    return Employee;
}());
var employee1 = new Employee("Pham", "Quyet", 26);
console.log("Name ".concat(employee1.FullName(), "  - Age ").concat(employee1.GetAge()));
