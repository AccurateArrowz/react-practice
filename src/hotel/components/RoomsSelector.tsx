import React from 'react'
import useRoomSelections from '../hooks/useRoomSelections';


type RoomsSelectorProps = { 
    availableRooms: number | undefined; 
    roomTypeId: string;
}

//dropdown to select number of rooms for a given roomType
export default function RoomsSelector({availableRooms, roomTypeId}: RoomsSelectorProps) {
   const {roomSelections, updateRoomSelections }  = useRoomSelections();

    if (availableRooms === undefined) {
        return (
          <select
            disabled
            aria-label={`Select dates to check availability for room type ${roomTypeId}`}
            value=""
            className="opacity-50 cursor-not-allowed bg-gray-100 border border-gray-300 rounded px-2 py-1 text-sm text-gray-500"
          >
            <option value="" disabled>Select dates first</option>
          </select>
        );
    }
    if (availableRooms === 0) {
      return <span role="status">No rooms</span>;
    }
    if (roomSelections) {

      const numberArray = Array.from({ length: availableRooms + 1 }, (_, i) => i);
      const currentRoomType = roomSelections.find(rt=> rt.roomTypeId === roomTypeId);
      const count = currentRoomType?.count ?? 0;

      return (
        <select
          aria-label={`Rooms for room type ${roomTypeId}`}
          value={count}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            updateRoomSelections({ roomTypeId, count: Number(e.target.value) });
          }}
        >
          {numberArray.map((number) => (
            <option value={number} key={number}>{number}</option>
          ))}
        </select>
      );
    }

    return <span role="status">Availability is loading</span>;
}
