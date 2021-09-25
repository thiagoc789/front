import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeCedula = this.onChangeCedula.bind(this);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeEdad = this.onChangeEdad.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      cedula: "",
      nombre: "", 
      edad: ""
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

  saveTutorial() {
    var data = {
      cedula: this.state.cedula,
      nombre: this.state.nombre,
      edad: this.state.edad
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          cedula: response.data.cedula,
          nombre: response.data.nombre,
          edad: response.data.edad,
          

          submitted: true
        });
        console.log(response.data);
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
      

      submitted: false
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newTutorial}>
                Add
              </button>
            </div>
          ) : (
            <div>
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
  
              <button onClick={this.saveTutorial} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
  }
}
