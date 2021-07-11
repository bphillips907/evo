import { GameObject } from "../../models/game_object";

export default function map_by_uuid<T extends GameObject>(collection: T[]): Map<string, T> {
    const uuidToItemMap = new Map<string, T>()
    collection.forEach(item => {
        uuidToItemMap.set(item.uuid, item)
    })
    return uuidToItemMap
}