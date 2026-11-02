import React, { useContext } from 'react'
import { RoomSelectionsContext } from '../context/RoomSelectionsContext'

type UpdateRoomSelections = ({roomTypeId, count}: {roomTypeId: string, count: number}) => void;

export default function useRoomSelections() {
    const value = useContext(RoomSelectionsContext);
    if(!value ) throw new Error('the hook must be used withing roomTypeSelection Provider scope');
    const {roomSelections, setRoomSelections} = value;
    
    const updateRoomSelections: UpdateRoomSelections= ({roomTypeId, count}) => {
      if(roomSelections){
        setRoomSelections(roomSelections.map(roomType=> (
        roomType.roomTypeId === roomTypeId ? {...roomType, count}: roomType))
        )
      }
    }

  return {roomSelections, setRoomSelections, updateRoomSelections}; 
}
