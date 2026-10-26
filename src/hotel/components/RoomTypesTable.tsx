import React, { useState } from 'react'
import { RoomType, RoomTypeWithAvailableRooms } from '../hotel.types'
import RoomTypeRow from './RoomTypeRow'
import {  UpdateRoomTypesSelections } from './HotelDetailPage';
import { RoomTypeSelections } from '../context/RoomTypeSelectionsContext';

type RoomTypesTableProps = { 
    roomTypes: RoomType[] | RoomTypeWithAvailableRooms[];
    loadingAvailableRoomTypes: boolean;
    roomTypeSelections: RoomTypeSelections | null ;
    updateRoomTypeSelections : UpdateRoomTypesSelections;
}

export default function RoomTypesTable({roomTypes, updateRoomTypeSelections, roomTypeSelections, loadingAvailableRoomTypes}: RoomTypesTableProps) {
  const [showSelectionWarning, setShowSelectionWarning] =useState(false);

  return (
    <div className='flex-[2]'>
        {/* warning labels */}
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
             roomTypeSelections = {roomTypeSelections}
             updateRoomTypeSelections={updateRoomTypeSelections}
             />)}
    </tbody>


    </table>
    </div>
  )
}
