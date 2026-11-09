import React, { useContext } from 'react'
import { RoomSelectionsContext } from '../context/RoomSelectionsContext'

type UpdateRoomSelections = ({roomTypeId, count}: {roomTypeId: string, count: number}) => void;
 


export default function useRoomSelections() {
    const value = useContext(RoomSelectionsContext);
    if(!value) throw new Error('the hook must be used within RoomSelections Provider scope');
    const {roomSelections, setRoomSelections} = value;
    
   const updateRoomSelections: UpdateRoomSelections = ({ roomTypeId, count }) => {
  setRoomSelections((prev = []) => {
    // Optional: remove entry when count drops to 0 or below
    if (count <= 0) {
      return prev.filter((item) => item.roomTypeId !== roomTypeId);
    }

    const exists = prev.some((item) => item.roomTypeId === roomTypeId);

    if (exists) {
      return prev.map((item) =>
        item.roomTypeId === roomTypeId ? { ...item, count } : item
      );
    }

    return [...prev, { roomTypeId, count }];
  });
};


  return {roomSelections, setRoomSelections, updateRoomSelections}; 
}
