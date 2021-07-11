import { TokenData } from "../../types/game/component_data/token_data";
import { Token } from "../game_components/token";
import { TokenPool } from "./token_pool";

export class CommonTokenPool extends TokenPool {
    allowedTokenData: TokenData

    constructor(allowedTokenType: TokenData) {
        super()
        this.allowedTokenData = allowedTokenType
    }

    add(...tokens: Token[]): void {
        tokens.forEach(token => {
            if (this.isTokenAllowed(token)) {
                return super.add(token)
            }
            throw new Error("This token cannot be added to this pool")
        })
        
    }

    removeOne(): Token {
        const token = this.tokens.shift()
        if (token) {
            return token
        }
        throw new Error("Cannon remove from empty pool") 
    }

    isTokenAllowed(token: Token): boolean {
        if (token.data.species !== this.allowedTokenData.species) {
            return false
        }
        if (token.data.type !== this.allowedTokenData.type) {
            return false
        }
        return true
    }
}