import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg py-4 mainNav fw-bolder" style={{ backgroundColor: "#99bdff" }} id="mainNav">
      <div className="container ">
        <div className="container-fluid ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-evenly" id="navbarText">
            <ul className="navbar-nav mb-2 gap-2 gap-md-5 ">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${location.pathname === "/" ? "active bg-primary rounded text-light" : ""}`}>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/Departamentos" className={`nav-link ${location.pathname === "/Departamentos" ? "active bg-primary rounded text-light" : ""}`}>Departamentos</Link>
              </li>
              <li className="nav-item">
                <Link to="/Presidentes" className={`nav-link ${location.pathname === "/Presidentes" ? "active bg-primary rounded text-light" : ""}`}>Presidentes</Link>
              </li>
              <li className="nav-item">
                <Link to="/Turismo" className={`nav-link ${location.pathname === "/Turismo" ? "active bg-primary rounded text-light" : ""}`}>Turismo</Link>
              </li>
              <li className="nav-item">
                <Link to="/Aeropuertos" className={`nav-link ${location.pathname === "/Aeropuertos" ? "active bg-primary rounded text-light" : ""}`}>Aeropuertos</Link>
              </li>
              <li className="nav-item">
                <Link to="/Platos" className={`nav-link ${location.pathname === "/Platos" ? "active bg-primary rounded text-light" : ""}`}>Platos Tipicos</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contacto" className={`nav-link ${location.pathname === "/Contacto" ? "active bg-primary rounded text-light" : ""}`}>Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;