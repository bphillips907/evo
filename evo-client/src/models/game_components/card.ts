import { CardData } from "../../types/game/card_data"
import { GameComponent } from "./game_component"
import { Player } from "../player"

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