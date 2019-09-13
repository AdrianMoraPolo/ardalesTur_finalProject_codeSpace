import React, { useState } from "react";
import "../styles/Home.css";
// import { Route, Switch, Link, Redirect } from "react-router-dom";
// import posed, { PoseGroup } from "react-pose";
import "../styles/Booking.css";
import BackgroundHome from "./BackgroundHome";
import BackgroundTest from "./BackgroundHome";
import Contact from "./Contact";
import OtherBookings from "./OtherBookings";
import BookingDetails from "./BookingDetails";
import Admin from "./Admin";
import { Route, Redirect, Switch } from "react-router-dom";
import AddBookings from "./AddBookings";
import AddBookings2 from "./AddBookings2";
import RouteBookings from "./RouteBookings";
import BookingRouteDetails from "./BookingRouteDetails";
import ContactList from "./ContactList";


const Home: React.FC = () => {
  return (
    <div>
      <div className="BodyHome">
        <Switch>
          <Route path="/" exact component={BackgroundTest} />
          <Route path="/routes" exact component={OtherBookings} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/Admin" exact component={Admin} />
          <Route path="/Add" exact component={AddBookings} />
          <Route path="/AddRoute" exact component={AddBookings2} />
          <Route path="/Booking/:bookingId" exact component={BookingDetails} />
          <Route path="/Route/:bookingId" exact component={BookingRouteDetails} />
           <Route path="/RoutesList" exact component={RouteBookings} />
           <Route path="/ContactList" exact component={ContactList} />
         
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default Home;
