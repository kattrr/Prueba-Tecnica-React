import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mainFooter fixed-bottom">
      <div className="container text-center">
        <div className="mb-3">
          <Link to="/" className="text-decoration-none text-white me-3">
            <FontAwesomeIcon icon="fas fa-home" /> Inicio
          </Link>
          <Link to="/Contacto" className="text-decoration-none text-white">
            <FontAwesomeIcon icon="fas fa-envelope" /> Contacto
          </Link>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <a href="mailto:katheriverar@gmail.com" className="text-decoration-none text-white">
            <FontAwesomeIcon icon="fas fa-envelope" /> Correo
          </a>
          <a href="https://github.com/kattrr" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white">
            <FontAwesomeIcon icon="fa-brands fa-github" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/katheringriverar/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white">
            <FontAwesomeIcon icon="fab fa-linkedin" /> LinkedIn
          </a>
          <a href="https://www.behance.net/katherivera" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white">
            <FontAwesomeIcon icon="fa-brands fa-behance" /> Portafolio
          </a>
        </div>
        <p className="mt-3 mb-0">&copy; {new Date().getFullYear()} Kathering Rivera Rodriguez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
