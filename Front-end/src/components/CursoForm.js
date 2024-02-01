import React, { useState } from 'react';
import './CursoForm.css'; // Asegúrate de crear este archivo

const CursoForm = ({ onSubmit }) => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre || !descripcion || !imagen) {
            alert('Todos los campos son obligatorios');
            return;
        }
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('imagen', imagen);

        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="curso-form">
            <h2 className="form-title">Agregar Curso</h2>
            <div className="form-group">
                <label>Nombre del Curso:</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Descripción:</label>
                <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Imagen:</label>
                <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
            </div>
            <button type="submit" className="submit-button">Agregar</button>
        </form>
    );
};

export default CursoForm;
