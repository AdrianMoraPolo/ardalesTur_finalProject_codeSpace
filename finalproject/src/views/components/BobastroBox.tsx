import React from "react";
import "../styles/RouteBox.css";
import 'moment/locale/es.js' // or 'rc-datepicker/node_modules/moment/locale/fr.js' if you don't have it in your node_modules folder
//DATEPICKER
import 'react-day-picker/lib/style.css';
import { BookingButton } from "../styles/stylesComponents";
import posed, { PoseGroup } from "react-pose";
import BookingRoute from './BookingRoute';
import { Route } from "react-router-dom";

const UpBlack = posed.div({
  enter: {
    y: 0, opacity: 1, delay: 100, scale: 1,
    transition: { duration: 500 }
  },
  exit: {
    y: "100%", opacity: 1, scale: 1,
    transition: { duration: 400 }
  }
});

const Rules: React.FC = () => {



  const [visible, setVisible] = React.useState(false);

  const toggleVisibility = () => setVisible(v => !v);

  const toggleUpVisibility = () => setVisible(v => !v);




  return (


    <div className="lateral">

      <PoseGroup>
        {visible && <UpBlack key="Booking" className="BlackboxUp">
        <Route component={BookingRoute} />
        </UpBlack>}

      </PoseGroup>

      <div className="row inputgroup inputgroup3">
      
          
            <div className="input-field">
              <h3 className="tituloparrafo2">Visita las Ruinas de Bobastro con <span className="Ardales">ARDALES</span><span className="Tur">TUR</span></h3>
            </div>



            <div className=" parrafo1 tocho2">
              <p className=" parrafo1 tocho2">Bobastro es un antiguo poblado situado en el norte de la provincia de Málaga,
                   donde Omar Ben Hafsún estableció la capital de sus dominios, en 880, 
                  al sublevarse contra el emir de Córdoba. Tras su conquista, Abderramán III hizo
                   enviar y leer en todas las mezquitas una carta jactándose de haber acabado con
                    Bobastro, centro de la rebelión, a la que describe como "base del politeísmo,
                     morada de infidelidad y mentira, gloria y refugio de la cristiandad que allí
                      se acogía y descansaba". Poco después de esta victoria Abderramán III se 
                      proclamó califa. Todo ello da fe de la importancia de este núcleo de 
                      resistencia en al-Ándalus de que se hacen eco las propias fuentes árabes, 
                      caracterizadas estas por el silencio con el que trataban a todo lo que 
                      afectaba a los cristianos en su territorio. Destacan las construcciones excavadas en la
                       roca, incluyendo una iglesia rupestre mozárabe y castillo.</p>
            </div>

      

       
      </div>
      <div className="BookingButtonRoute continuar">
        <BookingButton onClick={toggleUpVisibility}>RESERVAR</BookingButton>
      </div>
    </div>
  );
};

export default Rules;
