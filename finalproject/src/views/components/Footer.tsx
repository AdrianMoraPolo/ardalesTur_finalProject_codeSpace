import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";


const Footer: React.FC = () => {



  return (
      <div>
    <div className="container-fluid footerback">
    <div className="social2">
        <div className="d-block justify-content-end social_icon2">
            <span><a href="https://es-es.facebook.com/ARDALESTUR/"><i className="fab fa-facebook-square"></i></a></span>
            <span><a href="http://www.malaga.es/es/turismo/naturaleza/lis_cd-8831/ardalestur"><i
                        className="fab fa-google-plus-square"></i></a></span>
            <span><a href="https://twitter.com/ardalestur?lang=es"><i className="fab fa-twitter-square"></i></a></span>
        </div>
       
            <ul className="row footermenu">
                <li className="nav-link fo" ><Link to="/" className="fot">INICIO</Link></li>
                <li className="nav-link fo"><Link to="/" className="fot">RESERVAS CAMINITO DEL REY</Link></li>
                <li className="nav-link fo"><Link to="/Routes" className="fot">RUTAS</Link></li>
                <li className="nav-link fo"><Link to="/" className="fot">HISTORIA</Link></li>
                <li className="nav-link fo"><Link to="/Contact" className="fot">CONTACTO</Link></li>
            </ul>
           
    </div>
</div>
<div className="container-fluid footerback2">
    <div className="footerback1letrilla">TURISMO ECOLOGICO Y CULTURAL</div><br/>
    <div className="footerback2letrilla">@ARDALESTUR CULTURA TURISMO RURAL & HISTORIA</div>
</div>
</div>
  );
};

export default Footer;
