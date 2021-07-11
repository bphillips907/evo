import { Game } from "../../game";
import { LocalizableString } from "../../localizable_string"

export abstract class GameStateChange {
    description: LocalizableString
    // ruleApplied: LocalizableString

    constructor(
        description: LocalizableString,
        // rule: LocalizableString
    ) {
        this.description = description
        // this.ruleApplied = rule
    }

    abstract produceRecipe(state: Game): Game;
}