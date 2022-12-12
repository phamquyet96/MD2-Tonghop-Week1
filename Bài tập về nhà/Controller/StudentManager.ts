import {Student} from "../Model/Student";
const readlineSync= require("readline-sync")
export class StudentManager{
    students:Student[]=[]
    // constructor(){
    //     this.students.push(new Student("Quyet","phamquyet9688","123456","Hanoi","Gioi",3.5,1))
    // }
    display(){
        return this.students
    }
    add(student:Student){
        this.students.push(student)
    }

    findCode(code:number){
        for(let i=0;i<this.students.length;i++){
            if(this.students[i].getCode() == code){
                return i;
            }
        }
        return -1;
    }
    remove(code:number):void{
        let index = this.findCode(code);
        if(index== -1){
            console.log("khong co sinh vien nay")
        }else {
            this.students.splice(index,1);
            console.log("Xoa thanh cong")
        }
    }
    edit(code:number){
        let index = this.findCode(code);
        if(index== -1) {
            console.log("Khong co sinh vien nay")
        }
        // else {
        //     this.students[index]=(new Student("Quyet11","phamquyet968811","12345611","Hanoi","Gioi",2.5,4));
        //     console.log("Sua thanh cong")
        // }
        else {
            let name=readlineSync.question('Enter name student: ')
            let email=readlineSync.question('Enter email student: ')
            let password=readlineSync.question('Enter password student: ')
            let address=readlineSync.question('Enter address student: ')
            let group=readlineSync.question('Enter group student: ')
            let GPA=+readlineSync.question('Enter GPA student: ')
            this.students[index] =  new Student(name,email,password,address,group,GPA,code)
        }
    }
    statistic(GPA:number):any{
        let YEU=0
        let TB=0;
        let GIOI=0;
        for(let i=0;i<this.students.length;i++){
            if(this.students[i].getGPA()>0 && this.students[i].getGPA()<6.5){
                YEU++;
            }else if(this.students[i].getGPA()>=6.5 && this.students[i].getGPA()<8){
                TB++;
            }else {
                GIOI++;
            }
        }
        console.log("So hoc sinh yeu la "+YEU +"\nSo hoc sinh trung binh la "+TB+"\nSo hoc sinh gioi la "+GIOI)
    }
}