import { CardType } from "../card_type"
import { Trait } from "../trait"
import { isValidLocationData } from "./location_data"

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
    if (testCardData.traits === undefined) {
        isValid = false
    }

    return isValid
}