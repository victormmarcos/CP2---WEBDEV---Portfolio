import React from 'react';
import Carrossel from './Carrossel';
import Apresentacao from './Apresentacao';
import minhaFoto from '../img/foto-perfil.jpg';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center p-4 bg-gray-100 dark:bg-gray-900">
        <img 
          src={minhaFoto}
          alt="Victor Magdaleno Marcos"
          className="rounded-full w-16 h-16 mr-4 border-2 border-gray-300 dark:border-gray-700"
        />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Victor Magdaleno Marcos</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center bg-white dark:bg-gray-800 px-4">
        <Apresentacao />
        <Carrossel />
      </main>
    </div>
  );
};

export default Home;