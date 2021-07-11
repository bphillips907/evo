import { CardType } from "../../../../types/game/card_type";
import { CardData } from "../../../../types/game/component_data/card_data";
import { Trait } from "../../../../types/game/trait";

export const rawSizeTraitCard: CardData = {
    name: "Size",
    type: CardType.TRAIT,
    traits: [Trait.SIZE]
}

export const rawStrengthTraitCard: CardData = {
    name: "Strength",
    type: CardType.TRAIT,
    traits: [Trait.STRENGTH]
}

export const rawSpeedTraitCard: CardData = {
    name: "Speed",
    type: CardType.TRAIT,
    traits: [Trait.SPEED]
}

export const rawToughnessTraitCard: CardData = {
    name: "Toughness",
    type: CardType.TRAIT,
    traits: [Trait.TOUGHNESS]
}

export const rawEnduranceTraitCard: CardData = {
    name: "Endurance",
    type: CardType.TRAIT,
    traits: [Trait.ENDURANCE]
}

export const rawAgilityTraitCard: CardData = {
    name: "Agility",
    type: CardType.TRAIT,
    traits: [Trait.AGILITY]
}