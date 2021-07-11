import produce from "immer";
import { Game } from "../../../../game";
import { Card } from "../../../../game_components/card";
import { Location } from "../../../../location";
import { Player } from "../../../../player";
import { Species } from "../../../../species";
import { GameState } from "../../../game_state";

export interface HuntFaunaTheHuntRecipeArgs {
    player: Player; 
    species: Species;
    location: Location;
    fauna: Card;
}

const huntFaunaTheHuntRecipe = (
    gameState: Game,
    {player, species, location, fauna}: HuntFaunaTheHuntRecipeArgs
): Game => produce<Game>(gameState, draft => {
    console.log(draft, player, species, location, fauna);
})
   
export default huntFaunaTheHuntRecipe;