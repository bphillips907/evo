import { CardPool } from "./pools/card_pool";
import { TokenPool } from "./pools/token_pool";
import { Trait } from "../types/game/trait";
import { GameObject } from "./game_object";

export class Location extends GameObject {
    name: string
    traits: Trait[]
    population: TokenPool
    fauna: CardPool
    flora: CardPool

    constructor(name: string, traits: Trait[]) {
        super()
        this.name = name
        this.traits = traits
        this.population = new TokenPool()
        this.fauna = new CardPool(`${this.name}'s Fauna`)
        this.flora = new CardPool(`${this.name}'s Flora`)
    }
    
}