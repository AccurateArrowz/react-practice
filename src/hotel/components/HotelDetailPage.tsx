import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RoomTypesTable from './RoomTypesTable';
import type { Hotel, RoomTypeWithAvailableRooms } from '../hotel.types';
import Sidebar from './Sidebar';
import useFetch from '../../hooks/useFetch';
import useRoomTypeAvailability from '../hooks/useRoomTypeAvailability';

export type FetchAvailableRooms = ({checkInDate, checkOutDate}: {checkInDate: string, checkOutDate: string})=> void;
  
// export type RoomTypeSelections = { 
//   [roomTypeId: string]: number ,
// } ;
  
export type RoomTypeSelections = Array<{
  roomTypeId: string,
  count: number,
}>;

export type UpdateRoomTypesSelections = ({roomTypeId, count}: {roomTypeId: string, count: number})=> void;

export default function HotelDetail() {
  const {id: hotelId} = useParams();
  const {loading, error, data: hotel, fetchData:fetchHotel} = useFetch<Hotel>({url: `http://localhost:3000/api/hotels/${hotelId}`, 
    shouldLazyFetch: false
  });
   const { loading: loadingAvailableRoomTypes, data: availableRoomTypes , error: fetchRoomError, fetchData:fetchRooms} = useFetch<RoomTypeWithAvailableRooms[]>({url: `http://localhost:3000/api/hotels/${hotelId}/availability`, 
    shouldLazyFetch: true
  }); //availableRoomTypes would be set by fetchAvailableRooms function once the checkin and checkout dates have been picked
  const {setRoomTypeWithAvailableRooms} = useRoomTypeAvailability();
  const [roomTypeSelections, setRoomTypeSelections ] = useState<RoomTypeSelections | null>(null)

  const updateRoomTypeSelections: UpdateRoomTypesSelections = ({roomTypeId, count})=> { 
    if(roomTypeSelections){
      setRoomTypeSelections(roomTypeSelections.map(rtSelection=> rtSelection.roomTypeId === roomTypeId? {...rtSelection, count}: rtSelection ))
    }
  }

  const fetchAvailableRooms: FetchAvailableRooms = useCallback(async ({checkInDate, checkOutDate} )=> { 
     const params = new URLSearchParams({
      checkInDate,
      checkOutDate, 
      });
      await fetchRooms(params);
      console.log('fetch Available Rooms resolved')
  }, []);

  useEffect(()=> { //fills selectedRooms as 0 for all roomTypes
    if(availableRoomTypes){
      console.log('from the effect, once roomTypeWithAvailableRoom changes');
      setRoomTypeWithAvailableRooms(availableRoomTypes);
      const initialRoomTypeSelections = availableRoomTypes.map(({ roomTypeId }) => ({
        roomTypeId: String(roomTypeId),
        count: 0,
      }));
      setRoomTypeSelections(initialRoomTypeSelections);
    }
   }, [availableRoomTypes])

   if(loading) return <p>Loading Hotel Detail</p>
   if(error)  return <p>Error fetching Hotel Detail {error}</p>

  return (
    <div>
      {hotel && 
      <>
      <h2>{hotel.name }</h2>
      <div className="flex gap-3 border-amber-200 border-1">

      <RoomTypesTable 
      roomTypes={availableRoomTypes ?? hotel.roomTypes}
      loadingAvailableRoomTypes = {loadingAvailableRoomTypes}
      roomTypeSelections = {roomTypeSelections}
       updateRoomTypeSelections= {updateRoomTypeSelections}
      ></RoomTypesTable>
      <Sidebar 
        fetchAvailableRooms={fetchAvailableRooms}
        roomTypeSelections={roomTypeSelections}>

        </Sidebar>
      </div>
      </>
      }
    </div>
    
  )
}
