import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Curso = ({ curso }) => {
    const { id, nombre, descripcion, imagen } = curso;
    const imageUrl = imagen ? `http://localhost:3001/${imagen}` : 'default-image.jpg';

    return (
        <>
            
            <Link to={`/curso/${id}`}>
                <div className="curso">
                
                    <img src={imageUrl} alt={nombre} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                    <h3>{nombre}</h3>
                    <p>{descripcion}</p>
                </div>
            </Link>
        </>
    );
};

export default Curso;
