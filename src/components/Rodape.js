// src/components/Rodape.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Rodape = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 p-4 flex justify-center space-x-4">
      <a href="https://github.com/victormmarcos" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/victor-magdaleno-marcos-ab0423119/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </footer>
  );
};

export default Rodape;