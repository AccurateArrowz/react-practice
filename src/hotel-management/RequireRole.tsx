import React, { Children } from 'react'
import type { Roles } from './Roles';

type RequireRoleProps = {roles: Roles[], children: React.ReactNode} ;

export default function RequireRole({roles, children}: RequireRoleProps) {
    const role = 'receptionist';
    if (!roles.includes(role) ) return `${role} can't accesss this page`
  return (
    <>{children}</>
  )
}
