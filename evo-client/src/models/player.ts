import { CardPool } from "./pools/card_pool";
import { Species } from "./species";
import { GameObject } from "./game_object";

export class Player extends GameObject {
    name: string
    activeSpecies: Species | undefined
    activePopulationUuid: string | undefined
    hand: CardPool
    score: number

    constructor(name: string) {
        super()
        this.name = name
        this.activeSpecies = undefined
        this.activePopulationUuid = undefined
        this.hand = new CardPool(`${name}'s Hand`)
        this.score = 0
    }

    drawFromSpeciesGenomeDeck = (count=1) => {
        if (this.activeSpecies?.genome) {
            this.hand.drawFrom(this.activeSpecies?.genome, count)
        }
    }
    
}