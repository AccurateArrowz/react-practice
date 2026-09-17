import React, { useState } from 'react'
import Modal from '../../shared/components/Modal';
import LoginForm from '../../LoginForm';
import SignupForm from '../../SignupForm';
import { initializeContext } from 'zod/v4/core';

type ModalState = 'loginModal' | 'signupModal' 
type AuthModalProps = {
    initialModalState: ModalState, //allowing initialState from the user, either Login and Signup 
    isModalOpen: boolean, 
    closeModal: ()=> void,
}
export default function AuthModal({isModalOpen, initialModalState, closeModal}: AuthModalProps) {
    const [currentModal, setCurrentModal] = useState<ModalState>( initialModalState );
    const toggleCurrentModal = ()=> {
        setCurrentModal(prevModal => prevModal=== 'loginModal'? 'signupModal' : 'loginModal')
    }

    if (currentModal ==='loginModal') {
        return <Modal isModalOpen={isModalOpen} closeModal={closeModal}><LoginForm onSwitchToSignup={toggleCurrentModal}/></Modal>
    }
        else{
        return <Modal isModalOpen={isModalOpen} closeModal={closeModal}><SignupForm onSwitchToLogin={toggleCurrentModal}/></Modal>
    }

}
