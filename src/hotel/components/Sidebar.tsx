import React, { useEffect, useState } from 'react'
import { BookingDatesPicker } from './BookingDatesPicker'
import { FetchAvailableRooms } from './HotelDetailPage'
import BookingButton from './BookingButton';
import { useParams } from 'react-router-dom';
import { RoomSelections } from '../context/RoomSelectionsContext';
import useRoomSelections from '../hooks/useRoomSelections';

type SidebarProps = {
  fetchAvailableRooms :FetchAvailableRooms; 
}
export default function Sidebar({fetchAvailableRooms}: SidebarProps ) {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const {id: hotelId} = useParams();
  const {roomSelections} = useRoomSelections();

  const canBook = ( ) => { 
    if (!checkInDate || !checkOutDate) {
      return false;
    }
    //return false if 0 room is selected 
    let totalRooms = 0 ;
    if(roomSelections){
    for (const { count } of roomSelections) {
      totalRooms += count;
    }
    }
    return totalRooms ===0 ? false: true
  };

  const handleBooking = ()=> { 
    if(canBook()){
      postBooking({ hotelId, checkInDate, checkOutDate,roomSelections}) // postBooking function not written
    }
  }

  useEffect(()=> {
    console.log('from sidebar, selecteRoomTypes ', roomSelections);
  }, [roomSelections]);

  return (
    <div className = 'flex-1 border-amber-600 border-1 '>
        <p>Sidebar</p>
        <BookingDatesPicker fetchAvailableRooms={fetchAvailableRooms} checkInDate={checkInDate} checkOutDate={checkOutDate} setCheckInDate={setCheckInDate} setCheckOutDate={setCheckOutDate} />
        {roomSelections && <div>
          <p className='mt-4'>Rooms Selected</p>
          {roomSelections.map(({ roomTypeId, count })=> (
            <div key={roomTypeId}>
            <span>{`roomTypeId ${roomTypeId}`}: </span>
            <span>{count}</span>
            </div>
          ))}
        </div>
        }
        <BookingButton isEnabled={canBook()} onBooking={handleBooking} />
    </div>
  )
}
