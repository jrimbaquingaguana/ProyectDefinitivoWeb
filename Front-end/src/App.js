import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import CursoAdministrador  from './CursoAdministrador';
import Navbar from './components/Navbar';

import ListaCursos from './components/ListaCursos';
import CursoFormContainer from './components/CursoFormContainer';
import CursoDetalle from './components/CursoDetalle';
import './css/login.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div className="full-screen">
            <Login />
          </div>
        } />
        <Route path='/signup' element={<Signup />} />
        <Route path='/CursoA' element={<CursoAdministrador />} />
        <Route path="/home" element={
          <>
            <Navbar />
            <h1 className="titulo-principal">Bienvenido a Nuestros Cursos</h1>
            <p className="descripcion-cursos">Explora la variedad de cursos que ofrecemos.</p>
            <ListaCursos />
            <CursoFormContainer />
          </>
        } />
        <Route path="/curso/:id" element={<CursoDetalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
