import { Foods } from "./foods";

export class CartItem {
    constructor(food:Foods) {
        this.food = food;
    }
    
    food:Foods;
    quantity:number =  1;

    get price(): number {
        return this.food.price * this.quantity;

    }
}