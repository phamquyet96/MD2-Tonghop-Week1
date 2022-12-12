import {Circle} from "../Circle/Circle";
import {Rectangle} from "../Rectangle/Rectangle";
import {Square} from "../Square/Square";

export interface Colorable{
    howtoColor();
}
let arr=[]
let circle=new Circle("tron",20)
let rectangle=new Rectangle(30,40,"hinh chu nhat")
let square=new Square("vuong",20,20)

arr.push(circle,rectangle,square)
console.log(arr)

let checkColorable=()=> {
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] instanceof Square) {
            console.log(arr[i].name +" co dien tich la  "+arr[i].calculateArea()+"\n"+arr[i].howtoColor())
        }
    }
}
checkColorable();
