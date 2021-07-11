import { Card } from "../../../models/game_components/card"
import { Trait, TRAITS } from "../../../types/game/trait";
import { rawFaunaCards } from "./data/fauna_deck";
import { rawFloraCards } from "./data/flora_deck";
import { rawAgilityTraitCard, rawEnduranceTraitCard, rawSizeTraitCard, rawSpeedTraitCard, rawStrengthTraitCard, rawToughnessTraitCard } from "./data/trait_deck";

export function generateFaunaCards(): Card[] {
    const faunaCards: Card[] = []

    rawFaunaCards.forEach(cardData => {
        faunaCards.push(new Card(cardData))
    });

    return faunaCards

}

export function generateFloraCards(): Card[] {
    const floraCards: Card[] = []

    rawFloraCards.forEach(cardData => {
        floraCards.push(new Card(cardData))
    });

    return floraCards

}

export function generateTraitCards(): Map<Trait, Card[]> {
    const traitCards: Map<Trait, Card[]> = new Map()

    TRAITS.forEach(trait => {
        const cards: Card[] = []
        for (let i = 0; i < 20; i++) {
            cards.push(generateTraitCard(trait))
        }
        traitCards.set(trait, cards)
    })

    return traitCards
}

function generateTraitCard(trait: Trait): Card {
    switch (trait) {
        case Trait.SIZE:
            return new Card(rawSizeTraitCard)
        case Trait.STRENGTH:
            return new Card(rawStrengthTraitCard)
        case Trait.SPEED:
            return new Card(rawSpeedTraitCard)
        case Trait.TOUGHNESS:
            return new Card(rawToughnessTraitCard)
        case Trait.ENDURANCE:
            return new Card(rawEnduranceTraitCard)
        case Trait.AGILITY:
            return new Card(rawAgilityTraitCard)

    }
}