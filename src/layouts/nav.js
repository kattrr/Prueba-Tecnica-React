import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg py-4 mainNav" style={{ backgroundColor: "#99bdff" }} id="mainNav">
      <div className="container">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav fw-bolder me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Departamentos" className="nav-link">Departamentos</Link>
              </li>
              <li className="nav-item">
                <Link to="/Presidentes" className="nav-link">Presidentes</Link>
              </li>
              <li className="nav-item">
                <Link to="/Turismo" className="nav-link">Turismo</Link>
              </li>
              <li className="nav-item">
                <Link to="/Aeropuertos" className="nav-link">Aeropuertos</Link>
              </li>
              <li className="nav-item">
                <Link to="/Platos" className="nav-link">Platos Tipicos</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contacto" className="nav-link">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;