import React, { useEffect, useState } from 'react'
import { BookingDatesPicker } from './BookingDatesPicker'
import { FetchAvailableRooms, SelectedRoomTypes } from './HotelDetailPage'
import BookingButton from './BookingButton';

type SidebarProps = {
  fetchAvailableRooms :FetchAvailableRooms; 
   selectedRoomTypes: SelectedRoomTypes | null ;
}
export default function Sidebar({fetchAvailableRooms, selectedRoomTypes}: SidebarProps ) {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const canBook = ( ) => { 
    if (!checkInDate || !checkOutDate) {
      return false;
    }
    //return false if 0 room is selected 
    let totalRooms = 0 ;
    if(selectedRoomTypes){
    for (const [roomTypeId, rooms] of Object.entries(selectedRoomTypes)){
      totalRooms += rooms
    }
    }
    return totalRooms ===0 ? false: true
  };

  useEffect(()=> {
    console.log('from sidebar, selecteRoomTypes ', selectedRoomTypes);
  }, [selectedRoomTypes]);

  return (
    <div className = 'flex-1 border-amber-600 border-1 '>
        <p>Sidebar</p>
        <BookingDatesPicker fetchAvailableRooms={fetchAvailableRooms} checkInDate={checkInDate} checkOutDate={checkOutDate} setCheckInDate={setCheckInDate} setCheckOutDate={setCheckOutDate} />
        {selectedRoomTypes && <div>
          <p className='mt-4'>Rooms Selected</p>
          {Object.entries(selectedRoomTypes).map(([roomTypeId, count])=> (
            <div>
            <span>{`roomTypeId ${roomTypeId}`}: </span>
            <span>{count}</span>
            </div>
          ))}
        </div>
        }
        <BookingButton isEnabled={canBook()} />
    </div>
  )
}
