enum Speed {
    SLOW = 1,
    MEDIUM = 2,
    FAST = 3,
}

class Fan{
    private speed = Speed.SLOW;
    private on: boolean=false;
    private radius: number=5;
    private color: string="blue"

    constructor( speed: number, on: boolean, color: string, radius: number) {
        this.speed = speed;
        this.on = on;
        this.color = color;
        this.radius = radius;
    }

     getRadius(): number{
        return this.radius;
    }
    setRadius( radius: number){
        this.radius = radius;
    }
    getSpeed(): number{
        return this.speed;
    }
    setSpeed( speed: Speed){
        this.speed = speed;
    }
    getOn(): boolean{
        return this.on;
    }
    setOn( on: boolean){
        this.on = on;
    }
    getColor(): string{
        return this.color;
    }
    setColor( color: string){
        this.color = color;
    }

    toString(){
       if(this.on===false){
           console.log(`Fan is off, Mau quat la :${this.color},Ban kinh la :${this.radius}`)
       }
       else {
           console.log(`Fan is on, Toc do quat la : ${this.speed}, Mau quat la : ${this.color}, Ban kinh quat la : ${this.radius}`)
       }
    }
}
let fan1= new Fan(Speed.FAST,true,"yellow",10)
let fan2= new Fan(Speed.FAST,false,"blue",5)

fan1.toString()
fan2.toString()
