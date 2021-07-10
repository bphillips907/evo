import { CardData } from "../../../types/game/card_data";
import { CardType } from "../../../types/game/card_type";
import { Trait } from "../../../types/game/trait";
import { CardFactory } from "./CardFactory";

export class FaunaFactory extends CardFactory {
    constructor(cardData:  Partial<CardData> = {}) {
        super({
            ...cardData,
            type: CardType.FAUNA
        })
    }

    grazer = () => {
        this.cardData = {
            ...this.cardData,
            name: "Grazer",
            traits: [Trait.SIZE],
            text: undefined
        }
    }

    brawler = () => {
        this.cardData = {
            ...this.cardData,
            name: "Brawler",
            traits: [Trait.STRENGTH],
            text: undefined
        }
    }

    sprinter = () => {
        this.cardData = {
            ...this.cardData,
            name: "Sprinter",
            traits: [Trait.SPEED],
            text: undefined
        }
    }

    defender = () => {
        this.cardData = {
            ...this.cardData,
            name: "Defender",
            traits: [Trait.TOUGHNESS],
            text: undefined
        }
    }

    evader = () => {
        this.cardData = {
            ...this.cardData,
            name: "Evader",
            traits: [Trait.ENDURANCE],
            text: undefined
        }
    }

    darter = () => {
        this.cardData = {
            ...this.cardData,
            name: "Darter",
            traits: [Trait.AGILITY],
            text: undefined
        }
    }
}