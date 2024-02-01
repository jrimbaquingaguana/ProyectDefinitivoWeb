// Modal.js
import React from 'react';
import './Modal.css'; // Asegúrate de tener estilos para el modal

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="Overlay">
      <div className="Modal">
        {children}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
