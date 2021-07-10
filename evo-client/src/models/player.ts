import { CardPool } from "./collections/card_pool";
import { Token } from "./game_components/token";
import { Species } from "./species";
import { GameObject } from "./game_object";

export class Player extends GameObject {
    name: string
    currentSpecies: Species | undefined
    activePopulation: Token | undefined
    hand: CardPool
    score: number

    constructor(name: string) {
        super()
        this.name = name
        this.currentSpecies = undefined
        this.activePopulation = undefined
        this.hand = new CardPool(`${name}'s Hand`)
        this.score = 0
    }
    
}