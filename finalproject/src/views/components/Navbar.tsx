import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";


const Navbar: React.FC = () => {



  return (
    <nav className="nav1">
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link className="b" to="/Routes">OTRAS RUTAS</Link>
        </li>
        <li className="d">
          <Link to="/Contact">CONTACTO</Link>
        </li>
        {/* <li className="d">
          <Link to="/Admin">ADMIN</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
