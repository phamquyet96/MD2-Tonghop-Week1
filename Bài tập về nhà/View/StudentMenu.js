"use strict";
exports.__esModule = true;
exports.StudentMenu = void 0;
var Student_1 = require("../Model/Student");
var StudentManager_1 = require("../Controller/StudentManager");
var readlineSync = require("readline-sync");
var StudentMenu = /** @class */ (function () {
    function StudentMenu() {
        this.menu = "\n    1.Show student list\n    2.Create a new student\n    3.Update student\n    4.Delete student\n    5.Statistic student\n    6.Exit\n    ";
        this.StudentManager = new StudentManager_1.StudentManager();
    }
    StudentMenu.prototype.menuManager = function () {
        var isLoop = true;
        while (isLoop) {
            console.log(this.menu);
            var choice = void 0;
            do {
                choice = +readlineSync.question("Enter a choice:");
                if (choice < 1 || choice > 6) {
                    console.log("Wrong choice.Please try again!");
                }
            } while (choice < 1 || choice > 6);
            switch (choice) {
                case 1: {
                    console.table(this.StudentManager.display());
                    break;
                }
                case 2: {
                    var student = this.inputStudent(null);
                    this.StudentManager.add(student);
                    break;
                }
                case 3: {
                    var id = +readlineSync.question("Enter code student you want to update: ");
                    // let newStudent = this.inputStudent(id);
                    this.StudentManager.edit(id);
                    break;
                }
                case 4: {
                    var id = +readlineSync.question("Enter code student you want to delete: ");
                    this.StudentManager.remove(id);
                    break;
                }
                case 5: {
                    var GPA = void 0;
                    this.StudentManager.statistic(GPA);
                    break;
                }
                case 6: {
                    isLoop = false;
                    break;
                }
            }
        }
    };
    StudentMenu.prototype.inputStudent = function (id) {
        if (id === null) {
            var index = -1;
            do {
                id = +readlineSync.question('Enter code student: ');
                index = this.StudentManager.findCode(id);
                if (index != -1) {
                    console.log("Code exists! Please try again ");
                }
            } while (index != -1);
        }
        var name = readlineSync.question('Enter name student: ');
        var email = readlineSync.question('Enter email student: ');
        var password = readlineSync.question('Enter password student: ');
        var address = readlineSync.question('Enter address student: ');
        var group = readlineSync.question('Enter group student: ');
        var GPA = +readlineSync.question('Enter GPA student: ');
        return new Student_1.Student(name, email, password, address, group, GPA, id);
    };
    return StudentMenu;
}());
exports.StudentMenu = StudentMenu;
