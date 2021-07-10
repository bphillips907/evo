import { LocationData } from "../../types/game/component_data/location_data";
import { CardPool } from "../collections/card_pool";
import { TokenPool } from "../collections/token_pool";
import { GameComponent } from "./game_component";

export class Location extends GameComponent<LocationData> {
    population: TokenPool
    fauna: CardPool
    flora: CardPool

    constructor(data: LocationData) {
        super(data)
        this.population = new TokenPool
        this.fauna = new CardPool(`${this.data.name}'s Fauna`)
        this.flora = new CardPool(`${this.data.name}'s Flora`)
    }
    
}