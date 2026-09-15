import React, { useState } from 'react'
import { UpdateRoomTypesSelected } from './HotelDetailPage';

type RoomsSelectorProps = { 
    availableRooms: number | undefined; 
    showRoomsCannotBeSelected: ()=> void; 
    roomTypeId: number;
    updateRoomTypesSelected : UpdateRoomTypesSelected;
}

//dropdown to select number of rooms for a given roomType
export default function RoomsSelector({availableRooms, showRoomsCannotBeSelected, updateRoomTypesSelected}: RoomsSelectorProps) {

    if(!availableRooms) { 
        return <select onClick={showRoomsCannotBeSelected}>
        </select>
    }
    const numberArray = Array.from({ length: availableRooms +1 }, (_, i) => i ); // [1..10]

  return (
    <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
      updateRoomTypesSelected({roomTypeId, count: Number(e.target.value)})}}>
    
      {  numberArray.map(no => 
        <option value={no} key={no}>{no}</option>
      )}
        </select>
  )
}
