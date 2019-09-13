import React from "react";
import Home from "./views/components/Home";
import "./App.css";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import posed, { PoseGroup } from "react-pose";
import {  ParallaxProvider  } from 'react-scroll-parallax' ;   
import { connect } from "react-redux";
import * as actions from "./views/actions/actions";



interface IProps { }

interface IPropsGlobal {
  setToken: (t: string) => void;
  setName: (u: string) => void;
}

const UpdownBackground = posed.div({
  enter: {
    y: 12, opacity: 1, delay: 100,
    transition: { duration: 500 }
  },
  exit: {
    y: 60, opacity: 1,
    transition: { duration: 400 }
  }
});


const App: React.FC<IProps & IPropsGlobal> = props => {


  const [visible, scrollVisible] = React.useState(true);

  const backgroundVisibility = () => scrollVisible(v => !v);


  // componentDidMount() {    
  //   window.onscroll = () => this.handleAnimation();  
  //  };

  const token:any = sessionStorage.getItem('token');
  props.setToken(token);
  return (


    <div>

      {/* {visible && <UpdownBackground key="Booking" className="background" onScroll={backgroundVisibility}>
 */}


        <div>
        <ParallaxProvider>
          <BrowserRouter>
          
            <Home />
            {/* <Switch>
            <Route path="/Admin" exact component={Admin} />
            <Redirect to="/" />
            </Switch> */}
           
          </BrowserRouter>
          </ParallaxProvider>
          <script type="text/javascript" src="js/materialize.min.js" />
         
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/animation.gsap.js"></script>
   
   <script src="CDN OR PATH TO NODE_MODULES.js"></script>

   <script src="path/to/your/bundle.js"></script>



        </div>

{/* 
      </UpdownBackground>} */}
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
)(App);
