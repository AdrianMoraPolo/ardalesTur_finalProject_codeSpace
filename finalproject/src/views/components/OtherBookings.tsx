import React, { useState } from "react";
import "../styles/OtherBookings.css";
import Navbar2 from "./Navbar2";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import { Element, scroller } from 'react-scroll'
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Footer from "./Footer";
//IMG
import primera from "../../img/a3.png";
import segunda from "../../img/b.png";
import tercera from "../../img/c.png";
import cuarta from "../../img/d1.png";
import quinta from "../../img/l5.jpg";
import bobastro from "../../img/arc_254077_g.jpg";
import cueva from "../../img/bobastro.jpg";
import aguilillas from "../../img/cueva.jpg";
import downbutton from "../../img/arrows.png";
//Box Pose
import BobastroBox from "./BobastroBox";
import CuevaBox from "./CuevaBox";
import AguilillasBox from "./AguilillasBox";

const ParallaxStyled = styled.div`
  .section {
    height: 100vh;
  }
  .content {
    height: 100%;
    width: 100%;
    background-color: #030000;
    z-index: 0;
    top: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav {
    position: absolute !important;
  }

  .aguilillastext {
    margin-top: 30%;
    left: 45% !important;
    cursor: pointer;
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2);
  }

  .cuevatext {
    margin-top: 30%;
    left: 45% !important;
    cursor: pointer;
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2);
  }

  .bobastrotext {
    margin-top: 30%;
    left: 45% !important;
    cursor: pointer;
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2);
  }
  .cueva {
    width: 14% !important;
    height: auto !important;
    left: 8% !important;
    top: 0% !important;
    border-radius: 2%;
    cursor: pointer;
    opacity: 1;
    transition: 0.5s ease;
  }
  .bobastro {
    width: 14% !important;
    height: auto !important;
    left: 8% !important;
    top: 25% !important;
    border-radius: 2%;
    cursor: pointer;
    opacity: 1;
    transition: 0.5s ease;
  }
  .aguilillas {
    width: 14% !important;
    height: auto !important;
    top: 50% !important;
    left: 8% !important;
    border-radius: 2%;
    cursor: pointer;
    opacity: 1;
    transition: 0.5s ease;
  }

 .downbutton{
  width:2%!important;
  height:auto!important;
  top:98% !important;
  left:45% !important;
  scale:1;
}
  .hover2{
    margin-top:45% !important;
    margin-left: 5%;
  }
  .hover2:hover .downbutton {
    opacity: 0.5;
    scale:2;
  }
  .cont1 {
    margin-top: 7% !important;
  }
  .cont2 {
    margin-top: 21% !important;
  }
  .cont3 {
    margin-top: 35% !important;
  }
  .turismo2 {
    font-family: "Montserrat", sans-serif;
    writing-mode: vertical-rl;
    margin-left: 75%;
    margin-top: 5%;
  }
  .routesdescription {
    font-weight: bold;
    width: 30%;
    margin-left: 30%;
    margin-top: -23% !important;
    font-size: 1.2rem !important;
  }
  .ardalestur2 {
    margin-left: 77% !important;
    margin-top: -40% !important;
    writing-mode: vertical-rl;
  }
  .ardalestur {
    font-family: "Montserrat", sans-serif;
    color: rgb(14, 124, 214);
    margin-left: 2%;
    margin-top: 8%;
    font-size: 3.5rem !important;
  }
  .turardales {
    font-family: "Montserrat", sans-serif;
    color: rgb(147, 202, 17);
    margin-left: 1.5%;
    margin-top: 5%;
    font-size: 3.5rem !important;
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

  .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .cont1:hover .overlay1 {
    opacity: 1;
  }

  .cont2:hover .overlay2 {
    opacity: 1;
    top: 25% !important;
  }

  .cont3:hover .overlay3 {
    opacity: 1;
    top: 50% !important;
  }
  .cont1:hover .bobastro {
    opacity: 0;
  }

  .cont2:hover .cueva {
    opacity: 0;
    top: 25% !important;
  }

  .cont3:hover .aguilillas {
    opacity: 0;
    top: 50% !important;
  }

  .overlay1 {
    position: absolute;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgb(0, 0, 0);
    height: 15%;
    width: 15%;
    left: 8%;
    top: 0% !important;
  }

  .overlay2 {
    position: absolute;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgb(0, 0, 0);
    height: 15%;
    width: 15%;
    left: 8%;
  }
  .overlay3 {
    position: absolute;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgb(0, 0, 0);
    height: 15%;
    width: 15%;
    left: 8%;
    top: ;
  }

  .parallax {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    img {
      top: -3%;
      width: 100%;
      height: 110%;
      position: absolute;
    }
    h3 {
      position: absolute;
      left: 43%;
      text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.5);
      font-family: "Montserrat", sans-serif;
    }
  }
`;
const D1Black = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 100,
    transition: { duration: 500 }
  },
  exit: {
    y: "100%",
    opacity: 1,
    transition: { duration: 400 }
  }
});

const Contact: React.FC = () => {
  const [selected, setSelected] = React.useState(-1);

  const toggle1Visibility = () => setSelected(0);

  const toggle2Visibility = () => setSelected(1);

  const toggle3Visibility = () => setSelected(2);


  const scrollType2 = {
    duration: 2000,
    delay: 50,
    smooth: true,
    offset: 0
  };

  const onClickDown = () => {
    scroller.scrollTo("parallax2", scrollType2);
  }

  return (
    <div>
      <ParallaxStyled>
        <Controller>
          <Scene duration="200%" triggerHook="onEnter">
            <Timeline wrapper={<div className="parallax" />}>
              <Tween
                position="0"
                from={{
                  yPercent: -140
                }}
                to={{
                  yPercent: 40
                }}
              >
                <img src={quinta} className="img.bg" alt="" />
              </Tween>
              <Tween
                position="0"
                from={{
                  yPercent: -120
                }}
                to={{
                  yPercent: 40
                }}
              >
                <img src={cuarta} className="img.bg" alt="" />
              </Tween>
              <Tween
                position="0"
                from={{
                  yPercent: -60
                }}
                to={{
                  yPercent: 20
                }}
              >
                <img src={tercera} className="img.bg" alt="" />
              </Tween>
              <Tween
                position="0"
                from={{
                  yPercent: -20
                }}
                to={{
                  yPercent: 0
                }}
              >
                <img src={segunda} className="img.bg" alt="" />
              </Tween>
              <Tween
                position="0"
                from={{
                  yPercent: 0
                }}
                to={{
                  yPercent: 0
                }}
              >
                <img src={primera} className="img.bg" alt="" />
              </Tween>
              <Tween
                position="0"
                from={{
                  top: "-55%",
                  scale: 1.5
                }}
                to={{
                  top: "70%",
                  scale: 2
                }}
              >
                <Tween
                  position="0"
                  from={{
                    yPercent: 0
                  }}
                  to={{
                    yPercent: 40
                  }}
                >
                  <Navbar2 />
                </Tween>
                <h3>OTRAS RUTAS</h3>
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
                 <div className="hover2"><img src={downbutton} onClick={onClickDown} className="downbutton"></img></div>
                </Tween>
            </Timeline>
          </Scene>
        </Controller>
      </ParallaxStyled>
      <Element name="parallax2"> 
      <ParallaxStyled>
        <Controller>
          <Scene duration="200%" triggerHook="onEnter">
            <Timeline wrapper={<div className="parallax" />}>
              <Tween
                className=""
                position="0"
                from={{
                  top: "0%",
                  scale: 1
                }}
                to={{
                  top: "0%",
                  scale: 1
                }}
              />

              <Tween
                position="0"
                from={{
                  yPercent: 0
                }}
                to={{
                  yPercent: 0
                }}
              >
                <div className="content">
                  <div className="content-wrapper" />
                </div>
              </Tween>

              <Tween
                position="0"
                from={{
                  yPercent: 200
                }}
                to={{
                  yPercent: 50
                }}
              >
                <div className="cont1">
                  <img
                    src={bobastro}
                    onClick={toggle1Visibility}
                    className="bobastro"
                  />
                  <div className="overlay1">
                    <div
                      className="text bobastrotext"
                      onClick={toggle1Visibility}
                    >
                      Necrópolis de las Aguilillas
                    </div>
                  </div>
                </div>
              </Tween>

              <Tween
                position="0"
                from={{
                  yPercent: 200
                }}
                to={{
                  yPercent: 50
                }}
              >
                <div className="cont2">
                  <img
                    src={cueva}
                    onClick={toggle3Visibility}
                    className="cueva"
                  />
                  <div className="overlay2">
                    <div
                      className="text aguilillastext"
                      onClick={toggle3Visibility}
                    >
                      Bobastro
                    </div>
                  </div>
                </div>
              </Tween>

              <Tween
                position="0"
                from={{
                  yPercent: 200
                }}
                to={{
                  yPercent: 50
                }}
              >
                <div className="cont3">
                  <img
                    src={aguilillas}
                    onClick={toggle2Visibility}
                    className="aguilillas"
                  />

                  <div className="overlay3">
                    <div className="text cuevatext" onClick={toggle2Visibility}>
                      Cueva de Ardales
                    </div>
                  </div>
                </div>
              </Tween>

              <Tween
                position="0"
                from={{
                  yPercent: 200
                }}
                to={{
                  yPercent: 50
                }}
              >
                <h2 className="ardalestur2">
                  <span className="ardalestur">ARDALES</span>
                  <span className="turardales">TUR</span>
                </h2>
              </Tween>

              <Tween
                position="0"
                from={{
                  yPercent: -130
                }}
                to={{
                  yPercent: 100
                }}
              >
                <h5 className="turismo2">Turísmo Ecológico</h5>
              </Tween>

              <Tween
                position="0"
                from={{
                  yPercent: 0
                }}
                to={{
                  yPercent: 0
                }}
              >
                <div className="routesdescription">
                  En ARDALESTUR realizamos visitas y actividades culturales en
                  la Naturaleza y el Patrimonio Histórico del término de Ardales
                  y su entorno. Visitas guiadas con pequeños grupos a lugares
                  con alto nivel cultural. Ofertamos una variedad de distintas
                  rutas a parte de nuestra visita guiada a el Caminito del Rey.
                  A lo largo del año, dependiendo de los meses de invierno o
                  verano programamos dichas visitas a lugares como la Cueva de
                  Ardales, la cual esta abierta todo el año, las Ruinas de la
                  antigua ciudad de Bobastro o la Necrópolis de las Aguilillas,
                  situada en el término engre Ardales y Campillos.
                  <br />
                  <br />
                  Las visitas se realizan con un guias especializados y con
                  grupos aproximádos de 25 personas. Si soys un grupo con un
                  gran número de miembros no dudes en consultarnos, seguro que
                  podemos organizar tu visita de la mejor forma posible.
                  <br />
                  <br />
                  Si tienes cualquier duda sobre como reservar una visita, como
                  programarla o cuales son nuestras recomendaciones no dudes en
                  ponerte en
               
                    <a href="http://localhost:3000/Contact"> contacto </a>
                
                  con nosotros.
                  <br />
                  <br />
                  No es lo mismo visitar un lugar que recorrerlo a través del
                  tiempo.
                </div>
              </Tween>

              <PoseGroup>
                {selected === 0 && (
                  <D1Black key="Booking" className="Blackboxor">
                      <AguilillasBox />
                  </D1Black>
                )}

                {selected === 1 && (
                  <D1Black key="Booking2" className="Blackboxor">
                    <CuevaBox />
                    
                  </D1Black>
                )}

                {selected === 2 && (
                  <D1Black key="Booking3" className="Blackboxor">
                  
                    <BobastroBox />
                  </D1Black>
                )}
              </PoseGroup>
            </Timeline>
          </Scene>
        </Controller>
      </ParallaxStyled>
      </Element>
      <Footer/>
    </div>
  );
};
export default Contact;

// const Contact: React.FC = () => {

//   return (

// <div>

// <Navbar />

//       <div className="BodyHome">
//         <div className="h1">
//           <h1>CONTACTO</h1>
//         </div>
//         <div className="Booking">

//           <BookingButton className="Box">COMUNICARSE</BookingButton>

//         </div>
//       </div>
//       </div>
//   );
// };

// export default Contact;
