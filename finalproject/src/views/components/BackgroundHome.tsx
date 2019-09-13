import React from "react";
import "../styles/BackgroundHome.css";
import Navbar from "./Navbar";
import { BookingButton } from "../styles/stylesComponents";
// import { Route, Switch, Link, Redirect } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import "../styles/Booking.css";
import Rules from './Rules';
import Footer from "./Footer";
import { Link, Element, scroller } from 'react-scroll'
import rose from "../../img/vientosrosa2.png";
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import test1 from "../../img/capa1.png";
import test2 from "../../img/cap3.jpg";
import caminito1 from "../../img/caminito1.jpg";
import caminito3 from "../../img/caminito5.jpg";
import caminito2 from "../../img/caminito3.jpg";
import caminito4 from "../../img/caminito4.jpg";
import downbutton from "../../img/arrows.png";

// const Cluck = posed.button({
//   pressable: true,
//   init: { scale: 1 },
//   press: { scale: 0.8 }
// });

const ParallaxStyled = styled.div`
  .section {
    height: 100vh;
  }
.rose{
  width: 15% !important;
  height: auto !important;
  left: 43% !important;
  top: 45% !important;
}

.caminito1{
  width: 14% !important;
  height: auto !important;
  left: 24% !important;
  top: -15% !important;
  border-radius:2%;
}
.caminito2{
  width: 14% !important;
  height: auto !important;
  left: 41% !important;
  top: 15% !important;
  border-radius:2%;
}
.caminito3{
  width: 14% !important;
  height: auto !important;
  left: 58% !important;
  top: -15% !important;
  border-radius:2%;
}
.caminito4{
  width: 14% !important;
  height: auto !important;
  top: -10% !important;
  left: 75% !important;
  border-radius:2%;

}
.turismo{
  font-family: 'Montserrat', sans-serif;
  writing-mode: vertical-rl;
  margin-left:5%;
  margin-top:5%;

}
.descriptionturism{
  font-weight: bold;
  width:70%;
  margin-left:20%;
  margin-top:-4%;
  font-size: 1.2rem !important;
}
.ardalestur{
  font-family: 'Montserrat', sans-serif;
  color:rgb(14, 124, 214);
  margin-left:2%;
  margin-top:8%;
  font-size: 3.5rem !important;

}
.turardales{
  font-family: 'Montserrat', sans-serif;
  color:rgb(147, 202, 17);
  margin-left:1.5%;
  margin-top:5%;
  font-size: 3.5rem !important;
}
.downbutton{
  width:2%!important;
  height:auto!important;
  top:98% !important;
  left:45% !important;
  scale:1;
}

.hover{
  margin-top:48% !important;
}
.hover:hover .downbutton {
  opacity: 0.5;
  scale:2;
}
  .content {
    height: 100%;
    width: 100%;
    background-color: #030000;
    z-index: 0;
    top: 0%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.nav1{
  position: absolute !important;
}

  .parallax {
   
    height: 100vh;
    position: relative;
    overflow: hidden;
    img {
      top: -3%;
      width: 100vw;
      position: absolute;
      height: 110vh;
      background-position-y: 70%;
    }
    h1 {
      position: absolute;
      left: 0%;
      text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2);
      font-family: 'Montserrat', sans-serif;
      width:28%;
      font-size: 4.8rem;
      left:5%;
      top:20%;
    }
  }
`;
const LateralBlack = posed.div({
  enter: {
    x: 0, opacity: 1, delay: 100,
    transition: { duration: 500 }
  },
  exit: {
    x: "100%", opacity: 1,
    transition: { duration: 400 }
  }
});





const BackgroundTest: React.FC = () => {

  const [visible, setVisible] = React.useState(false);

  const toggleVisibility = () => setVisible(v => !v);

  const [acept, setAcept] = React.useState(false);


  const scrollType1 = {
    duration: 1500,
    delay: 50,
    smooth: true,
    offset: 0
  };

  const onClickDown = () => {
    scroller.scrollTo("parallax", scrollType1);
  }


  const updateAcept = (state: boolean) => {
    setAcept(state);
   
  };

  //POSE HACER GRANDE Y PEQUEÑO CUANDO SE SELECCIONA
  // const Box = posed.div({
  //   pressable: true,
  //   init: { scale: 1 },
  //   press: { scale: 0.8 }
  // });

  return (
    <div>
      <ParallaxStyled>
        <Controller>
          <Scene

            duration="200%"
            triggerHook="onEnter"
          >

            <Timeline
              wrapper={<div className="parallax" />}
            >


              <Tween
                position="0"
                from={{
                  yPercent: -140,
                }}
                to={{
                  yPercent: 40,
                }}
              >
                <img src={test2} className="img.bg test4" alt="" />
              </Tween>
              <Tween
                position="0"
                from={{
                  yPercent: -5,
                }}
                to={{
                  yPercent: -5,
                }}
              >
                <img src={test1} className="img.bg test4" alt="" />
              </Tween>

              <Tween className="h1"
                position="0"
                from={{
                  top: '0%',
                  scale: 1,
                }}
                to={{
                  top: '0%',
                  scale: 1,
                }}
              >

              </Tween>
              <Tween
                position="0"
                from={{
                  yPercent: 0,
                }}
                to={{
                  yPercent: 40,
                }}
              >
                <Navbar />
              </Tween>


              <Tween
                position="0"
                from={{
                  yPercent: 0,
                }}
                to={{
                  yPercent: 40,
                }}
              >
                <h1>VISITAS<br/> GUIADAS AL <br/>CAMINITO <br/>DEL REY</h1>
              </Tween>

              <div className="Booking">

                <PoseGroup>
                  {visible && <LateralBlack key="Booking" className="Blackbox">
                    <Rules />
                  </LateralBlack>}

                </PoseGroup>



                <Tween
                  position="0"
                  from={{
                    yPercent: 0,
                  }}
                  to={{
                    yPercent: 0,
                  }}
                >
                  <BookingButton id="bookingOk" className="Box bookingbuttonhome" onClick={toggleVisibility}>RESERVAR</BookingButton>
                </Tween>
                <Tween
                  position="0"
                  from={{
                    yPercent: 0,
                  }}
                  to={{
                    yPercent: 0,
                  }}
                >
                 <div className="hover"><img src={downbutton} onClick={onClickDown} className="downbutton"></img></div>
                </Tween>

              </div>
{/* 
{acept && 
  <h1>RESERVA REALIZADA</h1>} */}


            </Timeline>
          </Scene>
        </Controller>
      </ParallaxStyled>
<Element name="parallax">
      <ParallaxStyled>
        <Controller>
          <Scene

            duration="200%"
            triggerHook="onEnter"
          >

            <Timeline
              wrapper={<div className="parallax" />}
            >





              <Tween className=""
                position="0"
                from={{
                  top: '0%',
                  scale: 1,
                }}
                to={{
                  top: '0%',
                  scale: 1,
                }}
              >

              </Tween>

              <Tween
                position="0"
                from={{
                  yPercent: 0,
                }}
                to={{
                  yPercent: 0,
                }}
              >
                <div className="content">
                  <div className="content-wrapper">


                  </div>
                </div>
              </Tween>

              <Tween
                position="0"
                from={{
                  yPercent: 100,
                  delay: 5,
                  css: {
                    rotation: 180,
                  }
                }}
                to={{
                  yPercent: -25,

                  css: {
                    rotation: -60,
                  }

                }}
              >
                <img src={rose} className="rose" />



              </Tween>


              <Tween
                position="0"
                from={{
                  yPercent: 200,

                }}
                to={{
                  yPercent: 50,

                }}
              >
                <img src={caminito1} className="caminito1" />



              </Tween>

              <Tween
                position="0"
                from={{
                  yPercent: -15,

                }}
                to={{
                  yPercent: -25,

                }}
              >
                <img src={caminito2} className="caminito2" />



              </Tween>

              <Tween
                position="0"
                from={{
                  yPercent: 200,

                }}
                to={{
                  yPercent: 50,

                }}
              >
                <img src={caminito3} className="caminito3" />



              </Tween>

              <Tween
               position="0"
                from={{
                  yPercent: 200,

                }}
                to={{
                  yPercent: 0,

                }}
              >
                <img src={caminito4} className="caminito4" />



              </Tween>

              <Tween
               position="0"
                from={{
                  yPercent: 0,

                }}
                to={{
                  yPercent: 0,

                }}
              >
                <h2 className="ardalestur"><span className="ardalestur">ARDALES</span><br/>
                <span className="turardales">TUR</span></h2>
                <h3 className="turismo">Turísmo Ecológico</h3>
            <div className="descriptionturism">ARDALESTUR somos una empresa de turismo
             activo y actividades culturales en la Naturaleza y el Patrimonio Histórico
              del término de Ardales y su entorno. Visitas guiadas con pequeños grupos 
              (aprox. 25 personas). De alto interés cultural, conducidos por monitores 
              técnicos de alta cualificación: ambientalistas, biólogos, ornitólogos, 
              botánicos, arqueólogos e historiadores. Caminito del Rey, Bobastro, Cueva de Ardales... <br/><br/> 
                  <Link to="/Contact">
                    <a className="CONTACTO">Contacta </a>
                  </Link>con nosotros para saber mas sobre nuestra oferta cultural.</div>




              </Tween>



            </Timeline>
          </Scene>
        </Controller>
      </ParallaxStyled>
      </Element>
      <Footer/>
    </div>
  );
};

export default BackgroundTest;


