import { CardType } from "../../../types/game/card_type";
import { CardData } from "../../../types/game/component_data/card_data";
import { Trait } from "../../../types/game/trait";
import { CardFactory } from "./CardFactory";

export class FaunaFactory extends CardFactory {
    constructor(cardData:  Partial<CardData> = {}) {
        super({
            ...cardData,
            type: CardType.FAUNA
        })
    }

    grazer = (): FaunaFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Grazer",
            traits: [Trait.SIZE],
            text: undefined
        }
        return this
    }

    brawler = (): FaunaFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Brawler",
            traits: [Trait.STRENGTH],
            text: undefined
        }
        return this
    }

    sprinter = (): FaunaFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Sprinter",
            traits: [Trait.SPEED],
            text: undefined
        }
        return this
    }

    defender = (): FaunaFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Defender",
            traits: [Trait.TOUGHNESS],
            text: undefined
        }
        return this
    }

    evader = (): FaunaFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Evader",
            traits: [Trait.ENDURANCE],
            text: undefined
        }
        return this
    }

    darter = (): FaunaFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Darter",
            traits: [Trait.AGILITY],
            text: undefined
        }
        return this
    }
}