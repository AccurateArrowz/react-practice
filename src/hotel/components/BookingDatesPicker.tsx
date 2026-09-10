import { useEffect, useState } from "react";
import type { FetchAvailableRooms } from "./HotelDetailPage";

type BookingDatesPickerProps = {
  fetchAvailableRooms: FetchAvailableRooms;
};

export function BookingDatesPicker({ fetchAvailableRooms }: BookingDatesPickerProps) {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (checkInDate && checkOutDate && checkInDate < checkOutDate) {
      fetchAvailableRooms({ checkInDate, checkOutDate });
    }
  }, [checkInDate, checkOutDate, fetchAvailableRooms]);

  return (
    <fieldset className="flex gap-4">
      <label htmlFor="check-in" className="flex flex-col">
        Check-in
        <input
          id="check-in"
          type="date"
          value={checkInDate}
          min={today}
          onChange={(e) => {
            const value = e.target.value;
            setCheckInDate(value);
            if (checkOutDate && checkOutDate <= value) setCheckOutDate("");
          }}
        />
      </label>
      <label htmlFor="check-out" className="flex flex-col">
        Check-out
        <input
          id="check-out"
          type="date"
          value={checkOutDate}
          min={checkInDate || today}
          disabled={!checkInDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </label>
    </fieldset>
  );
}