import { SpeciesType } from "../../types/game/species_type"
import { Token } from "../game_components/token"
import { CommonTokenPool } from "./common_token_pool"


export class TokenPool {
    tokens: Token[]

    constructor(tokens: Token[] = []) {
        this.tokens = tokens
    }

    add(...tokens: Token[]): void {
        this.tokens.push(...tokens)
    }

    addFromCommonPool(source: CommonTokenPool, count=1) {
        for(let i=0; i<count; i++) {
            const token = source.removeOne()
            if (token) {
                this.add(token)
            }
        }
    }

    remove(token: Token): boolean {
        return this.removeByUuid(token.uuid)
    }

    removeByUuid(uuidToRemove: string): boolean {
        let modified = false
        const newTokens = this.tokens.filter(({uuid}) => {
            modified = modified || uuid === uuidToRemove
            return uuid !== uuidToRemove
        })
        
        this.tokens = newTokens
        return modified 
    }

    removeAll (): Token[] {
        const removed = [...this.tokens]
        this.tokens = []
        return removed
    }

    removeAllBySpecies(speciesToRemove: SpeciesType): Token[] {
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

    standUpAll() {
        this.tokens.forEach(token => {
            token.standUp()
        })
    }

    size = () => {
        return this.tokens.length
    }
}