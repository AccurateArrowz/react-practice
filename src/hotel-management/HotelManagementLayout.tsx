import React from 'react'
import SideBar from './Sidebar' 
import { Outlet } from 'react-router-dom'

export default function HotelManagementLayout() {
  return (
    <div className='border-amber-300 flex gap-4'>
        <SideBar></SideBar>
        <Outlet></Outlet>
    </div>
  )
}
