import React, { useState } from 'react'
import { RoomType, RoomTypeWithAvailableRooms } from '../hotel.types'
import RoomTypeRow from './RoomTypeRow'
import { UpdateRoomTypesSelected } from './HotelDetailPage';

type RoomTypesTableProps = { 
    roomTypes: RoomType[] | RoomTypeWithAvailableRooms[];
    updateRoomTypesSelected : UpdateRoomTypesSelected;
}

export default function RoomTypesTable({roomTypes, updateRoomTypesSelected}: RoomTypesTableProps) {
    const [showRoomsCannotBeSelected, setShowRoomsCannotBeSelected] =useState(false);

  return (
    <div className='flex-[2]'>
        {showRoomsCannotBeSelected && <p className='bg-red-300'>Select Checkin and checkout dates to pick the rooms</p>}
        <p>Room Types</p>
    <table>
        <thead>
            <tr>
        <th className='mr-4'>Name </th>
        <th className='mr-4'> Guest</th>
        <th> Rooms</th>
                </tr>
        </thead>
    <tbody >
    {roomTypes?.map(roomType => 
        <RoomTypeRow key = {roomType.id} 
        roomType={roomType}
             showRoomsCannotBeSelected = {() => setShowRoomsCannotBeSelected(true)} 
             updateRoomTypesSelected={updateRoomTypesSelected}
             />)}
    </tbody>


    </table>
    </div>
  )
}
