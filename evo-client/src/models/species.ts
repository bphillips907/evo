import { SpeciesType } from "../types/game/species_type";
import { CardPool } from "./pools/card_pool";
import { GameObject } from "./game_object";
import { DefaultFacingOnAddType } from "../types/game/default_facing_on_add";
import { CommonTokenPool } from "./pools/common_token_pool";
import { TokenType } from "../types/game/token_type";

export class Species extends GameObject {
    name: string
    species: SpeciesType
    genome: CardPool
    lostGenome: CardPool
    futureGenome: CardPool
    adaptations: CardPool
    populationTokens: CommonTokenPool
    survivalTokens: CommonTokenPool

    constructor(name: string, species: SpeciesType) {
        super()
        this.name = name
        this.species = species
        this.genome = new CardPool(`${name}'s Genome Deck`, [], DefaultFacingOnAddType.FACE_DOWN)
        this.lostGenome = new CardPool(`${name}'s Lost Genome`, [], DefaultFacingOnAddType.FACE_UP)
        this.futureGenome = new CardPool(`${name}'s Future Genome`, [], DefaultFacingOnAddType.FACE_UP)
        this.adaptations = new CardPool(`${name}'s Adaptations`, [], DefaultFacingOnAddType.FACE_UP)
        this.populationTokens = new CommonTokenPool({
            type: TokenType.POPULATION,
            species: this.species
        })
        this.survivalTokens = new CommonTokenPool({
            type: TokenType.SURVIVAL,
            species: this.species
        })
    }

}