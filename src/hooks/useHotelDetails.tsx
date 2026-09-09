import React, { useEffect, useState } from "react";

export default function useHotelDetails(hotelId: string) {
  const [hotel, setHotel] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchHotelDetails(hotelId: string) {
      try {
        const data = await fetch(`localhost:3001/api/hotels/${hotelId}`);
        const result = await data.json();
        setHotel(result);
      } catch (error) {
        console.log(error);
        setError(error as string);
        setLoading(false);
      }
    }
    
    setLoading(true);
    fetchHotelDetails(hotelId);
  }, [hotelId]);
  return { hotel, loading, error };
}
