import { Location } from "../../models/game_components/location"
import { isValidLocationData, LocationData } from "../../types/game/component_data/location_data"
import { Trait } from "../../types/game/trait"

export class LocationFactory {
    locationData: Partial<LocationData>

    constructor(locationData: Partial<LocationData> = {}) {
        this.locationData = {
            traits: [],
            ...locationData
        }
    }

    build = (): Location => {
        if (!isValidLocationData(this.locationData)) {
            throw new Error(`Location data is incomplete: ${this.locationData}`)
        }

        return new Location(this.locationData)
    }

    lake = (): LocationFactory => {
        this.locationData = {
            name: "Lake",
            traits: [Trait.SIZE]
        }
        return this
    }

    mountain = (): LocationFactory => {
        this.locationData = {
            name: "Mountain",
            traits: [Trait.STRENGTH]
        }
        return this
    }

    field = (): LocationFactory => {
        this.locationData = {
            name: "Field",
            traits: [Trait.SPEED]
        }
        return this
    }

    swamp = (): LocationFactory => {
        this.locationData = {
            name: "Swamp",
            traits: [Trait.TOUGHNESS]
        }
        return this
    }

    desert = (): LocationFactory => {
        this.locationData = {
            name: "Desert",
            traits: [Trait.ENDURANCE]
        }
        return this
    }

    forest = (): LocationFactory => {
        this.locationData = {
            name: "Forest",
            traits: [Trait.AGILITY]
        }
        return this
    }
}