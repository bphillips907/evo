import { GameObject } from "../game_object";
import { GameStateChange } from "./game_state_recipes/game_state_change";
import { Game } from "../game";

export class GameState extends GameObject {
    stateJustification: GameStateChange
    table: Game

    constructor(previousState: Game, stateChange: GameStateChange) {
        super()
        this.stateJustification = stateChange
        this.table = stateChange.produceRecipe(previousState);
    }

    getTable = (): Game => this.table;
}