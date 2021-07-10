import { Card } from "../../../models/game_components/card"
import { CardData, isValidCardData } from "../../../types/game/card_data"
import { CardType } from "../../../types/game/card_type"
import { Trait } from "../../../types/game/trait"
import { FaunaFactory } from "./FaunaFactory"
import { FloraFactory } from "./FloraFactory"
import { TraitFactory } from "./TraitFactory"

export class CardFactory  {
    cardData:  Partial<CardData>

    constructor(cardData:  Partial<CardData> = {}) {
        this.cardData = cardData
    }

    build = (): Card => {
        if (!isValidCardData(this.cardData)) {
            throw new Error(`Card Data is incomplete: ${this.cardData}`)
        }

        return new Card(
            this.cardData
        )
    }

    // Card Type Specific Factories
    trait = (): TraitFactory => {
        return new TraitFactory(this.cardData)
    }

    fauna = (): FaunaFactory => {
        return new FaunaFactory(this.cardData)
    }

    flora = (): FloraFactory => {
        return new FloraFactory(this.cardData)
    }

    // Properties
    type = (type: CardType): CardFactory => {
        this.cardData.type = type
        return this
    }
    
    name = (name: string): CardFactory => {
        this.cardData.name = name
        return this
    }
    
    traits = (traits: Trait[]): CardFactory => {
        this.cardData.traits = traits
        return this
    }
    
    text = (text: string): CardFactory => {
        this.cardData.text = text
        return this
    }

}