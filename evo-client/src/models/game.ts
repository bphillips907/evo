import { CardType } from "../types/game/card_type";
import { DefaultFacingOnAddType } from "../types/game/default_facing_on_add";
import { SPECIES, SpeciesType } from "../types/game/species_type";
import { TokenType } from "../types/game/token_type";
import { Trait, TRAITS } from "../types/game/trait";
import map_by_uuid from "../util/arrays/map_by_uuid";
import { sample } from "../util/arrays/sample";
import shuffle from "../util/arrays/shuffle";
import { SETUP_POPULATION_TOKENS, SETUP_SPECIES_STARTING_EACH_TRAIT_IN_GENOME, SETUP_SURVIVAL_TOKENS, SETUP_LOCATION_STARTING_FLORA, SETUP_LOCATION_STARTING_FAUNA, SETUP_SPECIES_STARTING_ADAPTATIONS } from "../util/constants/setup";
import { generateFaunaCards, generateFloraCards, generateTraitCards } from "../util/generators/cards/cards_generator";
import { generateLocations } from "../util/generators/locations/locations_generator";
import { generateTokens } from "../util/generators/tokens/tokens_generators";
import { Card } from "./game_components/card";
import { Location } from "./location";
import { Player } from "./player";
import { CardPool } from "./pools/card_pool";
import { Species } from "./species";

export class Game {
    players: Map<string, Player>
    species: Map<SpeciesType, Species>
    locations: Location[]
    millenia: number
    generation: number
    activePlayerUuid: string | undefined
    adaptationsDeck: CardPool
    faunaDeck: CardPool
    floraDeck: CardPool
    traitDecks: Map<Trait, CardPool>

    constructor() {
        this.players = new Map()
        this.species = new Map()
        this.locations = []
        this.millenia = 1
        this.generation = 1
        this.activePlayerUuid = undefined
        this.adaptationsDeck = new CardPool("Adaptations Deck", [], DefaultFacingOnAddType.FACE_DOWN)
        this.faunaDeck = new CardPool("Fauna Deck", [], DefaultFacingOnAddType.FACE_DOWN)
        this.floraDeck  = new CardPool("Flora Deck", [], DefaultFacingOnAddType.FACE_DOWN)
        this.traitDecks  = new Map()
    }

    getRandomPlayer = (): Player => {
        const playerList = Array.from(this.players.values())
        return sample(playerList)
    }

    // FIXME: Move this code
    static newGame = (...players: Player[]): Game => {
        const newGame = new Game()

        // Randomize player order and map by uuid
        newGame.players = map_by_uuid(shuffle(players))

        // Randomly determine first player
        newGame.activePlayerUuid = newGame.getRandomPlayer().uuid

        // === Common Decks

        // Fake Seed Adaptations Deck
        for (let i=0; i<60; i++) {
            newGame.adaptationsDeck.addCardToBottom(new Card({
                name:`Adaptation ${i}`, 
                type: CardType.ADAPTATION,
                traits: [TRAITS[i%6]]
             }))
        }
        newGame.adaptationsDeck.shuffle()
        // Fauna
        generateFaunaCards().forEach(card => {
            newGame.faunaDeck.addCardToBottom(card)
        })
        newGame.faunaDeck.shuffle()
        // Flora
        generateFloraCards().forEach(card => {
            newGame.floraDeck.addCardToBottom(card)
        })
        newGame.floraDeck.shuffle()

        // Traits
        const traitCards = generateTraitCards()
        TRAITS.forEach(trait => {
            newGame.traitDecks.set(trait, new CardPool(`${trait} Cards`, traitCards.get(trait), DefaultFacingOnAddType.FACE_UP))
        })

        // Per Player setup
        const availableSpecies: SpeciesType[] = shuffle([...SPECIES])
        const availableLocations: Location[] = shuffle(generateLocations())
        players.forEach(player => {
            // Species
            const nextSpecies = availableSpecies.shift()
            if (nextSpecies) {
                const newSpecies = Game.setupNewSpecies(newGame, nextSpecies)
                newGame.species.set(newSpecies.species, newSpecies)
                player.activeSpecies = newSpecies
                player.drawFromSpeciesGenomeDeck(6)
            }

            // Location
            const newLocation = availableLocations.shift()
            if (newLocation) {
                newLocation.fauna.drawFrom(newGame.faunaDeck, SETUP_LOCATION_STARTING_FAUNA)
                newLocation.flora.drawFrom(newGame.floraDeck, SETUP_LOCATION_STARTING_FLORA)
                const playerSpeciesPopulation = player.activeSpecies?.populationTokens
                if (playerSpeciesPopulation) {
                    newLocation.population.addFromCommonPool(playerSpeciesPopulation, 3)
                }
                newGame.locations.push(newLocation)
            }
        })

        return newGame
    }

    static setupNewSpecies = (game: Game, speciesType: SpeciesType): Species => {
        const newSpecies = new Species(`${speciesType}`, speciesType)

        newSpecies.populationTokens.add(...generateTokens({type: TokenType.POPULATION, species: speciesType}, SETUP_POPULATION_TOKENS))
        newSpecies.survivalTokens.add(...generateTokens({type: TokenType.SURVIVAL, species: speciesType}, SETUP_SURVIVAL_TOKENS))

        // Genome
        const genomeCards = Game.drawNewSpeciesGenomeCards(game)
        genomeCards.forEach(card => {
            newSpecies.genome.addCardToBottom(card)
        })
        newSpecies.genome.shuffle()

        // Adaptations
        for(let i=0; i<SETUP_SPECIES_STARTING_ADAPTATIONS; i++) {
            const card = game.adaptationsDeck.draw()
            if (card) {
                newSpecies.adaptations.addCardToBottom(card)
            }
        }

        return newSpecies
    }

    static drawNewSpeciesGenomeCards = (game: Game): Card[] => {
        const cards: Card[] = []

        // 2 of each trait
        TRAITS.forEach(trait => {
            for(let i=0; i<SETUP_SPECIES_STARTING_EACH_TRAIT_IN_GENOME; i++) {
                const card = game.traitDecks.get(trait)?.draw()
                if (card) {
                    cards.push(card)
                }
            }
        })

        return cards
    }
}