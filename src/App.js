import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import AddTutorial from "./components/add-tutorial.component";
import SegundaPagina from "./components/segundaPagina.component";
import TerceraPagina from "./components/terceraPagina.component";
import CuartaPagina from "./components/cuartaPagina.component";


class App extends Component {

  render() {

    return (

      <div>

        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand bg-dark">
            Eventos-Choclo
          </a>
          <div className="navbar-nav mr-auto bg-dark">
          </div>

        </nav>
        <h3 class="text-hide">Eventos Choclo</h3>
        <h6 class="text-hide">¡Bienvenidos!


          Este formulario tiene como propósito conocer las diferentes actividades que realiza la población caleña y hacía qué tipo de eventos se decantan con mayor facilidad.

          ¡No te preocupes!
          Tus datos no serán compartidos con terceros, el fin de la encuesta es netamente académico😄.</h6>
        <a href="/add" >
          <button type="button" class="btn btn-primary btn-lg">Empezar Encuesta</button>
        </a>


        <Switch>
          <Route exact path="/add" component={AddTutorial} />
          <Route exact path="/segundaPagina" component={SegundaPagina} />
          <Route exact path="/terceraPagina" component={TerceraPagina} />
          <Route exact path="/cuartaPagina" component={CuartaPagina} />
        </Switch>

      </div>
    );
  }
}

export default App;

