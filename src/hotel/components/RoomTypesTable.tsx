import React, { useState } from 'react'
import { RoomType, RoomTypeWithAvailableRooms } from '../hotel.types'
import RoomTypeRow from './RoomTypeRow'
import { SelectedRoomTypes, UpdateRoomTypesSelected } from './HotelDetailPage';

type RoomTypesTableProps = { 
    roomTypes: RoomType[] | RoomTypeWithAvailableRooms[];
    loadingAvailableRoomTypes: boolean;
    selectedRoomTypes: SelectedRoomTypes | null ;
    updateRoomTypesSelected : UpdateRoomTypesSelected;
}

export default function RoomTypesTable({roomTypes, updateRoomTypesSelected, selectedRoomTypes, loadingAvailableRoomTypes}: RoomTypesTableProps) {
    const [showSelectionWarning, setShowSelectionWarning] =useState(false);

  return (
    <div className='flex-[2]'>
        {showSelectionWarning && !loadingAvailableRoomTypes && <p className='bg-red-300'>Select Checkin and checkout dates to pick the rooms</p>}
        {showSelectionWarning && loadingAvailableRoomTypes && <p className='bg-red-300'>Loading Available Rooms</p>}
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
        <RoomTypeRow key = {roomType.roomTypeId} 
        roomType={roomType}
             showSelectionWarning = {() => setShowSelectionWarning(true)} 
             selectedRoomTypes = {selectedRoomTypes}
             updateRoomTypesSelected={updateRoomTypesSelected}
             />)}
    </tbody>


    </table>
    </div>
  )
}
