import {IEdible} from '../IEdible/IEdible'
import {Animal} from "./Animal";

export class Chicken extends Animal implements IEdible{
    makeSound():string{
        return "chicken cuctac";
    }
    howtoEat(): string{
        return "how to eat chicken";
    }
}