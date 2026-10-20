import { createContext, useContext, useState } from "react";
import { AvailableRoomType } from "./hotel.types";

type AvailableRoomsContextValue = { 
    availableRooms: AvailableRoomType[] | null,
    setAvailableRooms: (availableRooms: AvailableRoomType[] | null)=> void,
}
const AvailableRoomsContext = createContext<AvailableRoomsContextValue | null>(null);

const AvailableRoomsProvider = ({children}: React.PropsWithChildren)=> { 
    const [availableRooms, setAvailableRooms] = useState<AvailableRoomType[]| null>(null);

    return (
        <AvailableRoomsContext.Provider value={{availableRooms, setAvailableRooms}}> 
    {children}
    </AvailableRoomsContext.Provider>)
}