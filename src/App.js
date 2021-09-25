import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            Eventos-Choclo
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Empezar Encuesta
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            
            <Route exact path="/add" component={AddTutorial} />
            
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

