import React from "react";
import "../styles/AddBookings.css";
import 'moment/locale/es.js' // or 'rc-datepicker/node_modules/moment/locale/fr.js' if you don't have it in your node_modules folder
//DATEPICKER
import 'react-day-picker/lib/style.css';
import { BookingButton } from "../styles/stylesComponents";
import { IUser } from "../interfaceIUser";
import { connect } from "react-redux";
import { IGlobalState } from "../reducers/reducer";
import * as actions from "../actions/actions";
import { RouteComponentProps } from "react-router";
import Navbar from "./Navbar";


interface IProps {}

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

const AddBookings2: React.FC<
  IProps & IPropsGlobal & RouteComponentProps<{ bookingId: string }>
> = props => {

  
    
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dni, setDni] = React.useState("");
  const [hour1, setlHour1] = React.useState("");
  const [date, setDate] = React.useState("");
  const [size, setSize] = React.useState("");
  const [route, setRoute] = React.useState("");
  const [error, setError] = React.useState("");


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

  const updateDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
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
  const updatelHour1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setlHour1(event.target.value);
    setError("");
  };
  const updateRoute = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoute(event.target.value);
    setError("");
  };


  const bookingPush2 = () => {
    fetch("http://localhost:3006/api/routebookings", {
        //fetch es una función tipo promesa
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
          hour1: hour1,
          dni: dni,
          date: date,
          route: route
        })
      })
        .then(response => {
                                            props.history.push("/RoutesList");

                // if (response.ok) {
                //   fetch("http://localhost:3006/api/routebookings", {
                //       method: "GET",
                //       headers: {
                //           "Content-Type": "application/json",
                //           Authorization: "Bearer " + props.token
                //       }
                //         })
                //         .then(response => response.json())
                //         .then(json => {
                //             if(json.length > 0) {
                //                 props.setBookings(json);
                //                 props.history.push("/Admin");
                //             }
                //         })
  
                //   // response
                //   //   .text() //el text()es una promesa
                //   //   .then(token => {
                //   //     console.log(token);
                //   //     props.setToken(token);
                //   //     props.setName(username);
                //   //     props.updateUser(
                //   //         {username: username,
                //   //           email: email,
                //   //           id: ,
                //   //           isAdmin: isAdmin}
                //   //       )
                //   //       props.history.push("/users");
                //   //   });
                //   //ESTE TOCHO DE ARRIBA ES PARA QUE SE CONECTE DIRECTAMENTE EL USUARIO CREADO
                  
                // } else {
                //   setError("Usuario o Contraseña incorrectos");
                // }
              })
              
        .catch(err => {
          console.log("Error," + err);
        });
    };

  return (
    <div>
        <Navbar/>
      <div className="row container booking2">
        <form className="col s12">
          <h3 className="reservacm">RESERVA </h3>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">account_box</i>
              <input id="icon_name inp" type="text" className="validate inp" onChange={updateName}></input>
              <label >Nombre</label>
            </div>

            <div className="input-field col s6">
              <i className="tiny material-icons prefix icon-white small"> art_track</i>
              <input id="icon_lastname inp" type="text" className="validate inp" onChange={updateLastname}></input>
              <label >Apellidos</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">phone</i>
              <input id="icon_telephone inp" type="tel" className="validate inp" onChange={updateTel}></input>
              <label >Teléfono</label>
            </div>

            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">email</i>
              <input id="icon_email" type="text" className="validate" onChange={updateEmail}></input>
              <label >Email</label>
            </div>

            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">fingerprint</i>
              <input id="icon_dni inp" type="text" className="validate inp" onChange={updateDni}></input>
              <label >DNI</label>
            </div>

            
            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">date_range</i>
              <input id="icon_dni inp" type="text" className="validate inp" onChange={updateDate}></input>
              <label >Fecha</label>
            </div>

            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">supervisor_account</i>
              <input id="icon_dni inp" type="text" className="validate inp" onChange={updateSize}></input>
              <label >Tamaño del grupo</label>
            </div>

            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">access_time</i>
              <input id="icon_dni inp" type="text" className="validate inp" onChange={updatelHour1}></input>
              <label >Hora</label>
            </div>





            
            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">account_balance</i>
              <input id="icon_dni inp" type="text" className="validate inp" onChange={updateRoute}></input>
              <label >Visita</label>
            </div>

          </div>
        </form>
      </div>
      <div className="BookingButtonAdd">
     
                    <BookingButton onClick={bookingPush2}>Crear</BookingButton>
               
      </div>
    
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
  )(AddBookings2);
  
