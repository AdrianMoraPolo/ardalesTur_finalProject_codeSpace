import React from "react";
import 'moment/locale/es.js'
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import { Link } from "react-router-dom";
import "../styles/Login.css"
import { BookingButton2 } from "../styles/stylesComponents2";

interface IProps { }

interface IPropsGlobal {
  setToken: (t: string) => void;
  setName: (u: string) => void;
}

const Login: React.FC<IProps & IPropsGlobal> = props => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    setError("");
  };
  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setError("");
  };

  const signIn = () => {
    fetch("http://localhost:3006/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(response => {
        console.log(response);
        if (response.ok) {
          response
            .text()
            .then(token => {
              console.log(token);
              
              props.setName(username);
              sessionStorage.setItem('token',token);
              props.setToken(token);

            });
        } else {
          setError("Usuario o Contraseña incorrectos");
        }
      })
      .catch(err => {
        setError("Usuario o Contraseña incorrectos.");
      });
  };


  return (

    <div>

      <div className="section"></div>

      
      <div className="section"></div>

      <div className="container loginbox">
        <div className="z-depth-1 row er" >

          <form className="col s12" method="post">
            <div className='row'>
              <div className='col s12'>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate inp' name='email' id='email inpu' type="text"
                  value={username}
                  onChange={updateUsername} />
                <label >Enter your email</label>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate inp' type='password' name='password' id='password inpu'
                  value={password}
                  onChange={updatePassword} />
                <label >Enter your password</label>
              </div>
              <label >
                <a className='pink-text' href='#!'><b>Forgot Password?</b></a>
              </label>
            </div>

            <br />

            <div className='row'>
            <Link to="/Admin"><BookingButton2 type='submit' name='btn_login' className='col s12 btn btn-large'
                onClick={signIn}>Login</BookingButton2></Link>
              
            </div>

          </form>
        </div>
      </div>
  
    </div>
  );
};

const mapDispatchToProps = {
  setToken: actions.setToken,
  setName: actions.setName
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
