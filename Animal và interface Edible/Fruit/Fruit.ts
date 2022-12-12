import {IEdible} from "../IEdible/IEdible"
export abstract class Fruit implements IEdible{
    abstract howtoEat(): string;

}