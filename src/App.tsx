import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Rooms, RoomTypes, Dashboard } from './hotel-management';
import HotelManagementLayout from './hotel-management/HotelManagementLayout';
import RequireRole from './hotel-management/RequireRole';
import Home from './Home';
import HotelDetail from './hotel/components/HotelDetailPage';
import { RoomTypeAvailabilityProvider } from './hotel/RoomTypeAvailabilityContext';
import Rough from './shared/components/Rough.tsx';
// import {RoomTypes, Rooms}

const hotelManagementRouter = createBrowserRouter([
   {
    path: "/",

    element: <RoomTypeAvailabilityProvider>
      <Home></Home>
      </RoomTypeAvailabilityProvider>
      },
      {
    path: `/hotels/:id`,
    element: <HotelDetail/> },
  {
    path: "/hotel-management",
    element: <HotelManagementLayout />,
    children: [
      { index: true, element: <Dashboard/> },
      { path: "room-types", element: <RoomTypes /> },
      { path: "rooms", element: <Rooms /> },
      { path: "invite-staff", element: <RequireRole roles ={['owner', 'manager']}> <Rooms/> </RequireRole>},
      // { path: *, element: <Rooms /> },

    ],
  },
  {
    path: "/practice",
    element: <Rough />,
  }
]);

function App() {
  return (
    <RouterProvider router={hotelManagementRouter} />
  )
}

export default App

// App.jsx — route config




