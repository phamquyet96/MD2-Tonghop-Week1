enum Role{
    ADMIN =1,
    USER =2
}
class User{
    protected name: string;
    protected email: string;
    public role:number
    constructor(name: string, email: string, role: number){
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo():string{
        return `${this.name}` +" "+ `${this.email}`+" "+`${this.role}`
    }
    isAdmin(){
        if(Role.ADMIN===1){
            console.log("Admin")
        }else if(Role.USER===2){
            console.log("User")
        }
    }
    setName(name: string){
        this.name=name;
    }
    setEmail(email: string){
        this.email=email;
    }
}
let username= new User("Quyet","phamquyet9688",Role.USER);
console.log(username.getInfo());
username.isAdmin()
console.log(username)
