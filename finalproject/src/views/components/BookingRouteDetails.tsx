import React, { useEffect } from "react";
import { IUser } from "../interfaceIUser";
import { connect } from "react-redux";
import { IGlobalState } from "../reducers/reducer";
import * as actions from "../actions/actions";
import "../styles/BookingDetails.css";
import { RouteComponentProps } from "react-router";
import { BookingButton } from "../styles/stylesComponents";
import { BookingButton3 } from "../styles/stylesComponents3";
import Navbar from "./Navbar";


interface IProps {}

interface IPropsGlobal {
  token: string;
  setBookings: (bookings: IUser[]) => void;
  bookings: IUser[];
  DeleteBookingStore: (bookingId: string) => void;
  updateBooking: (booking: IUser) => void;
}

const BookingRouteDetails: React.FC<
  IProps & IPropsGlobal & RouteComponentProps<{ bookingId: string }>
> = props => {
  const id = props.match.params.bookingId;

  const booking = props.bookings.find(b => b._id === id);

  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dni, setDni] = React.useState("");
  const [hour1, setHour1] = React.useState("");
  const [date, setDate] = React.useState("");
  const [size, setSize] = React.useState("");
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
  const updateHour1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHour1(event.target.value);
    setError("");
  };

  if (!booking) {
    return null;
  }

  const Delete = () => {
    fetch("http://localhost:3006/api/routebookings/" + booking._id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token
      }
    })
      // response (response.ok){
      // DeleteUserStore(user._id)
      .then(response => {
        if (response.ok) {
          // response
          //   .then(users => {
          props.DeleteBookingStore(booking._id);
          // })
          // .catch(err => {
          //   setError("Error JSON.");
          // });
          props.history.push("/Admin");
        } else {
          //   setError("respons.ok  error.");
        }
      })
      .catch(err => {
        // setError("Error response.");
      });
  };

  const bookingEdit = () => {
    fetch("http://localhost:3006/api/routebookings/" + id, {
      //fetch es una función tipo promesa
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token
      },
      body: JSON.stringify({
        name: name,
        lastname: lastname,
        email: email,
        size: size,
        tel: tel,
        hour1: hour1,
        dni: dni,
        date: date
      })
    }) 
      .then(response => {
        props.history.push("/Admin");
        if (response.ok) {
          console.log(booking);
          // props.updateBooking(
        //     { name: name,
        // lastname: lastname,
        // email: email,
        // size: size,
        // tel: tel,
        // hour1: hour1,
        // dni: dni,
        // date: date}
          // )
          props.history.push("/RoutesList");
        }
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
                placeholder={booking.name}
              />
              <label className="labeldetail">Nombre</label>
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
                placeholder={booking.lastname}
              />
              <label className="labeldetail">Apellidos</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">phone</i>
              <input
                id="icon_telephone inp"
                type="tel"
                className="validate inp"
                onChange={updateTel}
                placeholder={booking.tel}
              />
              <label className="labeldetail">Teléfono</label>
            </div>

            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">email</i>
              <input
                id="icon_email"
                type="text"
                className="validate"
                onChange={updateEmail}
                placeholder={booking.email}
              />
              <label className="labeldetail">Email</label>
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
                placeholder={booking.dni}
              />
              <label className="labeldetail">DNI</label>
            </div>

            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">
                date_range
              </i>
              <input
                id="icon_dni inp"
                type="text"
                className="validate inp"
                onChange={updateDate}
                placeholder={booking.date}
              />
              <label className="labeldetail">Fecha</label>
            </div>

            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">
                supervisor_account
              </i>
              <input
                id="icon_dni inp"
                type="text"
                className="validate inp"
                onChange={updateSize}
                placeholder={booking.size}
              />
              <label className="labeldetail">Tamaño del grupo</label>
            </div>

            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">
                access_time
              </i>
              <input
                id="icon_dni inp"
                type="text"
                className="validate inp"
                onChange={updateHour1}
                placeholder={booking.hour1}
              />
              <label className="labeldetail">Hora</label>
            </div>

            <div className="input-field col s6" />
          </div>
        </form>
      </div>
      <div className="BookingButton5">
      <BookingButton3 onClick={Delete}>Delete</BookingButton3>
        <BookingButton className="editb5" onClick={bookingEdit}>Edit</BookingButton>
       
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setBookings: actions.setBookings,
  DeleteBookingStore: actions.DeleteBookingStore,
  pushBooking: actions.pushBooking,
  setToken: actions.setToken,
  updateBooking: actions.updateBooking
};

const mapStateToProps = (state: IGlobalState) => ({
  bookings: state.bookings,
  token: state.token
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingRouteDetails);
