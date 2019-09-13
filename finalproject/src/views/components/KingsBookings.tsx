import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import { IGlobalState } from "../reducers/reducer";
import { IUser } from "../interfaceIUser";
import "../styles/KingsBookings.css";
import { BookingButton } from "../styles/stylesComponents";
import { Link } from "react-router-dom";
import "react-day-picker/lib/style.css";


interface IProps {}

interface IPropsGlobal {
  token: string;
  bookings: IUser[];
  setBookings: (bookings: IUser[]) => void;
  // DeleteBookingStore: (bookingId: string) => void;
}

const KingsBookings: React.FC<IProps & IPropsGlobal> = props => {
  useEffect(() => {
    fetch("http://localhost:3006/api/kingbookings", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token
      }
    })
      .then(response => {
        if (response.ok) {
          response
            .json()
            .then(bookings => {
              props.setBookings(bookings);
            })
            .catch(err => {
              //   setError("Error JSON.");
            });
        } else {
          //   setError("respons.ok  error.");
        }
      })
      .catch(err => {
        // setError("Error response.");
      });
  }, []);

  return (
    <div className="columns tableta2">
      <div className="column">
        <h3 className="contacts titletables">Reservas Caminito del Rey</h3>
        <table className="is-striped tabla">
          <tbody>
            {props.bookings.map(bookings => (
              <tr className="tr trsito" key={bookings._id}>
                <td>{bookings.name}</td>
                <td> {bookings.lastname}</td>
                <td> {new Date(bookings.date).toLocaleDateString()}</td>
                <td> {bookings.size}</td>
                <td> {bookings.hour1}</td>
                <td> {bookings.tel}</td>
                <td> {bookings.route}</td>
                <td> {bookings.dni}</td>
                <td>{bookings.email}</td>
                <td>
                  <Link to={"/Booking/" + bookings._id}>
                    <BookingButton>Edit</BookingButton>
                  </Link>
                </td>
                {/* <td>
                                    <BookingButton3 onClick={Delete}>Delete</BookingButton3>
                                </td> */}
                {/*<td><a className="button is-danger">Edit</a></td> */}
                {/* <td><input type="button" onClick={() => props.setCitiesById(city.id)}></input></td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={"/Add"}>
          <BookingButton>Add</BookingButton>
        </Link>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  setBookings: actions.setBookings
  // DeleteBookingStore: actions.DeleteBookingStore
};

const mapStateToProps = (state: IGlobalState) => ({
  token: state.token,
  bookings: state.bookings
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KingsBookings);
