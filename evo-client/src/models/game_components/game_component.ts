import { v4 as uuidv4 } from 'uuid';
import { Player } from "../player"

export abstract class GameComponent<T> {
    uuid: string
    data: T
    controller: Player | undefined

    constructor(data: T, owner?: Player) {
        this.uuid = uuidv4()
        this.data = data
        this.controller = owner
    }
}

