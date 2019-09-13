import React from "react";
import "../styles/NavListBookings.css";
import { Link } from "react-router-dom";


const NavListBookings: React.FC = () => {



  return (
    <nav className="nav5">
      <ul>
        <li className="ac">
          <Link to="/Admin">Caminito del Rey</Link>
        </li>
        <li>
          <Link className="bc" to="/RoutesList">Otras rutas</Link>
        </li>
        <li className="cc">
          <Link to="/ContactList">Mensajes contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavListBookings;
