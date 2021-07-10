import { GameObject } from "../game_object"

export abstract class GameComponent<T> extends GameObject {
    data: T

    constructor(data: T) {
        super()
        this.data = data
    }
}

