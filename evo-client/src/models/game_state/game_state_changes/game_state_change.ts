import { Rule } from "../../rules/rule"

export abstract class GameStateChange {
    description: string
    ruleApplied: Rule

    constructor(
        description: string,
        rule: Rule
    ) {
        this.description = description
        this.ruleApplied = rule
    }
}