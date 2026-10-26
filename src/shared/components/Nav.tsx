import React, { useState } from 'react'
import AuthModal from '../../auth/components/AuthModal';
import type { AuthMode } from '../../auth/components/AuthModal';


export default function Nav() {
    const [authMode, setAuthMode] = useState<AuthMode | null >(null);

  return (
    <div  className='flex border-1 border-amber-400 justify-between'>
        <span>Logo</span>
      
        <div className='flex border-1 border-amber-200 gap-2'>
        <button onClick ={()=> {
            setAuthMode('login')
        }}> Login</button>
        
        <button onClick ={()=> {
            setAuthMode('signup')
        }}> Signup</button>
        
       {authMode && <AuthModal 
       authMode = {authMode}
       setAuthMode = {setAuthMode}
        onClose={()=> setAuthMode(null)}
       ></AuthModal>}
      
        </div>
    </div>
  )
}
