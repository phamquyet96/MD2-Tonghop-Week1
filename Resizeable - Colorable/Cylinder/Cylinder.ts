import {Circle} from "../Circle/Circle";

export class Cylinder extends Circle{
    height: number
    constructor(height: number,name:string,radius:number) {
        super(name,radius);
        this.height = height;
    }
    calculateAreaAround(){
        return 2*Math.PI*this.radius*this.height
    }
    calculateAreaAll() {
        return 2 * Math.PI * this.radius * (this.height + this.radius)
    }
    calculateVolume(){
        return Math.PI * this.radius * this.radius*this.height
    }
}