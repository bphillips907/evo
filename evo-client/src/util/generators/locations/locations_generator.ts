import { Location } from "../../../models/location";
import { rawLocations } from "./data/location_data";

export function generateLocations(): Location[] {
    const locations: Location[] = []
    rawLocations.forEach(locationData => {
        locations.push(new Location(locationData.name, locationData.traits))
    })
    return locations
}