import { ImmutableGameTable } from "../immutable_game_table";
import { GameStateChange } from "./game_state_changes/game_state_change";

export class GameState {
    id: string
    stateJustification: GameStateChange
    table: ImmutableGameTable

    constructor(previousState: ImmutableGameTable, stateChange: GameStateChange) {
        this.id = "1" // FIXME new UUID();
        this.stateJustification = stateChange
        this.table = previousState.emit(stateChange);
    }

    getTable = (): ImmutableGameTable => this.table;
}