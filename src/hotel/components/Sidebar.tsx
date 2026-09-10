import React from 'react'
import { BookingDatesPicker } from './BookingDatesPicker'
import { FetchAvailableRooms } from './HotelDetailPage'

type SidebarProps = {
  fetchAvailableRooms :FetchAvailableRooms
}
export default function Sidebar({fetchAvailableRooms}: SidebarProps ) {

  return (
    <div className = 'flex-1 border-amber-600 border-1 '>
        <p>Sidebar</p>
        <BookingDatesPicker fetchAvailableRooms={fetchAvailableRooms}/>
    </div>
  )
}
