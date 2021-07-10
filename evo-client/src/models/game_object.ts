import { v4 as uuidv4 } from 'uuid';

export abstract class GameObject {
    uuid: string

    constructor() {
        this.uuid = uuidv4()
    }
}