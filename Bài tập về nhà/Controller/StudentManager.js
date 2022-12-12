"use strict";
exports.__esModule = true;
exports.StudentManager = void 0;
var Student_1 = require("../Model/Student");
var readlineSync = require("readline-sync");
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.students = [];
    }
    // constructor(){
    //     this.students.push(new Student("Quyet","phamquyet9688","123456","Hanoi","Gioi",3.5,1))
    // }
    StudentManager.prototype.display = function () {
        return this.students;
    };
    StudentManager.prototype.add = function (student) {
        this.students.push(student);
    };
    StudentManager.prototype.findCode = function (code) {
        for (var i = 0; i < this.students.length; i++) {
            if (this.students[i].getCode() == code) {
                return i;
            }
        }
        return -1;
    };
    StudentManager.prototype.remove = function (code) {
        var index = this.findCode(code);
        if (index == -1) {
            console.log("khong co sinh vien nay");
        }
        else {
            this.students.splice(index, 1);
            console.log("Xoa thanh cong");
        }
    };
    StudentManager.prototype.edit = function (code) {
        var index = this.findCode(code);
        if (index == -1) {
            console.log("Khong co sinh vien nay");
        }
        // else {
        //     this.students[index]=(new Student("Quyet11","phamquyet968811","12345611","Hanoi","Gioi",2.5,4));
        //     console.log("Sua thanh cong")
        // }
        else {
            var name_1 = readlineSync.question('Enter name student: ');
            var email = readlineSync.question('Enter email student: ');
            var password = readlineSync.question('Enter password student: ');
            var address = readlineSync.question('Enter address student: ');
            var group = readlineSync.question('Enter group student: ');
            var GPA = +readlineSync.question('Enter GPA student: ');
            this.students[index] = new Student_1.Student(name_1, email, password, address, group, GPA, code);
        }
    };
    StudentManager.prototype.statistic = function (GPA) {
        var YEU = 0;
        var TB = 0;
        var GIOI = 0;
        for (var i = 0; i < this.students.length; i++) {
            if (this.students[i].getGPA() > 0 && this.students[i].getGPA() < 6.5) {
                YEU++;
            }
            else if (this.students[i].getGPA() >= 6.5 && this.students[i].getGPA() < 8) {
                TB++;
            }
            else {
                GIOI++;
            }
        }
        console.log("So hoc sinh yeu la " + YEU + "\nSo hoc sinh trung binh la " + TB + "\nSo hoc sinh gioi la " + GIOI);
    };
    return StudentManager;
}());
exports.StudentManager = StudentManager;
