import { CardType } from "../../../types/game/card_type";
import { CardData } from "../../../types/game/component_data/card_data";
import { Trait } from "../../../types/game/trait";
import { CardFactory } from "./CardFactory";

export class FloraFactory extends CardFactory {
    constructor(cardData:  Partial<CardData> = {}) {
        super({
            ...cardData,
            type: CardType.FLORA
        })
    }

    tree = (): FloraFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Tree",
            traits: [Trait.SIZE],
            text: undefined
        }
        return this
    }

    nut = (): FloraFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Nut",
            traits: [Trait.STRENGTH],
            text: undefined
        }
        return this
    }

    grass = (): FloraFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Grass",
            traits: [Trait.SPEED],
            text: undefined
        }
        return this
    }

    root = (): FloraFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Root",
            traits: [Trait.TOUGHNESS],
            text: undefined
        }
        return this
    }

    fungus = (): FloraFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Fungus",
            traits: [Trait.ENDURANCE],
            text: undefined
        }
        return this
    }

    berry = (): FloraFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Berry",
            traits: [Trait.AGILITY],
            text: undefined
        }
        return this
    }
}