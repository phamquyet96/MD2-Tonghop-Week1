import {Employee} from "./HumanResources";
export class EmployeeManager{
    employees : Employee[]=[]
    public static HumanResource=[]
    display(){
        return this.employees
    }
    add(employee: Employee): void{
        this.employees.push(employee)
    }
    Delete(firstName: string, lastName: string,dateofbirth: string): void{
        for(let i=0;i<this.employees.length;i++){
            if(this.employees[i].getFirstName() == firstName && this.employees[i].getLastName()==lastName
                || this.employees[i].getDayofBirth()== dateofbirth){
                this.employees.splice(i,1)
            }
        }
    }
}