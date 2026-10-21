import React from 'react'
import { RoomType, RoomTypeWithAvailableRooms } from '../hotel.types'
import RoomsSelector from './RoomsSelector';
import { RoomTypeSelections, UpdateRoomTypesSelections } from './HotelDetailPage';

type RoomTypeRowProps = { 
  roomType: RoomType | RoomTypeWithAvailableRooms; 
  showSelectionWarning: () => void;
  updateRoomTypeSelections : UpdateRoomTypesSelections;
  roomTypeSelections: RoomTypeSelections | null ;
}

export default function RoomTypeRow({roomType, showSelectionWarning, roomTypeSelections, updateRoomTypeSelections}: RoomTypeRowProps) {
   const guests = `${roomType.adults } adults ${roomType.children } children`
  return (
    <tr>
      {/* should show 3 cols data : name, guest and room */}
    <td>{roomType.name}</td>
    <td>{guests}</td>
    <td>
      <RoomsSelector 
      roomTypeId={roomType.roomTypeId}
      availableRooms = {roomType.availableRooms ?? undefined } //intentionally passing undefined to show empty dropdown when user has not selected checkin dates and available rooms is not selected 
      showSelectionWarning={showSelectionWarning}
      roomTypeSelections = {roomTypeSelections}
      updateRoomTypeSelections={updateRoomTypeSelections}
      />
    </td>
    </tr>
  )
} 
