import React, { Component } from "react";
import DineroDataService from "../services/dinero.service";
import "bootstrap/dist/css/bootstrap.min.css";






export default class AddTutorial extends Component {

    constructor(props) {
        super(props);
        this.onChangeComida = this.onChangeComida.bind(this);
        this.onChangeBebida = this.onChangeBebida.bind(this);
        this.onChangeTiempo_Disponible = this.onChangeTiempo_Disponible.bind(this);
        this.onChangeDinero = this.onChangeDinero.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);

        this.state = {
            comida: "comida rapida",
            bebida: "aguardiente",
            tiempo_disponible: "sabado",
            dinero: "Menos de 50mil",

        };
    }

    onChangeComida(e) {
        this.setState({
            comida: e.target.value,

        });
    }

    onChangeBebida(e) {
        this.setState({
            bebida: e.target.value
        });
    }

    onChangeTiempo_Disponible(e) {
        this.setState({
            tiempo_disponible: e.target.value
        });
    }

    onChangeDinero(e) {
        this.setState({
            dinero: e.target.value
        });
    }

    saveTutorial() {
        var data = {
            comida: this.state.comida,
            bebida: this.state.bebida,
            tiempo_disponible: this.state.tiempo_disponible,
            dinero: this.state.dinero,

        };

        DineroDataService.create(data)
            .then(response => {
                this.setState({
                    comida: response.data.comida,
                    bebida: response.data.bebida,
                    tiempo_disponible: response.data.tiempo_disponible,
                    dinero: response.data.dinero,

                    submitted: true
                });
                console.log(response.data);
                //window.location.href = '/cuartaPagina';
            })
            .catch(e => {
                console.log(e);
            });
    }

    newTutorial() {
        this.setState({

            comida: "",
            bebida: "",
            tiempo_disponible: "",
            dinero: "",

            submitted: false
        });
    }

    render() {

        return (

            <div className="submit-form">
                {this.state.submitted ? (
                    <div>

                    <h4 class="text-hide"> Encuesta Enviada Correctamente </h4>

                    </div>
                ) : (

                    <div>

                        <h6 class="text-hide">Cual es su tipo de comida favorita?     &nbsp; &nbsp;
                            <select
                                value={this.state.comida}
                                onChange={this.onChangeComida}
                            >
                                <option value="comida rapida">Comida rapida</option>
                                <option value="comida vegetariana">Comida Vegetariana</option>
                                <option value="comida vegana">Comida Vegana</option>
                                <option value="comida nacional">Comida Nacional</option>
                                <option value="comida internacional">Comida Internacional</option>
                            </select></h6>

                        <h6 class="text-hide">Cual es su bebida favorita?   &nbsp; &nbsp;
                            <select
                                value={this.state.bebida}
                                onChange={this.onChangeBebida}
                            >
                                <option value="aguardiente">Aguardiente</option>
                                <option value="ron">Ron</option>
                                <option value="whisky">Whisky</option>
                                <option value="vodka">Vodka</option>
                                <option value="tequila">Tequila</option>
                                <option value="Jugos hit">Jugos Hit</option>
                                <option value="gaseosa">Gaseosa</option>

                            </select></h6>

                            <h6 class="text-hide">Que dia prefiere asistir a un evento en la ciudad de Cali?     &nbsp; &nbsp;
                            <select
                                value={this.state.tiempo_disponible}
                                onChange={this.onChangeTiempo_Disponible}
                            >
                                <option value="sabado">Sabado</option>
                                <option value="domingo">Domingo</option>
                                <option value="semana">En semana</option>
                            </select></h6>

                            <h6 class="text-hide">Cuanto dinero gastaria para asistir a un evento en la ciudad de Cali?    &nbsp; &nbsp;
                            <select
                                value={this.state.dinero}
                                onChange={this.onChangeDinero}
                            >
                                <option value="Menos de 50mil">Menos de 50 mil pesos</option>
                                <option value="Entre 50 y 100mil">Entre 50 y 100 mil pesos</option>
                                <option value="Entre 100 y 200mil">Entre 100 mil y 200mil</option>
                                <option value="Mas de 200mil">Más de 200mil</option>
                            

                            </select></h6>

                        <button onClick={this.saveTutorial} className="btn btn-success">
                            Enviar Encuesta
                        </button>





                    </div>
                )}
            </div>
        );
    }
}