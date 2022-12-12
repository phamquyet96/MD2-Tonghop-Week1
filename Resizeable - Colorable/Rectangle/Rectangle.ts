import {Shape} from "../Shape/Shape";
import {Resizeable} from "../IResizeable/IResizeable";

export class Rectangle extends Shape implements Resizeable{
    width:number;
    height:number;
    constructor(width:number, height:number,name:string){
        super(name);
        this.width = width;
        this.height = height;
    }
    calculateArea(){
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * this.width * this.height;
    }
    resize(percent: number){
        this.width = this.width*(1+percent/100);
        this.height = this.height*(1+percent/100);
         return this.width* this.height;
    }
}