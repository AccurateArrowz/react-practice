import React from 'react'
import { RoomType, RoomTypeWithAvailableRooms } from '../hotel.types'
import RoomsSelector from './RoomsSelector';
import { UpdateRoomTypesSelected } from './HotelDetailPage';

type RoomTypeRowProps = { 
  roomType: RoomType | RoomTypeWithAvailableRooms; 
  showRoomsCannotBeSelected: () => void;
  updateRoomTypesSelected : UpdateRoomTypesSelected;
}

export default function RoomTypeRow({roomType, showRoomsCannotBeSelected, updateRoomTypesSelected}: RoomTypeRowProps) {
   const guests = `${roomType.adults } adults ${roomType.children } children`
  return (
    <tr>
      {/* should show 3 cols data : name, guest and room */}
    <td>{roomType.name}</td>
    <td>{guests}</td>
    <RoomsSelector 
    roomTypeId={roomType.id}
    availableRooms = {roomType.availableRooms  } 
    showRoomsCannotBeSelected={showRoomsCannotBeSelected}
    updateRoomTypesSelected={updateRoomTypesSelected}

    />
    </tr>
  )
} 
