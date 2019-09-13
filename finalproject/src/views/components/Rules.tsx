import React from "react";
import "../styles/Rules.css";
import "moment/locale/es.js"; // or 'rc-datepicker/node_modules/moment/locale/fr.js' if you don't have it in your node_modules folder
//DATEPICKER
import "react-day-picker/lib/style.css";
import { BookingButton } from "../styles/stylesComponents";
import posed, { PoseGroup } from "react-pose";
import Booking from "./Booking";
import { Route } from "react-router-dom";

const UpBlack = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    delay: 100,
    scale: 1,
    transition: { duration: 500 }
  },
  exit: {
    x: "100%",
    opacity: 1,
    scale: 1,
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
        {visible && (
          <UpBlack key="Booking" className="Blackboxo">
            <Route component={Booking} />
          </UpBlack>
        )}
      </PoseGroup>

      <div className="row inputgroup inputgroup2">
        <form className="col s12">
          <div className="row">
            <div className="input-field col">
              <h3 className="tituloparrafo1">
                Visita el Caminito del Rey con{" "}
                <span className="Ardales">ARDALES</span>
                <span className="Tur">TUR</span>
              </h3>
            </div>

            <div className="input-field col parrafo1 tocho1">
              <p>
                Recorre el Caminito del Rey a través de una visita histórica y
                didáctica donde aprenderás más sobre la primera central
                hidroeléctrica de Málaga, así como del gran papel que tuvo en la
                modernización de esta ciudad. Recorrido Desfiladero de los
                Gaitanes: 3km. Con la salida y la entrada: 7km.
              </p>
            </div>

            <div className="normastitulo input-field col s12 parrafo1">
              <h5>Normas</h5>
            </div>
            <div className="input-field col parrafo1">
              <i className="material-icons prefix icon-white small">
                person_add
              </i>
            </div>
            <div className="input-field col parrafo1 norma1">
              Niños desde 8 años.
            </div>
            <div className="input-field col parrafo1">
              <i className="material-icons prefix icon-white small">
                directions_walk
              </i>
            </div>
            <div className="input-field col parrafo1 norma1">
              Calzado deportivo.
            </div>
            <div className="input-field col s6 parrafo1 paragu">
              <i className="material-icons prefix icon-white small">
                beach_access
              </i>
            </div>
            <div className="input-field col parrafo1 norma1 paragu2">
              Prohibidos palos de selfie, bastones de caminante, paraguas y
              trípodes.
            </div>
            <div className="input-field col parrafo1">
              <i className="material-icons prefix icon-white small">
                local_florist
              </i>
            </div>
            <div className="input-field col parrafo1 norma1">
              Prohibido tirar basura en todo el paraje.
            </div>

            <div className="input-field col s3 parrafo1">
              <i className="material-icons prefix icon-white small">
                smoke_free
              </i>
            </div>
            <div className="input-field col parrafo1 smoke norma1">
              Prohibido fumar.
            </div>
          </div>
        </form>
      </div>
      <div className="BookingButton2 continuar">
        <BookingButton onClick={toggleUpVisibility}>CONTINUAR</BookingButton>
      </div>
    </div>
  );
};

export default Rules;
