import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/home">Inicio</Link>
      <Link to="/home">Crear Cuenta</Link>
      <Link to="/login">Salir</Link>
      {/* Agrega más enlaces según sea necesario */}
    </div>
  );
};

export default Navbar;
