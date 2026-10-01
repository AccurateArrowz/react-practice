import React from 'react'
import Modal from '../../shared/components/Modal'
import LoginForm from '../../LoginForm'
import SignupForm from '../../SignupForm'
import { AuthMode } from '../../shared/components/Nav'

type AuthModal2Props = {
    authMode: AuthMode,
    onClose: ()=> void;
    onSwitchToSignup: ()=> void;
    onSwitchToLogin: ()=> void;
}
export default function AuthModal2({authMode, onClose, onSwitchToLogin, onSwitchToSignup}: AuthModal2Props) {
    
    if(authMode === 'login') {
    return <Modal isOpen={true} closeModal={onClose}>
        <LoginForm onSwitchToSignup={onSwitchToSignup}></LoginForm>
    </Modal>
}
    else if(authMode === 'signup')  {
         return <Modal isOpen={true} closeModal={onClose}>
            <SignupForm onSwitchToLogin={onSwitchToLogin}></SignupForm>
    </Modal>
    }
  
}
