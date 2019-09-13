import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import { IGlobalState } from "../reducers/reducer";
import { IContact } from "../interfaceIContact";
import "../styles/KingsBookings.css";
import { BookingButton3 } from "../styles/stylesComponents3";
import "react-day-picker/lib/style.css";
import NavListBookings from "./NavListBookings";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { RouteComponentProps } from "react-router";
import { DeleteContactStore } from '../actions/actions';


interface IProps {}

interface IPropsGlobal {
  token: string;
  contacts: IContact[];
  setContact: (contacts: IContact[]) => void;
  DeleteContactStore: (contactId: string) => void;
}

// console.log(DeleteContactStore)
const ContactList: React.FC<IProps & IPropsGlobal & RouteComponentProps< {contactId: string} >> = props => {
   const id = props.match.params.contactId;
  


  useEffect(() => {
    fetch("http://localhost:3006/api/contact", {
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
            .then(contact => {
              props.setContact(contact);
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

  
  const Delete = (_id: string) => {
    // console.log(_id)
    // console.log(props.token);
    fetch("http://localhost:3006/api/contact/" + _id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + props.token
      },
    })
      .then(response => {
        if (response.ok) {
      console.log('aerdasdasdasdads')
          props.DeleteContactStore(_id);
          props.history.push("/ContactList");
        } else {
          //   setError("respons.ok  error.");
        }
      })
      .catch(err => {
        // setError("Error response.");
      });
  };
  // if (!contact) {
  //   return null;
  // }
  return (
    <div className="isAdminBackground">
      <Navbar />
      <div>
        <NavListBookings />
        <div className="columns container tableta tableta7 ">
          <div className="column">
            <h3 className="titulopregruntas">Preguntas</h3>
            {props.contacts.map(contacts => (
                  <div className=" cardcontact2 darken-1" key={contacts._id}>
            <div className="row rowcontact2">

                <div className="card cardcontact3 darken-1">
                  <div className="card-content white-text">
                    <span className="card-title textcontacttocho2 contacttitle">{contacts.name} {contacts.lastname}</span>
                    <p className="textcontacttocho">
                    {contacts.textcontact}
                    </p>
                  </div>
                  <div className="card-action cardback5">
                  {/* <Link to={"/contact/" + contacts._id}> */}
                        <BookingButton3 onClick={()=>Delete(contacts._id)}>DELETE</BookingButton3>
                        
                      {/* </Link> */}

                      <i className="material-icons telo1 prefix icon-white small">phone</i>
                      <div className="telo"> {contacts.tel}</div>
               <i className="material-icons emailo1 prefix icon-white small">email</i>
                
                     <div className="emailo"> {contacts.email}</div>
                  </div>
                </div>
              </div>
              </div>
              ))}
             
             </div>
              </div>
    

       </div>  
       <Footer/>
    </div>
  );
};
const mapDispatchToProps = {
  DeleteContactStore: actions.DeleteContactStore,
  setContact: actions.setContact
};

const mapStateToProps = (state: IGlobalState) => ({
  token: state.token,
  contacts: state.contacts
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);
