// class Box {
//
//     length: number;
//
//     width: number;
//
//     height: number;
//
//     constructor( length: number,  width: number,  height: number) {
//
//         this.height = height;
//
//         this.length = length;
//
//         this.width = width;
//
//     }
//
//     volume() : number {
//
//         return this.length*this.width*this.height;
//
//     }
//
// }
// class BoxWeight extends Box {
//
//     length: number;
//
//     width: number;
//
//     height: number;
//
//     depth: number;
//
//     constructor( length: number,  width: number,  height: number, depth: number) {
//
//         super(length, width, height);
//
//         this.depth = depth;
//
//     }
//
//     volume() : number {
//
//         return super.volume()*this.depth;
//
//     }
//
// }
// let boxObj : Box;
// let box=new Box(20,40,60);
// boxObj = new BoxWeight(10, 20, 30, 40);
//
// console.log(boxObj.volume());
// console.log(box.volume())

// class Rectangle {
//     name : string;
//     height: number;
//     width: number;
//     constructor(height, width) {
//         this.name = 'Rectangle';
//         this.height = height;
//         this.width = width;
//     }
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//     getArea() {
//         return this.height * this.width;
//     }
//
//     set area(value) {
//         this._area = value;
//     }
// }

