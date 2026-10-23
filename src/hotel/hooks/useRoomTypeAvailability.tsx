import React, { useContext } from 'react'
import { RoomTypeAvailabilityContext } from '../RoomTypeAvailabilityContext'

export default function useRoomTypeAvailability() {
    const values = useContext(RoomTypeAvailabilityContext)
    if(values === undefined) throw new Error('roomTypeContext must be used within provider')
  return {...values}
}
