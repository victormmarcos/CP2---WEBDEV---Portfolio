// src/components/Projetos.js
import React from 'react';
import { Link } from 'react-router-dom';

const projetos = [
  { id: 1, nome: 'Projeto 1', descricao: 'Descrição do projeto 1' },
  { id: 2, nome: 'Projeto 2', descricao: 'Descrição do projeto 2' },
  { id: 3, nome: 'Projeto 3', descricao: 'Descrição do projeto 3' },
];

const Projetos = () => {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold">Meus Projetos</h2>
      <ul className="space-y-4">
        {projetos.map((projeto) => (
          <li key={projeto.id} className="border p-4">
            <h3 className="text-lg font-semibold">{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
            <Link to={`/projetos/${projeto.id}`} className="text-blue-500">Ver Detalhes</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projetos;