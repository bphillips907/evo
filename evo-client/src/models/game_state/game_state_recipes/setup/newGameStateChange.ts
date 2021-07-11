import produce from "immer";
import { Game } from "../../../game";
import { GameStateChange } from "../game_state_change";

export class NewGameStateChange extends GameStateChange {
    constructor() {
        super({
            id: 'com.evo.rules.newGame'
        });
    }

    produceRecipe = (gameState: Game) => produce<Game>(gameState, draft => draft)
}
