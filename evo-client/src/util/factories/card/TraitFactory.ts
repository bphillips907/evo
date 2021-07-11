import { CardType } from "../../../types/game/card_type";
import { CardData } from "../../../types/game/component_data/card_data";
import { Trait } from "../../../types/game/trait";
import { CardFactory } from "./CardFactory";

export class TraitFactory extends CardFactory {
    constructor(cardData:  Partial<CardData> = {}) {
        super({
            ...cardData,
            type: CardType.TRAIT
        })
    }

    size = (): TraitFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Size",
            traits: [Trait.SIZE],
            text: undefined
        }
        return this
    }

    strength = (): TraitFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Strength",
            traits: [Trait.STRENGTH],
            text: undefined
        }
        return this
    }

    speed = (): TraitFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Speed",
            traits: [Trait.SPEED],
            text: undefined
        }
        return this
    }

    toughness = (): TraitFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Toughness",
            traits: [Trait.TOUGHNESS],
            text: undefined
        }
        return this
    }

    endurance = (): TraitFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Endurance",
            traits: [Trait.ENDURANCE],
            text: undefined
        }
        return this
    }

    agility = (): TraitFactory => {
        this.cardData = {
            ...this.cardData,
            name: "Agility",
            traits: [Trait.AGILITY],
            text: undefined
        }
        return this
    }
}