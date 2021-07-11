import { Token } from "../../../models/game_components/token";
import { TokenData } from "../../../types/game/component_data/token_data";

export function generateTokens(data: TokenData, count: number): Token[] {
    const tokens: Token[] = []
    for(let i=0; i<count; i++) {
        tokens.push(new Token(data))
    }
    return tokens
}