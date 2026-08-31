import React from 'react'
import './Modal.css'
export default function Modal({children, showModal, onClose}) {
  if(!showModal) return null;
  return (
       <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content auth-modal" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
  </div>
  )
}
