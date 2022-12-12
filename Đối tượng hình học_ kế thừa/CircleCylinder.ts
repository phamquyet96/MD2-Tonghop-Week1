class Circlee {
    radius: number
    color: string

    constructor(radius: number, color: string) {
        this.radius = radius
        this.color = color
    }

    getRadius() {
        return this.radius
    }

    getColor() {
        return this.color
    }

    setRadius(radius: number): void {
        this.radius = radius
    }

    setColor(color: string): void {
        this.color = color
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius
    }
}

class Cylinder extends Circlee{
    height: number;
    constructor(radius: number, height: number, color: string) {
        super(radius, color)
        this.height = height
    }
    getHeight() {
        return this.height
    }
    setHeight(height: number): void {
        this.height = height
    }
    getArea1(): number {
        return 2*Math.PI * this.radius*this.height
    }
    getVolume(): number {
        return Math.PI * this.radius * this.radius * this.height
    }
}

let cylinder=new Cylinder(20,40,"red")
console.log(cylinder.getVolume())