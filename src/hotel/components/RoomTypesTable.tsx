import React, { useState } from 'react'
import { RoomType, RoomTypesWithAvailableRoomsArray } from '../hotel.types'
import RoomTypeRow from './RoomTypeRow'

type RoomTypesTableProps = { 
    roomTypes: RoomType[] | RoomTypesWithAvailableRoomsArray;
}

export default function RoomTypesTable({roomTypes}: RoomTypesTableProps) {
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
        <RoomTypeRow roomType={roomType} showRoomsCannotBeSelected = {() => setShowRoomsCannotBeSelected(true)} />)}
    </tbody>


    </table>
    </div>
  )
}
