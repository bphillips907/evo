import { SpeciesType } from "../types/game/species_type";
import { CardPool } from "./collections/card_pool";
import { TokenPool } from "./collections/token_pool";
import { GameObject } from "./game_object";

export class Species extends GameObject {
    name: string
    species: SpeciesType
    genome: CardPool
    lostGenome: CardPool
    futureGenome: CardPool
    adaptations: CardPool
    populationTokens: TokenPool
    survivalTokens: TokenPool

    constructor(name: string, species: SpeciesType) {
        super()
        this.name = name,
        this.species = species
        this.genome = new CardPool(`${name}'s Genome Deck`)
        this.lostGenome = new CardPool(`${name}'s Lost Genome`)
        this.futureGenome = new CardPool(`${name}'s Future Genome`)
        this.genome = new CardPool(`${name}'s Genome Deck`)
        this.adaptations = new CardPool(`${name}'s Adaptations`)
        this.populationTokens = new TokenPool()
        this.survivalTokens = new TokenPool()
    }

}