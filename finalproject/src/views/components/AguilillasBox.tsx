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
              <h3 className="tituloparrafo2">Visita la Necrópolis de las Aguilillas con <span className="Ardales">ARDALES</span><span className="Tur">TUR</span></h3>
            </div>



            <div className=" parrafo1 tocho3">
              <p className=" parrafo1 tocho3">Necrópolis prehistórica que podemos datar entre el tercer y segundo milenios
               antes de Cristo, construidas 
              en cuevas artificiales de la Península Ibérica. Por sus formas arquitectónicas, por los restos
               humanos y por los ajuares arqueológicos son de las mejor estudiadas y de las que han ofrecido 
               más información sobre la vida y la muerte de los primeros habitantes del Guadalteba.
  Se trata de siete
 estructuras funerarias excavadas en la roca que han conservado las cámaras funerarias y numerosos
  nichos alrededor.<br/> Algunas de ellas conservan los corredores de acceso. 
   Los enterramientos fueron siempre en segunda deposición (sólo los huesos) y con ellos se
    depositaron ajuares consistentes en vajillas de cerámica, cuchillos de silex y adornos 
    personales. </p>
            </div>

      

       
      </div>
      <div className="BookingButtonRoute continuar">
        <BookingButton onClick={toggleUpVisibility}>RESERVAR</BookingButton>
      </div>
    </div>
  );
};

export default Rules;
