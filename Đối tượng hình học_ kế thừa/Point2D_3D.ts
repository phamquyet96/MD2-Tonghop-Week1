class Point2D{
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    getX():number{
        return this.x;
    }
    getY():number{
        return this.y;
    }
    setX(x:number):void{
        this.x = x;
    }
    setY(y:number):void{
        this.y = y;
    }
    getXY():object{
        return {
            x: this.x,
            y: this.y
        }
    }
    setXY(x:number, y:number):void{
        this.x = x;
        this.y = y;
    }
}

class Point3D extends Point2D{
    z:number
    constructor(x: number, y: number, z: number) {
        super(x,y)
        this.z = z;
    }
    getZ():number{
        return this.z;
    }
    setZ(z:number):void {
        this.z = z;
    }
    getXYZ():object {
        return {
            x: this.x,
            y: this.y,
            z: this.z
        }
    }
    setXYZ(x:number, y:number, z:number):void{
      this.x= x
      this.y= y
      this.z= z
    }

}