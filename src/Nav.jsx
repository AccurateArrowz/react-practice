import React from 'react'
import Modal from './Modal'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm';
    
export default function Nav() {
  const [authMode, setAuthMode] = React.useState(null); // null | 'login' | 'signup'

  function toggleAuthMode() {
    setAuthMode(authMode === 'login' ? 'signup' : 'login')
  }

  return (
    <nav className='flex justify-between items-center p-4'>
      <span>Hotel booker</span>
      <div>
        <button onClick={() => setAuthMode('login')}>Log In</button>
        <button onClick={() => setAuthMode('signup')}>Sign Up</button>
      </div>
      <Modal showModal={authMode !== null} onClose={() => setAuthMode(null)}>
        {authMode === 'login'
          ? <LoginForm onSwitchToSignup={toggleAuthMode} />
          : <SignupForm onSwitchToLogin={toggleAuthMode} />
        }
      </Modal>
    </nav>
  )
}