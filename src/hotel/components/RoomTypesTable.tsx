import React from 'react'
import { RoomType, RoomTypeWithAvailableRooms } from '../hotel.types'
import RoomTypeRow from './RoomTypeRow'

type RoomTypesTableProps = { 
    roomTypes: RoomType[] | RoomTypeWithAvailableRooms[];
    loadingAvailableRoomTypes: boolean;
}

export default function RoomTypesTable({roomTypes, loadingAvailableRoomTypes}: RoomTypesTableProps) {
  const hasSelectedDates = roomTypes.length > 0 && 'availableRooms' in roomTypes[0] && roomTypes[0].availableRooms !== undefined;

  return (
    <div className='flex-[2]'>
      {/* Banner shows proactively when dates aren't selected yet */}
      {!hasSelectedDates && !loadingAvailableRoomTypes && (
        <p className='p-2 mb-2 bg-amber-100 text-amber-800 text-sm rounded'>
          Select check-in and check-out dates to view availability and pick rooms.
        </p>
      )}
      {loadingAvailableRoomTypes && (
        <p className='p-2 mb-2 bg-blue-100 text-blue-800 text-sm rounded'>
          Loading Available Rooms...
        </p>
      )}

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
        <RoomTypeRow 
          key={roomType.id} 
          roomType={roomType}
        />
    )}
    </tbody>


    </table>
    </div>
  )
}
