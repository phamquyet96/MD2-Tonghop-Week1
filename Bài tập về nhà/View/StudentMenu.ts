import {User} from '../Model/User'
import {Student} from "../Model/Student"
import {StudentManager} from "../Controller/StudentManager";

let student= new Student("Quyet","phamquyet9688","123","Namdinh","gioi",6.5,1);
let student1= new Student("Quyet1","phamquyet96881","1234","Namdinh1","gioi1",7,2);
let student2= new Student("Quyet2","phamquyet96882","12345","Namdinh22","gioi21",8,3)
let student3= new Student("Quyet3","phamquyet96883","123454","Namdinh23","gioi22",8.5,4)
let student4= new Student("Quyet4","phamquyet96884","123455","Namdinh24","gioi23",7,5)
let student5= new Student("Quyet5","phamquyet96885","123456","Namdinh25","gioi24",5,6)

let studentManager = new StudentManager();

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

studentManager.statistic(7)
console.table(studentManager.display());



