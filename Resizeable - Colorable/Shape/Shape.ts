export class Shape{
    name
    constructor(name){
        this.name = name
    }
    show(){
        return `I am a shape.My name is ${this.name}`;
    }
}