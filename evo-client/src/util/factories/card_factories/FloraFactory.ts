import { CardData } from "../../../types/game/card_data";
import { CardType } from "../../../types/game/card_type";
import { Trait } from "../../../types/game/trait";
import { CardFactory } from "./CardFactory";

export class FloraFactory extends CardFactory {
    constructor(cardData:  Partial<CardData> = {}) {
        super({
            ...cardData,
            type: CardType.FLORA
        })
    }

    tree = () => {
        this.cardData = {
            ...this.cardData,
            name: "Tree",
            traits: [Trait.SIZE],
            text: undefined
        }
    }

    nut = () => {
        this.cardData = {
            ...this.cardData,
            name: "Nut",
            traits: [Trait.STRENGTH],
            text: undefined
        }
    }

    grass = () => {
        this.cardData = {
            ...this.cardData,
            name: "Grass",
            traits: [Trait.SPEED],
            text: undefined
        }
    }

    root = () => {
        this.cardData = {
            ...this.cardData,
            name: "Root",
            traits: [Trait.TOUGHNESS],
            text: undefined
        }
    }

    fungus = () => {
        this.cardData = {
            ...this.cardData,
            name: "Fungus",
            traits: [Trait.ENDURANCE],
            text: undefined
        }
    }

    berry = () => {
        this.cardData = {
            ...this.cardData,
            name: "Berry",
            traits: [Trait.AGILITY],
            text: undefined
        }
    }
}