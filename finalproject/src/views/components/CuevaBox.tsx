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
              <h3 className="tituloparrafo2">Visita la Cueva Doña Trinidad Grund con <span className="Ardales">ARDALES</span><span className="Tur">TUR</span></h3>
            </div>



            <div className=" parrafo1 tocho1">
              <p className=" parrafo1 tocho1">La Cueva de Ardales se encuentra en el Cerro de la Calinoria, 
               a unos 50 km al norte de la costa mediterránea española. La Cueva de
               Ardales o de Trinidad Grund fue descubierta en 1821 cuando un terremoto abrió la entrada 
               sellada desde hacía 3.500 años. Desde 1823, la cueva se abrió al turismo nacional, con algunas
                referencias del siglo XIX al hallazgo de restos humanos fósiles. Sólo en 1918, el famoso
                 prehistoriador francés Henry Breuil reconoció la importancia de la Cueva, siendo el primero
                  en estudiar el arte rupestre de la Cueva Ardales.
Además de las representaciones pictóricas, el interior de la cueva ha conservado numerosos 
hallazgos asociados con su uso humano. Son herramientas talladas en sílex y algunas en hueso,
 que fueron depositadas o abandonadas en las inmediaciones del Arte rupestre, pudiendo haber 
 sido utilizadas para grabar algunas de las figuras.</p>
            </div>

      

       
      </div>
      <div className="BookingButtonRoute continuar">
        <BookingButton onClick={toggleUpVisibility}>RESERVAR</BookingButton>
      </div>
    </div>
  );
};

export default Rules;
