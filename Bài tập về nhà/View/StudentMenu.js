"use strict";
exports.__esModule = true;
var Student_1 = require("../Model/Student");
var StudentManager_1 = require("../Controller/StudentManager");
var student = new Student_1.Student("Quyet", "phamquyet9688", "123", "Namdinh", "gioi", 6.5, 1);
var student1 = new Student_1.Student("Quyet1", "phamquyet96881", "1234", "Namdinh1", "gioi1", 7, 2);
var student2 = new Student_1.Student("Quyet2", "phamquyet96882", "12345", "Namdinh22", "gioi21", 8, 3);
var student3 = new Student_1.Student("Quyet3", "phamquyet96883", "123454", "Namdinh23", "gioi22", 8.5, 4);
var student4 = new Student_1.Student("Quyet4", "phamquyet96884", "123455", "Namdinh24", "gioi23", 7, 5);
var student5 = new Student_1.Student("Quyet5", "phamquyet96885", "123456", "Namdinh25", "gioi24", 5, 6);
var studentManager = new StudentManager_1.StudentManager();
studentManager.add(student);
studentManager.add(student1);
studentManager.add(student2);
studentManager.add(student3);
studentManager.add(student4);
studentManager.add(student5);
// console.table(studentManager.display());
//
// studentManager.remove(1)
// console.table(studentManager.display());
//
// studentManager.edit(2,student2);
// console.table(studentManager.display());
// studentManager.remove(2);
// console.table(studentManager.display());
studentManager.statistic(7);
console.table(studentManager.display());
