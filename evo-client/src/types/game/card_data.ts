import { CardType } from "./card_type";
import { Trait } from "./trait";

export interface CardData {
    type: CardType
    name: string
    traits: Trait[]
    text: string | undefined
}

// typeGuard
export function isValidCardData(cardData: Partial<CardData>): cardData is CardData {
    let isValid = true
    const testCardData = (cardData as CardData)

    if (testCardData.type === undefined) {
        isValid = false
    }
    if (testCardData.name === undefined) {
        isValid = false
    }

    return isValid
}