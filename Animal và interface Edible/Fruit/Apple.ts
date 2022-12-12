import {Fruit} from "./Fruit";
import {IEdible} from "../IEdible/IEdible"
export class Apple extends Fruit implements IEdible{
    howtoEat(): string {
        return "Apple is nice fruit";
    }
}