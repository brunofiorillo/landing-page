import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Eduardo Borges © 2025 Todos os direitos reservados - CNPJ: 54.302.635/0001-72
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;