import React, { useContext } from 'react'
import { RoomTypeSelectionsContext } from '../context/RoomTypeSelectionsContext'

export default function useRoomTypeSelections() {
    const value = useContext(RoomTypeSelectionsContext);
    if(!value ) throw new Error('the hook must be used withing roomTypeSelection Provider scope');

  return {...value};
}
