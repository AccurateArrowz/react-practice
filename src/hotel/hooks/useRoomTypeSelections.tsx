import React, { useContext } from 'react'
import { RoomTypeSelectionsContext } from '../context/RoomTypeSelectionsContext'

type UpdateRoomTypeSelections = ({roomTypeId, count}: {roomTypeId: string, count: number}) => void;

export default function useRoomTypeSelections() {
    const value = useContext(RoomTypeSelectionsContext);
    if(!value ) throw new Error('the hook must be used withing roomTypeSelection Provider scope');
    const {roomTypeSelections, setRoomTypeSelections} = value;
    
    const updateRoomTypeSelections: UpdateRoomTypeSelections= ({roomTypeId, count}) => {
      if(roomTypeSelections){
        setRoomTypeSelections(roomTypeSelections.map(roomType=> (
        roomType.roomTypeId === roomTypeId ? {...roomType, count}: roomType))
        )
      }
    }

  return {roomTypeSelections, setRoomTypeSelections, updateRoomTypeSelections};
}
