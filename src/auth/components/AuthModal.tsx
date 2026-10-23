import React from 'react'
import Modal from '../../shared/components/Modal'
import LoginForm from '../../LoginForm'
import SignupForm from '../../SignupForm'

export type AuthMode = 'login' | 'signup' 

type AuthModalProps = {
    authMode: AuthMode,
    onClose: ()=> void;
    setAuthMode: (newAuthMode: AuthMode)=> void;
}

export default function AuthModal({authMode, onClose, setAuthMode}: AuthModalProps) {
    const toggleAuthMode = ()=> authMode ==='login'? setAuthMode('signup') : setAuthMode('login');

    if(!authMode) return;

    else if(authMode === 'login') {
    return <Modal isOpen={true} onClose={onClose}>
        <LoginForm onSwitchToSignup={toggleAuthMode}></LoginForm>
    </Modal>
}
    else if(authMode === 'signup')  {
         return <Modal isOpen={true} onClose={onClose}>
            <SignupForm onSwitchToLogin={toggleAuthMode}></SignupForm>
    </Modal>
    }
  
}
