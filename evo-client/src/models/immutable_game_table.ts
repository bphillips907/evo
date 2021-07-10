import { GameStateChange } from "./game_state/game_state_changes/game_state_change";

export class ImmutableGameTable {

    emit = (gameStateChange: GameStateChange): ImmutableGameTable => new ImmutableGameTable(); // TODO
}