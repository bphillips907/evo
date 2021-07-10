import { GameObject } from "../game_object";
import { ImmutableGameTable } from "../immutable_game_table";
import { GameStateChange } from "./game_state_changes/game_state_change";

export class GameState extends GameObject {
    stateJustification: GameStateChange
    table: ImmutableGameTable

    constructor(previousState: ImmutableGameTable, stateChange: GameStateChange) {
        super()
        this.stateJustification = stateChange
        this.table = previousState.emit(stateChange);
    }

    getTable = (): ImmutableGameTable => this.table;
}