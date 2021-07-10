import { GameComponent } from "./game_component"
import { CardData } from "../../types/game/component_data/card_data"

export class Card extends GameComponent<CardData> {
    faceUp: boolean
    // tokens: TokenPool

    constructor(
        data: CardData
    ) {
        super(data)
        this.faceUp = true
    }

    flip = (): boolean => {
        this.faceUp = !this.faceUp
        return this.faceUp
    }

    setFaceUp = () => {
        this.faceUp = true
    }

    setFaceDown = () => {
        this.faceUp = false
    }
}