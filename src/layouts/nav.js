import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg py-4" style={{ backgroundColor: "#99bdff" }}>
      <div className="container">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav fw-bolder">
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
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;