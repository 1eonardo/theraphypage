import React from 'react';
import { Link } from 'react-router-dom';
import './navbarStyle.css';
import img1 from '../../Assets/LogoYoga.png';

const Navbar = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleContactClick = (e) => {
    // Evitar el comportamiento predeterminado del enlace
    e.preventDefault();

    // Redirigir a la página principal
    window.location.href = '/theraphypage';

    // Esperar a que la página principal se cargue completamente y luego desplazarse a la sección de contacto
    window.addEventListener('load', scrollToContact);
  };

  return (
    <nav className="NavbarItems">
      <Link to="/theraphypage" className="linklogo">
        <h1 className="navbar-logo">
          {' '}
          <img className="imgnav" src={img1} alt="/theraphypage" /> MyHealth
        </h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/services" className="nav-links">
            Services
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-links" onClick={handleContactClick}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/login" className="boton">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
