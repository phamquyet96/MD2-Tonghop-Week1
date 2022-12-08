class Staff {
    public name: string;
    public email: string;
    public age: number;
    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getAge(){
        return this.age;
    }
    setName(name: string){
        this.name = name;
    }
    setEmail(email: string){
        this.email = email;
    }
    setAge(age: number){
        this.age = age;
    }
}
let staff=new Staff("Quyet","phamquyet9688@gmail.com",20);
console.log(staff.getName());
console.log(staff.getEmail());