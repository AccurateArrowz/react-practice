import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RoomTypesTable from './RoomTypesTable';
import type { Hotel, RoomTypeWithAvailableRooms, RoomTypesWithAvailableRoomsArray } from '../hotel.types';
import Sidebar from './Sidebar';
import useFetch from '../../hooks/useFetch';

export type FetchAvailableRooms = ({checkInDate, checkOutDate}: {checkInDate: string, checkOutDate: string})=> void;

export default function HotelDetail() {
  const {id: hotelId} = useParams();
  const {loading, error, data: hotel, fetchData:fetchHotel} = useFetch<Hotel>({url: `http://localhost:3000/api/hotels/${hotelId}`, 
    shouldLazyFetch: false
  });
   const { data: roomTypesWithAvailableRoomsArray , error: fetchRoomError, fetchData:fetchRooms} = useFetch<RoomTypesWithAvailableRoomsArray>({url: `http://localhost:3000/api/hotels/${hotelId}/availability`, 
    shouldLazyFetch: true
  });

  
  const fetchAvailableRooms: FetchAvailableRooms = useCallback(async ({checkInDate, checkOutDate} )=> { 
     const params = new URLSearchParams({
      checkInDate,
      checkOutDate, 
      });
      await fetchRooms(params);
      console.log('fetch Available Rooms resolved')
      console.log(rooms); 
  }, []);
  
  return (
    <div>
      <button onClick= {()=>fetchHotel()}>Fetch DAte</button>
      {hotel && 
      <>
      <h2>{hotel.name || 'hotel not named'}</h2>
      <div className="flex gap-3 border-amber-200 border-1">
      <RoomTypesTable roomTypes={roomTypesWithAvailableRoomsArray ?? hotel.roomTypes}></RoomTypesTable>
      <Sidebar fetchAvailableRooms={fetchAvailableRooms}></Sidebar>
      </div>
      </>
      }
    </div>
  )
}
