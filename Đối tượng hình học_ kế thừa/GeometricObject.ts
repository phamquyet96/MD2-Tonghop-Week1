class Shape{
    color: string="blue"
    filled: boolean=false
    constructor(color: string,filled: boolean) {
        this.color = color
        this.filled = filled
    }
    getColor():string {
        return this.color;
    }
    setColor(color:string):void {
        this.color = color;
    }
    isFilled():boolean {
        return this.filled;
    }
    setFilled(filled:boolean):void {
        this.filled = filled;
    }
    toString():string {
        if(this.isFilled()){
            return "A shape with color of "+ this.getColor()+" and filled.";
        }else{
            return "A shape with color of "+ this.getColor()+" and not filled.";
        }
    }
}

class Circle extends Shape{
    radius: number;
    constructor(color: string,filled:boolean,radius: number) {
        super(color,filled);
        this.radius = radius;
    }
    getRadius():number {
        return this.radius;
    }
    setRadius(radius:number):void {
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter(): number{
        return 2 * Math.PI * this.radius;
    }
    toString(): string {
        return `A Circle with ${this.radius}, which is a subclass of ${super.toString()} `
    }
}

class Rectangle extends Shape{
    width: number;
    length: number;
    constructor(color: string,filled:boolean,width: number,length: number) {
        super(color,filled);
        this.width = width;
        this.length= length
    }
    getWidth():number {
        return this.width;
    }
    setWidth(width:number):void {
        this.width = width;
    }
    getLength():number {
        return this.length;
    }
    setLength(length:number):void {
        this.length = length;
    }
    getArea(): number {
        return this.getWidth() * this.getLength();
    }
    getPerimeter(): number{
        return 2 * (this.getWidth() + this.getLength());
    }
    toString(): string {
        return `A Rectangle with ${this.width} and ${this.length}, which is a subclass of ${super.toString()}`
    }
}

class Square extends Rectangle{
    side: number
    constructor(color: string,filled:boolean,side: number) {
        super(color,filled,side,side);
        this.side = side;
    }
    getSide(): number {
        return this.side;
    }
    setSide(side: number):void {
        this.side = side;
    }
    setWidth(side: number) :void{
        this.side = side;
    }
    setLength(side: number):void {
        this.side = side;
    }
    toString(): string {
        return `A Square with ${this.side}, which is a subclass of ${super.toString()}`
    }
}

let rec= new Rectangle("red",true,20,40)
console.log(rec.toString())