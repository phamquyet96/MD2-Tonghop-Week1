import {Shape} from "../Shape/Shape";
import {Resizeable} from "../IResizeable/IResizeable"

export class Circle extends Shape implements Resizeable {
    radius: number;
    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }
    calculateArea(){
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter(radius){
        return 2 * Math.PI * this.radius * radius;
    }
    resize(percent){
        return this.radius=this.radius*(1+percent/100);
    }

}