import {Fruit} from "./Fruit";
import {IEdible} from "../IEdible/IEdible"
export class Orange extends Fruit implements IEdible {
    howtoEat(): string {
        return "Orange is a special of Fruit";
    }
}