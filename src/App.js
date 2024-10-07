import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Projetos from './components/Projetos';
import DetalhesProjeto from './components/DetalhesProjeto';
import Contato from './components/Contato';
import Rodape from './components/Rodape';

const App = () => {
  const [modoNoturno, setModoNoturno] = useState(false);
  useEffect(() => {
    const modoSalvo = localStorage.getItem('modoNoturno');
    if (modoSalvo) {
      setModoNoturno(JSON.parse(modoSalvo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('modoNoturno', JSON.stringify(modoNoturno));
    if (modoNoturno) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [modoNoturno]);

  const toggleModoNoturno = () => {
    setModoNoturno(prevModo => !prevModo);
  };

  return (
    <Router>
      <div 
        className={`${modoNoturno ? 'bg-gray-800 text-white' : 'bg-white text-black'} min-h-screen flex flex-col`}
      >
        <Menu toggleModoNoturno={toggleModoNoturno} modoNoturno={modoNoturno} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home modoNoturno={modoNoturno} />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/projetos/:id" element={<DetalhesProjeto />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Rodape />
      </div>
    </Router>
  );
};

export default App;