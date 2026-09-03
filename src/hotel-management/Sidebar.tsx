import React from 'react'
import { Link } from 'react-router-dom';
import type { Roles } from './Roles';

const sideBarItemsAndRoutes = {
    dashboard: '/hotel-management',
    roomtypes: '/hotel-management/room-types',
    rooms: '/hotel-management/rooms',
    'invite staff': '/invite-staff',
    'billing': 'hotel-management/billing'
} as const;

const getSideBarItemsAndRoute = (role: Roles)=> {
  if (role === 'owner') { return sideBarItemsAndRoutes}
  if(role === 'receptionist') { 
    const {'invite staff': inviteStaff, dashboard, ...rest} = sideBarItemsAndRoutes;
    return rest
  }
  if (role === 'manager'){
        const {dashboard, ...rest} = sideBarItemsAndRoutes;
      return rest 
  }
  else { 
    throw new Error(`${role} is an invalid role`)
  }
}

export default function SideBar() {
  const role = 'receptionist'; // real app would use useAuth hook
  const sideBarItemsAndRoutes = getSideBarItemsAndRoute(role);

  return (
    <ul className = 'flex flex-col gap-2 width-[1/3]'>
        { Object.entries(sideBarItemsAndRoutes).map(([key, route])=> { 
            return <Link to ={route} key={key}> {key} </Link>
        })}
        
    </ul>
  )
}
