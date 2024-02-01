import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/home">Inicio</Link>
      {/* Agrega más enlaces según sea necesario */}
    </div>
  );
};

export default Navbar;
