import { TokenData } from "../../types/game/component_data/token_data"
import { GameComponent } from "./game_component"

export class Token extends GameComponent<TokenData> {
    upright: boolean

    constructor(data: TokenData) {
        super(data)
        this.upright = true
    }

    layDown = () => {
        this.upright = false
    }

    standUp = () => {
        this.upright = true
    }
}