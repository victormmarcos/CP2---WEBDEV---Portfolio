// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ toggleModoNoturno, modoNoturno }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white mr-6">
          Home
        </Link>
        <Link to="/projetos" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 mx-2">
          Projetos
        </Link>
        <Link to="/contato" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 mx-2">
          Contato
        </Link>
      </div>
      <div className="flex items-center">
        <button onClick={toggleModoNoturno} className="text-gray-700 dark:text-gray-300 mr-4">
          {modoNoturno ? 'Modo Claro' : 'Modo Noturno'}
        </button>
      </div>
    </nav>
  );
};

export default Menu;