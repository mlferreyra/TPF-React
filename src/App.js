import React, {Component} from 'react';
import './App.css';
import Header from './componentes/Header';
import Mascotas from './componentes/Mascotas';
import Detalle from './componentes/Detalle';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Footer from './componentes/Footer';


class App extends Component{

  render(){
    return(      
      <Router>
        <div>
          <Header/>
          <div className="container">
            <Redirect
                from="/"
                to="/home" />
            <Switch>
              <Route
                path="/home"
                component={Mascotas} />
              <Route
                path="/detalle/:id"
                component={Detalle} />
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
