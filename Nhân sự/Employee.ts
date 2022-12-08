class Employee{
    private name: string
    private gender: Gender
    private birthday:number
    private email:string
    private phone?:number
    constructor(name: string, gender: Gender, birthday: number, email: string,phone?: number) {
        this.name = name
        this.gender = gender
        this.birthday = birthday
        this.email = email
    }
   getName(){
        return this.name;
    }
}
export enum Gender {
    MALE= 'Male',
    FEMALE= 'Female',
    OTHER = 'Other'
}
function CreateEmployee(object):void{
    employeeList.push(object);
}
function DeleteEmployee(index:number){
    employeeList.splice(index, 1);

}

let employeeList: Employee[]=[];
let ManagerQuyet= new Employee("Quyet",Gender.MALE,1996,"phamquyet9688@gmail.com",22121212)
let Trung= new Employee("Trung",Gender.MALE,1994,"phamtrung@gmail.com",22566121233)
let Nam= new Employee("Nam",Gender.OTHER,1998,"phamnam@gmail.com",287121233)
let Phuong= new Employee("Phuong",Gender.FEMALE,2000,"phuongg2489@gmail.com",965734326)

 CreateEmployee(Phuong)
 CreateEmployee(Trung)
 CreateEmployee(Nam)
 CreateEmployee(ManagerQuyet)

console.log(employeeList)
// let quyet=ManagerQuyet.getName();
// console.log(quyet)
DeleteEmployee(1)
console.log(employeeList)
