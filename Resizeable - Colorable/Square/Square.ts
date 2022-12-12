import {Rectangle} from "../Rectangle/Rectangle";
import {Resizeable} from "../IResizeable/IResizeable";

export class Square extends Rectangle implements Resizeable{
    constructor(name: string,height: number,width: number) {
        super(width,height,name);
    }
    calculateArea(): number {
        return this.width*this.width;
    }
    calculatePerimeter(): number {
        return this.width*4;
    }
    resize(percent: number) {
        this.width=this.width*(1+percent/100);
        return this.width*this.width
    }
}