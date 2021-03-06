
import React, { Component } from "react";
import GustoDataService from "../services/gusto.service";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route } from "react-router-dom";
import TerceraPagina from "./terceraPagina.component";





export default class AddTutorial extends Component {

    constructor(props) {
        super(props);
        this.onChangeEstrato = this.onChangeEstrato.bind(this);
        this.onChangeEscolaridad = this.onChangeEscolaridad.bind(this);
        this.onChangeHijos = this.onChangeHijos.bind(this);
        this.onChangeTransporte = this.onChangeTransporte.bind(this);
        this.onChangeIngresos = this.onChangeIngresos.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);
        <Route exact path="/terceraPagina" component={TerceraPagina} />

        this.state = {
            estrato: "1",
            escolaridad: "primaria",
            hijos: "0",
            transporte: "Carro",
            ingresos: "Menos de 1 SMMLV"
            
        };
    }

    onChangeEstrato(e) {
        this.setState({
            estrato: e.target.value,

        });
    }

    onChangeEscolaridad(e) {
        this.setState({
            escolaridad: e.target.value
        });
    }

    onChangeHijos(e) {
        this.setState({
            hijos: e.target.value
        });
    }

    onChangeTransporte(e) {
        this.setState({
            transporte: e.target.value
        });
    }

    onChangeIngresos(e) {
        this.setState({
            ingresos: e.target.value
        });
    }


    saveTutorial() {
        var data = {
            estrato: this.state.estrato,
            escolaridad: this.state.escolaridad,
            hijos: this.state.hijos,
            transporte: this.state.transporte,
            ingresos: this.state.ingresos,
            
        };

        GustoDataService.create(data)
            .then(response => {
                this.setState({
                    estrato: response.data.estrato,
                    escolaridad: response.data.escolaridad,
                    hijos: response.data.hijos,
                    transporte: response.data.transporte,
                    ingresos: response.data.ingresos,
                    


                    submitted: true
                });
                console.log(response.data);
                window.location.href = '/terceraPagina';
            })
            .catch(e => {
                console.log(e);
            });
    }

    newTutorial() {
        this.setState({
            estrato: "",
            escolaridad: "",
            hijos: "",
            transporte: "",
            ingresos: "",
            


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

                        <h6 class="text-hide">Nivel De Estrato Socioeconomico:    &nbsp; &nbsp;
                            <select
                                value={this.state.estrato}
                                onChange={this.onChangeEstrato}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select></h6>

                        <h6 class="text-hide">Nivel De Escolaridad:    &nbsp; &nbsp;
                            <select
                                value={this.state.escolaridad}
                                onChange={this.onChangeEscolaridad}
                            >
                                <option value="primaria">Primaria</option>
                                <option value="bachillerato">Bachillerato</option>
                                <option value="tecnico">Tecnico</option>
                                <option value="tecnologo">Tecnologo</option>
                                <option value="profesional">Profesional</option>
                                <option value="posgrado">Posgrado</option>
                                <option value="doctorado">Doctorado</option>
                            </select></h6>

                        <h6 class="text-hide">??Tiene hijos? ??Cu??ntos?     &nbsp; &nbsp;
                            <select
                                value={this.state.hijos}
                                onChange={this.onChangeHijos}
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3+">M??s de 3</option>

                            </select></h6>

                        <h6 class="text-hide">??Tiene medio de transporte propio?     &nbsp; &nbsp;
                            <select
                                value={this.state.transporte}
                                onChange={this.onChangeTransporte}
                            >
                                <option value="carro">Carro</option>
                                <option value="moto">Moto</option>
                                <option value="ambos">Ambos</option>
                                <option value="no">No tengo</option>


                            </select></h6>

                        <h6 class="text-hide">Promedio de Ingresos Mensuales     &nbsp; &nbsp;
                            <select
                                value={this.state.ingresos}
                                onChange={this.onChangeIngresos}
                            >
                                <option value="Menos de 1 SMMLV">Menos de 1 SMMLV</option>
                                <option value="Entre 1 Y 2 SMMLV">Entre 1 Y 2 SMMLV</option>
                                <option value="Entre 2 Y 3 SMMLV">Entre 2 Y 3 SMMLV</option>
                                <option value="Entre 3 Y 4 SMMLV">Entre 3 Y 4 SMMLV</option>
                                <option value="M??s de 4 SMMLV">M??s De 4 SMMLV</option>
                                


                            </select></h6>




                        <button onClick={this.saveTutorial} className="btn btn-success">
                            Siguiente Pagina
                        </button>





                    </div>
                )}
            </div>
        );
    }
}