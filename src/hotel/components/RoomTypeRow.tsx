import React from 'react'
import { RoomType, RoomTypeWithAvailableRooms } from '../hotel.types'
import RoomsSelector from './RoomsSelector';


type RoomTypeRowProps = { 
  roomType: RoomType | RoomTypeWithAvailableRooms; 
}

export default function RoomTypeRow({roomType}: RoomTypeRowProps) {
   const guests = `${roomType.adults } adults ${roomType.children } children`
  return (
    <tr>
      {/* should show 3 cols data : name, guest and room */}
    <td>{roomType.name}</td>
    <td>{guests}</td>
    <td>
      <RoomsSelector 
      roomTypeId={(roomType as any).roomTypeId ?? String(roomType.id)}
      availableRooms = {('availableRooms' in roomType) ? roomType.availableRooms : undefined } //intentionally passing undefined to show empty dropdown when user has not selected checkin dates and available rooms is not selected 
      />
    </td>
    </tr>
  )
} 
