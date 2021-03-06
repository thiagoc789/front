
import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route } from "react-router-dom";
import SegundaPagina from "./segundaPagina.component";





export default class AddTutorial extends Component {
  
  constructor(props) {
    super(props);
    this.onChangeCedula = this.onChangeCedula.bind(this);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeEdad = this.onChangeEdad.bind(this);
    this.onChangeSexo = this.onChangeSexo.bind(this);
    this.onChangeCiudad = this.onChangeCiudad.bind(this);
    this.onChangeTelefono = this.onChangeTelefono.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    <Route exact path="/segundaPagina" component={SegundaPagina} />

    this.state = {
      cedula: "",
      nombre: "",
      edad: "",
      sexo: "",
      ciudad: "",
      telefono: ""
    };
  }

  onChangeCedula(e) {
    this.setState({
      cedula: e.target.value
    });
  }

  onChangeNombre(e) {
    this.setState({
      nombre: e.target.value
    });
  }

  onChangeEdad(e) {
    this.setState({
      edad: e.target.value
    });
  }

  onChangeSexo(e) {
    this.setState({
      sexo: e.target.value
    });
  }

  onChangeCiudad(e) {
    this.setState({
      ciudad: e.target.value
    });
  }

  onChangeTelefono(e) {
    this.setState({
      telefono: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      cedula: this.state.cedula,
      nombre: this.state.nombre,
      edad: this.state.edad,
      sexo: this.state.sexo,
      ciudad: this.state.ciudad,
      telefono: this.state.telefono,
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          cedula: response.data.cedula,
          nombre: response.data.nombre,
          edad: response.data.edad,
          sexo: response.data.sexo,
          ciudad: response.data.ciudad,
          telefono: response.data.telefono,


          submitted: true
        });
        console.log(response.data);
        window.location.href = '/segundaPagina';
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      cedula: "",
      nombre: "",
      edad: "",
      sexo: "",
      ciudad: "",
      telefono: "",


      submitted: false
    });
  }

  render() {
    
    return (
      
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
          </div>
        ) : (

          <div>
            <h3 class="text-hide">Encuesta De Caracterizaci??n</h3>
            <div className="form-group">
              <label htmlFor="cedula">Cedula</label>
              <input
                type="text"
                className="form-control"
                id="cedula"
                required
                value={this.state.cedula}
                onChange={this.onChangeCedula}
                name="cedula"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                required
                value={this.state.nombre}
                onChange={this.onChangeNombre}
                name="nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="edad">Edad</label>
              <input
                type="text"
                className="form-control"
                id="edad"
                required
                value={this.state.edad}
                onChange={this.onChangeEdad}
                name="edad"
              />
            </div>
            <p>Sexo:</p>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="Masculino"
                  checked={this.state.sexo === "Masculino"}
                  onChange={this.onChangeSexo}
                />
                Masculino
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="Femenino"
                  checked={this.state.sexo === "Femenino"}
                  onChange={this.onChangeSexo}
                />
                Femenino
              </label>
              </div>

              <div className="form-group">
              <label htmlFor="ciudad">Ciudad</label>
              <input
                type="text"
                className="form-control"
                id="ciudad"
                required
                value={this.state.ciudad}
                onChange={this.onChangeCiudad}
                name="ciudad"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Telefono</label>
              <input
                type="text"
                className="form-control"
                id="telefono"
                required
                value={this.state.telefono}
                onChange={this.onChangeTelefono}
                name="telefono"
              />
            </div>
            
            <button onClick={this.saveTutorial} className="btn btn-success">
              Siguiente Pagina
            </button>
            

        

            
          </div>
        )}
      </div>
    );
  }
}
