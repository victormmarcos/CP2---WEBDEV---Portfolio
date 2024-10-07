// src/components/Carrossel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';

const linguagens = [
  { nome: 'JavaScript', icon: faJs },
  { nome: 'Python', icon: faPython },
  { nome: 'HTML', icon: faHtml5 },
  { nome: 'CSS', icon: faCss3 },
];

const Carrossel = () => {
  return (
    <div className="w-full max-w-md">
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false} 
        showArrows={true} 
        className="rounded-lg shadow-lg"
      >
        {linguagens.map((linguagem, index) => (
          <div key={index} className="flex flex-col items-center justify-center h-40 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg">
            <FontAwesomeIcon icon={linguagem.icon} size="3x" className="text-white mb-2" />
            <h2 className="text-2xl font-semibold text-white">{linguagem.nome}</h2>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carrossel;