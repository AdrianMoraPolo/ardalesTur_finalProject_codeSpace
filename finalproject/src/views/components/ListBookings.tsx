import React, { useState } from "react";
import "../styles/Home.css";
import KingsBookings from "./KingsBookings"
import { Route, Switch } from "react-router-dom";
import NavListBookings from "./NavListBookings";
import RouteBookings from "./RouteBookings";



const ListBookings: React.FC = () => {


  return (
    
      <div className="hero-body">
        <NavListBookings/>
        <div className="container has-text-centered">
   
  <Switch>
          
          <Route path="/Admin" exact component={KingsBookings} />
         
          <Route path="/RoutesList" exact component={RouteBookings} />

          <Route path="/ContactList" exact component={KingsBookings} />
          </Switch>
     
        </div>
      </div>


   
  );
};


export default ListBookings;
