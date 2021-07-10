import { CardData } from "../../../types/game/card_data";
import { CardType } from "../../../types/game/card_type";
import { Trait } from "../../../types/game/trait";
import { CardFactory } from "./CardFactory";

export class TraitFactory extends CardFactory {
    constructor(cardData:  Partial<CardData> = {}) {
        super({
            ...cardData,
            type: CardType.TRAIT
        })
    }

    size = () => {
        this.cardData = {
            ...this.cardData,
            name: "Size",
            traits: [Trait.SIZE],
            text: undefined
        }
    }

    strength = () => {
        this.cardData = {
            ...this.cardData,
            name: "Strength",
            traits: [Trait.STRENGTH],
            text: undefined
        }
    }

    speed = () => {
        this.cardData = {
            ...this.cardData,
            name: "Speed",
            traits: [Trait.SPEED],
            text: undefined
        }
    }

    toughness = () => {
        this.cardData = {
            ...this.cardData,
            name: "Toughness",
            traits: [Trait.TOUGHNESS],
            text: undefined
        }
    }

    endurance = () => {
        this.cardData = {
            ...this.cardData,
            name: "Endurance",
            traits: [Trait.ENDURANCE],
            text: undefined
        }
    }

    agility = () => {
        this.cardData = {
            ...this.cardData,
            name: "Agility",
            traits: [Trait.AGILITY],
            text: undefined
        }
    }
}