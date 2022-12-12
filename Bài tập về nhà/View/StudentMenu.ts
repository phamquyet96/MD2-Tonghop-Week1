import {User} from '../Model/User'
import {Student} from "../Model/Student"
import {StudentManager} from "../Controller/StudentManager"

const readlineSync= require("readline-sync")

export class StudentMenu {
    StudentManager: StudentManager;
    private menu = `
    1.Show student list
    2.Create a new student
    3.Update student
    4.Delete student
    5.Statistic student
    6.Exit
    `;

    constructor() {
        this.StudentManager = new StudentManager();
    }

    public menuManager() {
        let isLoop = true;
        while (isLoop) {
            console.log(this.menu);
            let choice;
            do {
                choice = +readlineSync.question(`Enter a choice:`);
                if (choice < 1 || choice > 6) {
                    console.log(`Wrong choice.Please try again!`);
                }
            } while (choice < 1 || choice > 6)
            switch (choice) {
                case 1: {
                   console.table( this.StudentManager.display())
                    break;
                }
                case 2: {
                    let student = this.inputStudent(null);
                    this.StudentManager.add(student);
                    break;
                }

                case 3: {
                    let id = +readlineSync.question("Enter code student you want to update: ");
                    // let newStudent = this.inputStudent(id);
                    this.StudentManager.edit(id);
                    break;
                }
                case 4: {
                    let id = +readlineSync.question("Enter code student you want to delete: ");
                    this.StudentManager.remove(id);
                    break;
                }
                case 5: {
                    let GPA;
                    this.StudentManager.statistic(GPA);
                    break;
                }
                case 6: {
                    isLoop = false;
                    break;
                }
            }
        }
    }

    public inputStudent(id: number | null): Student {
        if (id === null) {
            let index = -1;
            do {
                id = +readlineSync.question('Enter code student: ')
                index = this.StudentManager.findCode(id);
                if (index != -1) {
                    console.log("Code exists! Please try again ");
                }
            }while(index!=-1);
        }
        let name=readlineSync.question('Enter name student: ')
        let email=readlineSync.question('Enter email student: ')
        let password=readlineSync.question('Enter password student: ')
        let address=readlineSync.question('Enter address student: ')
        let group=readlineSync.question('Enter group student: ')
        let GPA=+readlineSync.question('Enter GPA student: ')
        return new Student(name, email, password, address, group, GPA,id);
    }
}







