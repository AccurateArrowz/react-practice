import { createContext, useState } from "react";

export type RoomSelections = Array<{
  roomTypeId: string,
  count: number,
}>;

type RoomTypeSelectionsContextValue = {
  roomSelections: RoomSelections | null,
  setRoomSelections: React.Dispatch<React.SetStateAction<RoomSelections | null>>,
};

export const RoomSelectionsContext = createContext<RoomTypeSelectionsContextValue | null>(null);

export const RoomSelectionsProvider = ({ children }: React.PropsWithChildren) => {
    const [roomSelections, setRoomSelections] = useState<RoomSelections | null>(null);
    
    return <RoomSelectionsContext.Provider value={{roomSelections, setRoomSelections}}>
        {children}
    </RoomSelectionsContext.Provider>
};