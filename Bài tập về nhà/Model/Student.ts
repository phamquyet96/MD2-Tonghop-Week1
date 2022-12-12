import {User} from '../Model/User'
export class Student extends User{
    group: string;
    GPA: number;
    code:number;
    constructor(name:string, email:string, password:string, address: string,
                group:string, GPA:number, code:number){
        super(name,email,password,address);
        this.group = group;
        this.GPA = GPA;
        this.code = code;
    }
    getGroup():string {
        return this.group;
    }
    getGPA():number {
        return this.GPA;
    }
    getCode():number {
        return this.code;
    }
}



