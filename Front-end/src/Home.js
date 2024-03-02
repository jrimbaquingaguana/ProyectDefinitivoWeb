import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaCursos from './components/ListaCursos';
import CursoDetalle from './components/CursoDetalle';
import Navbar from './components/Navbar';
import CursoFormContainer from './components/CursoFormContainer';
import './App.css';

function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshCursos = () => {
    setRefreshKey(oldKey => oldKey + 1);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          
          <Route path="/home" element={
            <>
              <ListaCursos key={refreshKey} />
              <CursoFormContainer onCursoAdded={refreshCursos} />
            </>
          } />
          <Route path="/curso/:id" element={<CursoDetalle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
