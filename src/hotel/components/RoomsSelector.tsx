import React, { useState } from 'react'
import { SelectedRoomTypes, UpdateRoomTypesSelected } from './HotelDetailPage';

type RoomsSelectorProps = { 
    availableRooms: number | undefined; 
    showSelectionWarning: ()=> void; 
    roomTypeId: number;
    updateRoomTypesSelected : UpdateRoomTypesSelected;
    selectedRoomTypes: SelectedRoomTypes | null ;
}

//dropdown to select number of rooms for a given roomType
export default function RoomsSelector({availableRooms, showSelectionWarning,roomTypeId, selectedRoomTypes, updateRoomTypesSelected}: RoomsSelectorProps) {

    if(!availableRooms) { 
        return <select onClick={showSelectionWarning}>
        </select>
    }
    if(availableRooms && selectedRoomTypes){ //selectedRoomTypes would be initialized in the parent to 0 per roomType when there is avaialbeRooms

      const numberArray = Array.from({ length: availableRooms +1 }, (_, i) => i ); // [1..10]
      
      return (
        <select
          defaultValue={selectedRoomTypes[roomTypeId]}
          onChange= {(e: React.ChangeEvent<HTMLSelectElement>) => {
           updateRoomTypesSelected({roomTypeId, count: Number(e.target.value)})}}
          >

      {  numberArray.map(no => 
        <option value={no} key={String(no)}>{no}</option>
      )}
        </select>
  )
}

    return null;
}
