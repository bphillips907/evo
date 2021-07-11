import { Location } from "../../models/location"
import { Trait } from "../../types/game/trait"

export class LocationFactory {
    name: string | undefined
    traits: Trait[]

    constructor() {
        this.traits = []
    }

    build = (): Location => {
        if (this.name === undefined) {
            throw new Error("Name is required")
        }

        return new Location(this.name, this.traits)
    }

    lake = (): LocationFactory => {
        this.name = "Lake"
        this.traits = [Trait.SIZE]
        return this
    }

    mountain = (): LocationFactory => {
        this.name = "Mountain"
        this.traits = [Trait.STRENGTH]
        return this
    }

    field = (): LocationFactory => {
        this.name = "Field"
        this.traits = [Trait.SPEED]
        return this
    }

    swamp = (): LocationFactory => {
        this.name = "Swamp"
        this.traits = [Trait.TOUGHNESS]
        return this
    }

    desert = (): LocationFactory => {
        this.name = "Desert"
        this.traits = [Trait.ENDURANCE]
        return this
    }

    forest = (): LocationFactory => {
        this.name = "Forest"
        this.traits = [Trait.AGILITY]
        return this
    }
}