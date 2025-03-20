import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="navbar ">
      <div className="container-fluid">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Departamentos">Departamentos</Link>
        </li>
      </div>
    </nav>
  );
};

export default Nav;