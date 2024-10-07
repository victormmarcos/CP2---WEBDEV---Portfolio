// src/components/DetalhesProjeto.js
import React from 'react';
import { useParams } from 'react-router-dom';

const detalhesProjeto = {
  1: { nome: 'Projeto 1', descricao: 'Detalhes do projeto 1' },
  2: { nome: 'Projeto 2', descricao: 'Detalhes do projeto 2' },
  3: { nome: 'Projeto 3', descricao: 'Detalhes do projeto 3' },
};

const DetalhesProjeto = () => {
  const { id } = useParams();
  const projeto = detalhesProjeto[id];

  if (!projeto) {
    return <h2>Projeto não encontrado</h2>;
  }

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold">{projeto.nome}</h2>
      <p>{projeto.descricao}</p>
    </section>
  );
};

export default DetalhesProjeto;