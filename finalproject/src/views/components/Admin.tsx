import React, { useState } from "react";
import "../styles/Admin.css";
import Navbar from "./Navbar";
import Login from "./Login"
import ListBookings from "./ListBookings"
import { IGlobalState } from "../reducers/reducer";
import { connect } from "react-redux";
import Footer from "./Footer";

interface IProps {}

interface IPropsGlobal {
 
  token: string;
}

const Admin: React.FC<IProps & IPropsGlobal> = props => {

    return (
        <div className="isAdminBackground">
            <Navbar/>

            {props.token && <ListBookings />}
        {!props.token && <Login />}
        <Footer/>
        </div>
        
    );
};

const mapStateToProps = (state: IGlobalState) => ({
    token: state.token
  });
  
  export default connect(mapStateToProps)(Admin);