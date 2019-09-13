import React from "react";
import "../styles/Navbar2.css";
import { Link } from "react-router-dom";


const Navbar2: React.FC = () => {



  return (
    <nav className="nav2">
      <ul>
        <li>
          <Link className="z" to="/">INICIO</Link>
        </li>
        <li>
          <Link className="x" to="/Routes">OTRAS RUTAS</Link>
        </li>
        <li className="n">
          <Link to="/Contact">CONTACTO</Link>
        </li>
        {/* <li className="m">
          <Link to="/Admin">ADMIN</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar2;
