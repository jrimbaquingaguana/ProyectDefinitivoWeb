// src/components/ListaCursos.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Curso from './Curso';

const ListaCursos = () => {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/cursos')
            .then(response => {
                setCursos(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <div className="lista-cursos">
            {cursos.map(curso => (
                <Curso key={curso.id} curso={curso} />
            ))}
        </div>
    );
};

export default ListaCursos;
