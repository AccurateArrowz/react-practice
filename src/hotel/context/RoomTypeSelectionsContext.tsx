import { createContext, useState } from "react";

export type RoomTypeSelections = Array<{
  roomTypeId: string,
  count: number,
}>;

type RoomTypeSelectionsContextValue = {
  roomTypeSelections: RoomTypeSelections | null,
  setRoomTypeSelections: React.Dispatch<React.SetStateAction<RoomTypeSelections | null>>,
};

export const RoomTypeSelectionsContext = createContext<RoomTypeSelectionsContextValue | null>(null);

export const RoomTypeSelectionsProvider = ({ children }: React.PropsWithChildren) => {
    const [roomTypeSelections, setRoomTypeSelections] = useState<RoomTypeSelections | null>(null);
    
    return <RoomTypeSelectionsContext.Provider value={{roomTypeSelections, setRoomTypeSelections}}>
        {children}
    </RoomTypeSelectionsContext.Provider>
};