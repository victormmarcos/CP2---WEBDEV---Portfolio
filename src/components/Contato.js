// src/components/Contato.js
import React, { useState } from 'react';

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nome,
      email,
      mensagem,
    });
    setNome('');
    setEmail('');
    setMensagem('');
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <section id="contato" className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-12">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Contato</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Seu Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="p-2 border border-gray-300 dark:border-gray-700 rounded"
          required
        />
        <input
          type="email"
          placeholder="Seu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 dark:border-gray-700 rounded"
          required
        />
        <textarea
          placeholder="Sua Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="p-2 border border-gray-300 dark:border-gray-700 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contato;