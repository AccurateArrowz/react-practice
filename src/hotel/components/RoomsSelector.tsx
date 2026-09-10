import React, { useState } from 'react'

type RoomsSelectorProps = { 
    availableRooms: number | undefined; 
    showRoomsCannotBeSelected: ()=> void
}

export default function RoomsSelector({availableRooms, showRoomsCannotBeSelected}: RoomsSelectorProps) {
    const [selectedRooms,setSelectedRooms ] = useState<number>(); //stores the number of rooms
    if(!availableRooms) { 
        return <select onClick={showRoomsCannotBeSelected}>
        </select>
    }
    const numberArray = Array.from({ length: availableRooms +1 }, (_, i) => i ); // [1..10]

  return (
    <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedRooms(Number(e.target.value))}>
      {  numberArray.map(no => 
        <option value={no} key={no}>{no}</option>
      )}
        </select>
  )
}
