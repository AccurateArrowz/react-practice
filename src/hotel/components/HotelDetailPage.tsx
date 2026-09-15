import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RoomTypesTable from './RoomTypesTable';
import type { Hotel, RoomTypeWithAvailableRooms } from '../hotel.types';
import Sidebar from './Sidebar';
import useFetch from '../../hooks/useFetch';

export type FetchAvailableRooms = ({checkInDate, checkOutDate}: {checkInDate: string, checkOutDate: string})=> void;
  
export type RoomTypesSelected = { 
  [roomTypeId: number]: number | null,
}
export type UpdateRoomTypesSelected = ({roomTypeId, count}: {roomTypeId: number, count: number})=> void;

export default function HotelDetail() {
  const {id: hotelId} = useParams();
  const {loading, error, data: hotel, fetchData:fetchHotel} = useFetch<Hotel>({url: `http://localhost:3000/api/hotels/${hotelId}`, 
    shouldLazyFetch: false
  });
   const { data: roomTypesWithAvailableRooms , error: fetchRoomError, fetchData:fetchRooms} = useFetch<RoomTypeWithAvailableRooms[]>({url: `http://localhost:3000/api/hotels/${hotelId}/availability`, 
    shouldLazyFetch: true
  }); //roomTypesWithAvailableRooms would be set by fetchAvailableRooms function once the checkin and checkout dates have been picked

  const [roomTypesSelected, setRoomsSelected ] = useState<RoomTypesSelected>()

  const updateRoomTypesSelected: UpdateRoomTypesSelected = ({roomTypeId, count})=> { 
    setRoomsSelected({...roomTypesSelected, 
      [roomTypeId]: count
    })
  }

  const fetchAvailableRooms: FetchAvailableRooms = useCallback(async ({checkInDate, checkOutDate} )=> { 
     const params = new URLSearchParams({
      checkInDate,
      checkOutDate, 
      });
      await fetchRooms(params);
      console.log('fetch Available Rooms resolved')
      console.log('roomTypesWithAvailableRooms'); 
      console.log(roomTypesWithAvailableRooms);
  }, []);

  //I am using this useEffects so that the RoomsSelector can show empty dropdown when the checkin dates aere not selected, 
  useEffect(()=> { //fills selectedRooms with all roomTypes and values as null
    if(hotel){
      const initialSelecteRooms: Record<number, number | null>  = { };
      for (let roomType of hotel.roomTypes){
        initialSelecteRooms[roomType.id] = null
      }
      setRoomsSelected(initialSelecteRooms);
      console.log(initialSelecteRooms)
    }

   }, [hotel]);


  useEffect(()=> { //fills selectedRooms with all roomTypes and values as 0 
    if(roomTypesWithAvailableRooms){
      const initialSelecteRooms: Record<number, number>  = { };
      for (let roomType of roomTypesWithAvailableRooms){
        initialSelecteRooms[roomType.id] = 0
      }
      setRoomsSelected(initialSelecteRooms)
    }
   }, [roomTypesWithAvailableRooms])
  console.log('Hotel Detail Page renderd +1 ')

   if(loading) return <p>Loading Hotel Detail</p>
   if(error)  return <p>Error fetching Hotel Detail {error}</p>

  return (
    <div>
      {hotel && 
      <>
      <h2>{hotel.name }</h2>
      <div className="flex gap-3 border-amber-200 border-1">

      <RoomTypesTable roomTypes={roomTypesWithAvailableRooms ?? hotel.roomTypes}
       updateRoomTypesSelected= {updateRoomTypesSelected}
      ></RoomTypesTable>
      <Sidebar fetchAvailableRooms={fetchAvailableRooms}></Sidebar>
      </div>
      </>
      }
    </div>
  )
}
