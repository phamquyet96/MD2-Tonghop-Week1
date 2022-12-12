import {Circle} from "../Circle/Circle";
import {Rectangle} from "../Rectangle/Rectangle";
import {Square} from "../Square/Square";

export interface Resizeable{
    resize(percent:number);
}
let arr=[]
let circle=new Circle("tron",20)
let rectangle=new Rectangle(30,40,"hinh chu nhat")
let square=new Square("vuong",20,20)

// arr.push(circle)
// arr.push(rectangle)
// arr.push(square)
// console.table(arr)

// console.log(circle.calculateArea())
//
// console.log(circle.resize(Math.random()*100))
// console.log(circle.calculateArea())

console.log(rectangle.calculateArea())

console.log(rectangle.resize(Math.random()*100))



