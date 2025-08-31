import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'vantagens', label: 'Vantagens' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'sobre', label: 'Sobre Eduardo' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'contato', label: 'Fale Conosco' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 65; // Altura do header fixo + margem extra
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // Fechar menu mobile após navegação
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    console.log('Toggle mobile menu clicked:', !isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Detectar seção ativa baseada no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const headerHeight = 65;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop - headerHeight - 50;
          if (window.scrollY >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navigation-header">
      <div className="nav-container">
        <div className="logo">
          <h2>Eduardo Borges</h2>
        </div>
        
        <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div 
          className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navigation;