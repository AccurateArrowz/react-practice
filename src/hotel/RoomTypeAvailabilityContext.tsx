import { createContext, useContext, useState } from "react";
import { RoomTypeWithAvailableRooms } from "./hotel.types";

type RoomTypeAvailabilityContextValue = { 
    roomTypeWithAvailableRooms: RoomTypeWithAvailableRooms[] | null,
    setRoomTypeWithAvailableRooms: (roomTypes: RoomTypeWithAvailableRooms[] | null)=> void,
}

export const RoomTypeAvailabilityContext = createContext<RoomTypeAvailabilityContextValue | null>(null);

export const RoomTypeAvailabilityProvider = ({children}: React.PropsWithChildren)=> { 
    const [roomTypeWithAvailableRooms, setRoomTypeWithAvailableRooms] = useState<RoomTypeWithAvailableRooms[]| null>(null);

    return (
        <RoomTypeAvailabilityContext.Provider value={{roomTypeWithAvailableRooms, setRoomTypeWithAvailableRooms}}> 
    {children}
    </RoomTypeAvailabilityContext.Provider>)
}