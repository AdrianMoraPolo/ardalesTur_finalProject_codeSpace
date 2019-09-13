import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import { IGlobalState } from "../reducers/reducer";
import { IUser } from "../interfaceIUser";
import "../styles/KingsBookings.css";
import { BookingButton } from "../styles/stylesComponents";
import { Link } from "react-router-dom";
import "react-day-picker/lib/style.css";
import NavListBookings from "./NavListBookings";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface IProps {}

interface IPropsGlobal {
  token: string;
  bookings: IUser[];
  setBookings: (bookings: IUser[]) => void;

}

const RouteBookings: React.FC<IProps & IPropsGlobal> = props => {
  useEffect(() => {
    fetch("http://localhost:3006/api/routebookings", {
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
    <div className="isAdminBackground">
<Navbar/>
<div>
<NavListBookings/>

    
    <div className="columns container tableta2">
      <div className="column">
        <h3 className="contacts titletables">Reservas Bobastro, Cueva y Aguilillas</h3>
        <table className="is-striped tabla2">
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
                  <Link to={"/Route/" + bookings._id}>
                    <BookingButton>Edit</BookingButton>
                  </Link>
                </td>
            
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={"/AddRoute"}>
          <BookingButton>Add</BookingButton>
        </Link>
      </div>
    </div>

    </div>
<Footer/>
</div>

  );
};
const mapDispatchToProps = {
  setBookings: actions.setBookings
 
};

const mapStateToProps = (state: IGlobalState) => ({
  token: state.token,
  bookings: state.bookings
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteBookings);
