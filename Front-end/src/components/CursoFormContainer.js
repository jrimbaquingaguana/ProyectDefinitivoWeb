import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CursoForm from './CursoForm';
import Modal from './Modal';
import axios from 'axios';

const CursoFormContainer = ({ onCursoAdded }) => {
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();

  const handleFormSubmit = (formData) => {
    axios.post('http://localhost:3001/api/cursos', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(response.data);
      setShowForm(false); // Cerrar el formulario después de enviar
      onCursoAdded(); // Actualizar la lista de cursos
    })
    .catch(error => {
      console.error('Error al enviar el formulario: ', error);
    });
  };

  return (
    <>
      {location.pathname === '/home' && (
        <button className="boton-agregar" onClick={() => setShowForm(true)}>Agregar Nuevo Curso</button>
      )}
      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <CursoForm onSubmit={handleFormSubmit} />
      </Modal>
    </>
  );
};

export default CursoFormContainer;
