import { LocationType } from "../location_type";
import { Trait } from "../trait";

export interface LocationData {
    type: LocationType
    name: string
    traits: Trait[]
}

// typeGuard
export function isValidLocationData(locationData: Partial<LocationData>): locationData is LocationData {
    let isValid = true
    const testLocationData = (locationData as LocationData)

    if (testLocationData.type === undefined) {
        isValid = false
    }
    if (testLocationData.name === undefined) {
        isValid = false
    }
    if (testLocationData.traits === undefined) {
        isValid = false
    }

    return isValid
}