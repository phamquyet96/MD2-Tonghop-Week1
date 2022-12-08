export class Product{
    private name: string;
    private price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    setName(name: string){
        this.name = name;
    }
    setPrice(price: number){
        this.price = price;
    }
}

export class Manager{
    private products=[];
    constructor(){
    }
    getAll(){
        return this.products;
    }
    add(product){
        this.products.push(product);
    }
}
let laptop = new Product("Laptop", 20000);
let iphone = new Product("Iphone", 10000);

let productManager = new Manager();
productManager.add(laptop);
productManager.add(iphone);

console.log(productManager.getAll());
