import { SpeciesType } from "../../types/game/species_type"
import { Token } from "../game_components/token"


export class TokenPool {
    tokens: Token[]

    constructor(tokens: Token[] = []) {
        this.tokens = tokens
    }

    add = (token: Token): number => {
        return this.tokens.push(token)
    }

    remove = (token: Token): boolean => {
        return this.removeByUuid(token.uuid)
    }

    removeByUuid = (uuidToRemove: string): boolean => {
        let modified = false
        const newTokens = this.tokens.filter(({uuid}) => {
            modified = modified || uuid === uuidToRemove
            return uuid !== uuidToRemove
        })
        
        this.tokens = newTokens
        return modified 
    }

    removeAll = (): Token[] => {
        const removed = [...this.tokens]
        this.tokens = []
        return removed
    }

    removeAllBySpecies = (speciesToRemove: SpeciesType): Token[] => {
        const removed: Token[] = []
        const remaining: Token[] = []
        this.tokens.forEach(token => {
            if (token.data.species === speciesToRemove) {
                removed.push(token)
            } else {
                remaining.push(token)
            }
        })
        this.tokens = remaining
        return removed
    }

    standUpAll = () => {
        this.tokens.forEach(token => {
            token.standUp()
        })
    }

    size = () => {
        return this.tokens.length
    }
}