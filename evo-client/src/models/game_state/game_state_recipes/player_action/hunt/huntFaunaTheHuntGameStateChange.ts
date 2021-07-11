import { Game } from "../../../../game";
import { Card } from "../../../../game_components/card";
import { Location } from "../../../../location";
import { Player } from "../../../../player";
import { Species } from "../../../../species";
import { GameStateChange } from "../../game_state_change";
import huntFaunaTheHuntRecipe from "./huntFaunaTheHunt.recipe";

export class HuntFaunaTheHuntGameStateChange extends GameStateChange {
    player: Player
    species: Species
    location: Location
    fauna: Card

    constructor(player: Player, species: Species, location: Location, fauna: Card) {
        super({
            id: 'com.evo.rules.hunt_fauna.the_hunt',
            values: {
                player: player.name,
                species: species.name,
                location: location.name,
                fauna: fauna.data.name
            }
        });

        this.player = player;
        this.species = species;
        this.location = location;
        this.fauna = fauna;
    }

    produceRecipe = (gameState: Game) => huntFaunaTheHuntRecipe(gameState, {player: this.player, species: this.species, location: this.location, fauna: this.fauna})
}
