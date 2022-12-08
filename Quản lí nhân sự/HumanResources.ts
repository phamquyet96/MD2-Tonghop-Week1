export class Employee{
    private firstName: string
    private lastName: string
    private dayofbirth: string
    private address: string
    private positionJob: string
    constructor(firstName: string, lastName: string, dayofbirth: string, address: string,positionJob: string){
        this.firstName = firstName
        this.lastName = lastName
        this.dayofbirth = dayofbirth
        this.address = address
        this.positionJob = positionJob
    }
    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }
    getDayofBirth(){
        return this.dayofbirth
    }

}