// import { getWorldCharacterById } from "../world-character/queries/get-world-character-by-id";
// import { Location, LocationId } from "./types";

// Self created types 
type Building = { 
    id: string,
    type: 'smithy' | 'furnace' | 'keep'
}
    
type LocationId = string;

export type Location = {
  id: LocationId;
  name: string;
  characters: string[];
  buildings?: Building[];
};

export const LOCATIONS: Record<LocationId, Location> = {
  "city-of-camelot": {
    id: "city-of-camelot",
    name: "City of Camelot",
    characters: [
    //   getWorldCharacterById("king-arthur"),
    //   getWorldCharacterById("bron-the-misfortunate"),
    ],
    buildings: [
      {
        id: "city-of-camelot-keep",
        type: "keep",
      },
      {
        id: "city-of-camelot-smithy",
        type: "smithy",
      },
      {
        id: "city-of-camelot-furnace",
        type: "furnace",
      },
    ],
  },
};

const getLocationsForSmithyScreen = ( )=> {
 const requiredBuildingTypes = ['smithy', 'furnace'];
 let displayLocations = [];
 let locationNames = [];
    for (const [locationId, location ] of Object.entries(LOCATIONS)  ){ 
        locationNames.push(location.name)
        if(location.buildings) {
            for (const building of location.buildings){
                if(requiredBuildingTypes.includes(building.type)  ){
                    displayLocations.push(location) ;//passed by refrences
                    break;
                }
                break;
            }

    }

// const displayLocation = LOCATION.filter (location ⇒ location.type === ‘building’ &&
}
} 
