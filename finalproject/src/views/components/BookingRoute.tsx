import React from "react";
import "../styles/BookingRoute.css";
import 'moment/locale/es.js' // or 'rc-datepicker/node_modules/moment/locale/fr.js' if you don't have it in your node_modules folder
//DATEPICKER
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { BookingButton } from "../styles/stylesComponents";
import { IUser } from "../interfaceIUser";
import { connect } from "react-redux";
import { IGlobalState } from "../reducers/reducer";
import * as actions from "../actions/actions";
import { RouteComponentProps } from "react-router";

interface IProps { }

interface IPropsGlobal {
  token: string;
  bookings: IUser[];
  pushBooking: (booking: IUser) => void;
  setToken: (t: string) => void;
  setName: (u: string) => void;
  updateUser: (booking: IUser) => void;
  setBookings: (bookings: IUser[]) => void;
  DeleteUserStore: (bookingId: string) => void;
}

const Booking: React.FC<
  IProps & IPropsGlobal & RouteComponentProps<{ bookingId: string }>
> = props => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [day, setDay] = React.useState();

  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dni, setDni] = React.useState("");
  const [hour, setHour] = React.useState("");
  const [size, setSize] = React.useState("");
  const [route, setRoute] = React.useState("");
  const [error, setError] = React.useState("");
  const [acept, setAcept2] = React.useState(false);
  const [componente, setComponent2] = React.useState(false);

  const handleDayClick = (day: Date) => setDay(day);


  // const updateDay = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setDay(event.target.value);
  //   setError("");
  // };

  const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setError("");
  };
  const updateLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(event.target.value);
    setError("");
  };
  const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError("");
  };
  const updateTel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTel(event.target.value);
    setError("");
  };
  const updateDni = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDni(event.target.value);
    setError("");
  };
  const updateSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value);
    setError("");
  };
  const updateHour1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHour("09:00am");
    setError("");
  };
  const updateHour2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHour("12:00am");
    setError("");
  };
  const updateRoute1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoute("Necrópolis de las Aguilillas");
    setError("");
  };
  const updateRoute2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoute("Bobastro");
    setError("");
  };
  const updateRoute3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoute("Cueva de Ardales");
    setError("");
  };
  const updateAcept2 = (state: boolean) => {
    setAcept2(state);
    setError("");
  };
  const updateComponent2 = (state: boolean) => {
    setComponent2(state);
    setError("");
  };


  const bookingPush2 = () => {
    fetch("http://localhost:3006/api/routebookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        lastname: lastname,
        email: email,
        size: size,
        tel: tel,
        hour1: hour,
        dni: dni,
        date: day,
        route: route
      })
    })
      .then(response => {
        updateAcept2(true);
        updateComponent2(true);
      })

      .catch(err => {
        console.log("Error," + err);
      });
  };

  return (
    <div className="contenidobooking">

      {acept && <div>
        <h3 className="ookBooking">RESERVA REALIZADA</h3>
        <p className="ookBooking2">Tu reserva de visita guiada a <span className="ospanok2">{route}</span> para el día {new Date(day).toLocaleDateString()} a las {hour} ha sido realizada, nos pondremos en contacto contigo para confirmarla.
  </p><p className="ookBooking3">
          Recuerda <span className="nombreusuario">{name}</span> antes contactaremos contigo por Teléfono o Email.</p>
        <p className="ookBooking3">Gracias por reservar con ArdalesTur</p> </div>}


      {!acept && <DayPicker selectedDays={day} onDayClick={handleDayClick} />}
      {!acept &&
        <div className="row inputgroup booking1">

          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix icon-white small">
                  account_box
              </i>
                <input
                  id="icon_name inp"
                  type="text"
                  className="validate inp"
                  onChange={updateName}
                />
                <label>Nombre</label>
              </div>

              <div className="input-field col s6">
                <i className="tiny material-icons prefix icon-white small">
                  {" "}
                  art_track
              </i>
                <input
                  id="icon_lastname inp"
                  type="text"
                  className="validate inp"
                  onChange={updateLastname}
                />
                <label>Apellidos</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix icon-white small">phone</i>
                <input
                  id="icon_telephone inp"
                  type="tel"
                  className="validate inp"
                  onChange={updateTel}
                />
                <label>Teléfono</label>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix icon-white small">email</i>
                <input
                  id="icon_email"
                  type="text"
                  className="validate"
                  onChange={updateEmail}
                />
                <label>Email</label>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix icon-white small">
                  fingerprint
              </i>
                <input
                  id="icon_dni inp"
                  type="text"
                  className="validate inp"
                  onChange={updateDni}
                />
                <label>DNI</label>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix icon-white small">
                  people
              </i>
                <input
                  id="icon_size inp"
                  type="text"
                  className="validate inp"
                  onChange={updateSize}
                />
                <label>Tamaño del grupo</label>
              </div>
              <div className="row">
                <form action="#">
                  <p className="hourcheck">Hora de la visita</p>
                  <p className="nueve">
                    <label>
                      <input
                        className="with-gap"
                        name="yourchoice"
                        type="radio"
                        onChange={updateHour1}
                      />
                      <span>09:00am</span>
                    </label>
                  </p>
                  <p className="doce">
                    <label>
                      <input
                        className="with-gap rad"
                        name="yourchoice"
                        type="radio"
                        onChange={updateHour2}
                      />
                      <span>12:00am</span>
                    </label>
                  </p>
                </form>
              </div>
              <div className="horita">
                <form action="#">
                  <p className="routecheck">Lugar de la visita</p>
                  <p className="quince">
                    <label>
                      <input
                        className="with-gap"
                        name="yourchoice"
                        type="radio"
                        onChange={updateRoute1}
                      />
                      <span>Necrópolis de las Aguilillas</span>
                    </label>
                  </p>
                  <p className="catorce">
                    <label>
                      <input
                        className="with-gap rad"
                        name="yourchoice"
                        type="radio"
                        onChange={updateRoute2}
                      />
                      <span>Bobastro</span>
                    </label>
                  </p>
                  <p className="trece">
                    <label>
                      <input
                        className="with-gap rad"
                        name="yourchoice"
                        type="radio"
                        onChange={updateRoute3}
                      />
                      <span>Cueva de Ardales</span>
                    </label>
                  </p>
                </form>
              </div>



            </div>
          </form>
        </div>}
      {!acept &&
        <div >
          <BookingButton className="BookingButton1" onClick={bookingPush2}>REALIZAR RESERVA</BookingButton>
        </div>}
      {/* {acept === true &&
        <div>
          <p style={{color: 'white'}}>La reserva ya esta realizada</p>
        </div>
      } */}
    </div>
  );
};

const mapDispatchToProps = {
  pushBooking: actions.pushBooking,
  setToken: actions.setToken,
  setName: actions.setName,
  updateBooking: actions.updateBooking,
  setBookings: actions.setBookings
};

const mapStateToProps = (state: IGlobalState) => ({
  bookings: state.bookings,
  token: state.token
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);
