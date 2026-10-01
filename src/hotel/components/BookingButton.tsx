import React from 'react'

type BookingButtonProps = { 
  isEnabled: boolean
}
export default function BookingButton({ isEnabled }: BookingButtonProps) {
  return (
    <button className = 'border-1 border-amber-400 disabled:bg-gray-300 disabled:text-gray-500'
    disabled={!isEnabled}>BookingButton</button>
  )
}
