import { SpeciesType } from "../species_type";
import { TokenType } from "../token_type";

export interface TokenData {
    type: TokenType
    species: SpeciesType
}