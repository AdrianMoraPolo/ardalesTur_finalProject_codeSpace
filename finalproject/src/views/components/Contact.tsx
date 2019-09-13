import React, { useState } from "react";
import "../styles/Home.css";
// import {  Parallax  } from 'react-scroll-parallax' ; 
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Contact.css";
import { BookingButton } from "../styles/stylesComponents";
import { IUser } from "../interfaceIUser";
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



const OtherBookings: React.FC<
IProps & IPropsGlobal & RouteComponentProps<{ bookingId: string }>
> = props => {

  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [textcontact, setTextContact] = React.useState("");
  const [error, setError] = React.useState("");
  const [acept, setAcept] = React.useState(false);

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

  const updateTextContact = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextContact(event.target.value);
    setError("");
  };

  const updateAcept = (state: boolean) => {
    setAcept(state);
    setError("");
  };

  const contactPush = () => {
    fetch("http://localhost:3006/api/contact", {
      //fetch es una función tipo promesa
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        lastname: lastname,
        email: email,
        tel: tel,
        textcontact: textcontact
      })
    })
      .then(response => {
        updateAcept(true);
        //delay reserva realizada
        // const aux: any = document.getElementById("bookingOk");
        // const delayInMilliseconds = 10000;
        // setTimeout(aux.click(), delayInMilliseconds);
        // updateAcept(true);
        // updateComponent(true);

         
      })

      .catch(err => {
        console.log("Error," + err);
      });
  };


  return (
    <div className="contactBlack">
      <Navbar />

     
 
      <div className="cardcontactinto">

      {acept && (
        <div>
          <h3 className="oookBooking">Consulta REALIZADA</h3>
          <p className="oookBooking2">
            Su cosulta ha sido realizada, nos pondremos en contacto en cuanto nos sea posible.
          </p>
          <p className="oookBooking3">
            Recuerde, contactaremos por Teléfono o Email.
          </p>
          <p className="oookBooking3">Gracias por consultarnos.</p>{" "}
        </div>
      )}
      {!acept && (
        <div>
        <h2>Contacta con nosotros</h2>
        <p>Si tienes cualquier pregunta no dudes en contactar con nosotros, te responderemos en un máximo de 24 horas. Te pedimos que nos proporciones toda la información posible sobre vuestro caso o el de tu grupo, y así nos pondremos de acuerdo para coordinar vuestra visita.</p>
        <div className="row boxcontact">
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
            </div>
            <div className="row">
              <div className="input-field col s12" onChange={updateTextContact}>
              <i className="material-icons prefix">mode_edit</i>
                <textarea id="textarea2" className="materialize-textarea validate inp texareacontact1" data-length="120" />
                <label>Consulta</label>
              </div>
            </div>
          </form>
        </div>
        <div className="butcont">
        <BookingButton onClick={contactPush}>Enviar</BookingButton>
        </div>
        </div>
        )
      }
      </div>
   <Footer/>
    </div>
  );
};

export default OtherBookings;



