import React from 'react'
import useRoomTypeSelections from '../hooks/useRoomTypeSelections';


type RoomsSelectorProps = { 
    availableRooms: number | undefined; 
    showSelectionWarning: ()=> void; 
    roomTypeId: string;
}

//dropdown to select number of rooms for a given roomType
export default function RoomsSelector({availableRooms, showSelectionWarning,roomTypeId}: RoomsSelectorProps) {
   const {roomTypeSelections, updateRoomTypeSelections }  = useRoomTypeSelections();

    if (availableRooms === undefined) {
        return (
          <select
            aria-label={`Rooms for room type ${roomTypeId}`}
            value=""
            onClick={showSelectionWarning}
            onFocus={showSelectionWarning}
          >
            <option value="" disabled>Select dates first</option>
          </select>
        );
    }
    if (availableRooms === 0) {
      return <span role="status">No rooms available</span>;
    }
    if (roomTypeSelections) {

      const numberArray = Array.from({ length: availableRooms + 1 }, (_, i) => i);
      const currentRoomType = roomTypeSelections.find(rt=> rt.roomTypeId === roomTypeId);
      const count = currentRoomType?.count ?? 0;

      return (
        <select
          aria-label={`Rooms for room type ${roomTypeId}`}
          value={count}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            updateRoomTypeSelections({ roomTypeId, count: Number(e.target.value) });
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
