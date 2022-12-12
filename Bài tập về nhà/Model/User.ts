export class User{
    name:string;
    email:string;
    password:string;
    address:string;
    constructor(name:string, email:string, password:string, address: string){
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
    }
    getName():string {
        return this.name;
    }
    getEmail():string{
        return this.email;
    }
    getPassword():string{
        return this.password;
    }
    getAddress():string{
        return this.address;
    }
    setName(name: string){
        this.name = name;
    }
    setEmail(email: string){
        this.email = email;
    }
    setPassword(password: string){
        this.password = password;
    }
    setAddress(address: string){
        this.address = address;
    }
}