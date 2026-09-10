import React from 'react'
import { RoomType } from '../hotel.types'
import RoomsSelector from './RoomsSelector';

type RoomTypeRowProps = { 
  roomType: RoomType; 
  showRoomsCannotBeSelected: () => void;
}

export default function RoomTypeRow({roomType, showRoomsCannotBeSelected}: RoomTypeRowProps) {
   const guests = `${roomType.adults } adults ${roomType.children } children`
  return (
    <tr>
      {/* should show 3 cols data : name, guest and room */}
    <td>{roomType.name}</td>
    <td>{guests}</td>
    <RoomsSelector availableRooms = {roomType.availableRooms } showRoomsCannotBeSelected={showRoomsCannotBeSelected}></RoomsSelector>
    </tr>
  )
}
