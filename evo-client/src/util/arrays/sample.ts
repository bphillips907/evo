export function sample<T>(collection: T[]): T {
    return collection[Math.floor(Math.random()*collection.length)]
}