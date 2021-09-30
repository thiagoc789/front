import React, { Component } from "react";
import TiempoDataService from "../services/tiempo.service";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route } from "react-router-dom";
import QuintaPagina from "./quintaPagina.component";





export default class AddTutorial extends Component {

    constructor(props) {
        super(props);
        this.onChangeTiempom = this.onChangeTiempom.bind(this);
        this.onChangeGenerom = this.onChangeGenerom.bind(this);
        this.onChangeTiempop = this.onChangeTiempop.bind(this);
        this.onChangeGenerop = this.onChangeGenerop.bind(this);
        this.onChangeTiempod = this.onChangeTiempod.bind(this);
        this.onChangeEquipo = this.onChangeEquipo.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);
        <Route exact path="/quintaPagina" component={QuintaPagina} />

        this.state = {
            tiempom: "Menos de 1 hora",
            generom: "rock",
            tiempop: "Menos de 1 hora",
            generop: "accion",
            tiempod: "Menos de 1 hora",
            equipo: "cali",

        };
    }

    onChangeTiempom(e) {
        this.setState({
            tiempom: e.target.value,

        });
    }

    onChangeGenerom(e) {
        this.setState({
            generom: e.target.value
        });
    }

    onChangeTiempop(e) {
        this.setState({
            tiempop: e.target.value
        });
    }

    onChangeGenerop(e) {
        this.setState({
            generop: e.target.value
        });
    }

    onChangeTiempod(e) {
        this.setState({
            tiempod: e.target.value
        });


    }

    onChangeEquipo(e) {
        this.setState({
            equipo: e.target.value
        });


    }


    saveTutorial() {
        var data = {
            tiempom: this.state.tiempom,
            generom: this.state.generom,
            tiempop: this.state.tiempop,
            generop: this.state.generop,
            tiempod: this.state.tiempod,
            equipo: this.state.equipo,

        };

        TiempoDataService.create(data)
            .then(response => {
                this.setState({
                    tiempom: response.data.tiempom,
                    generom: response.data.generom,
                    tiempop: response.data.tiempop,
                    generop: response.data.generop,
                    tiempod: response.data.tiempod,
                    equipo: response.data.equipo,



                    submitted: true
                });
                console.log(response.data);
                window.location.href = '/quintaPagina';
            })
            .catch(e => {
                console.log(e);
            });
    }

    newTutorial() {
        this.setState({

            tiempom: "",
            generom: "",
            tiempop: "",
            generop: "",
            tiempod: "",
            equipo: "",



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

                        <h6 class="text-hide">En promedio ¿Cuánto tiempo al día dedica a escuchar música?     &nbsp; &nbsp;
                            <select
                                value={this.state.tiempom}
                                onChange={this.onChangeTiempom}
                            >
                                <option value="Menos de 1 hora">Menos de 1 hora</option>
                                <option value="Entre 1 a 3 horas">De 1 a 3 Horas</option>
                                <option value="Entre 4 a 6 horas">De 4 a 6 Horas</option>
                                <option value="Entre 7 a 9 horas">De 7 a 9 Horas</option>
                                <option value="Mas de 9 horas">Más de 9 Horas</option>
                            </select></h6>

                        <h6 class="text-hide">¿Qué genero musical prefiere?    &nbsp; &nbsp;
                            <select
                                value={this.state.generom}
                                onChange={this.onChangeGenerom}
                            >
                                <option value="rock">Rock</option>
                                <option value="reggaeton">Reggaeton</option>
                                <option value="electronica">Electronica</option>
                                <option value="salsa">Salsa</option>
                                <option value="vallenato">Vallenato</option>
                                <option value="pop">Pop</option>
                                <option value="despecho">Despecho</option>

                            </select></h6>

                            <h6 class="text-hide">En promedio ¿Cuánto tiempo al día dedica a ver peliculas?     &nbsp; &nbsp;
                            <select
                                value={this.state.tiempop}
                                onChange={this.onChangeTiempop}
                            >
                                <option value="Menos de 1 hora">Menos de 1 hora</option>
                                <option value="Entre 1 a 3 horas">De 1 a 3 Horas</option>
                                <option value="Entre 4 a 6 horas">De 4 a 6 Horas</option>
                                <option value="Entre 7 a 9 horas">De 7 a 9 Horas</option>
                                <option value="Mas de 9 horas">Más de 9 Horas</option>
                            </select></h6>

                            <h6 class="text-hide">¿Qué genero de peliculas prefiere?    &nbsp; &nbsp;
                            <select
                                value={this.state.generop}
                                onChange={this.onChangeGenerop}
                            >
                                <option value="accion">Accion</option>
                                <option value="aventura">Aventura</option>
                                <option value="ciencia ficcion">Ciencia Ficcion</option>
                                <option value="comedia">Comedia</option>
                                <option value="terror">Terror</option>
                                <option value="romantico">Romantico</option>

                            </select></h6>

                            <h6 class="text-hide">En promedio ¿Cuánto tiempo al día dedica a ver futbol?     &nbsp; &nbsp;
                            <select
                                value={this.state.tiempod}
                                onChange={this.onChangeTiempod}
                            >
                                <option value="menos de 1 hora">Menos de 1 hora</option>
                                <option value="Entre 1 a 3 horas">De 1 a 3 Horas</option>
                                <option value="Entre 4 a 6 horas">De 4 a 6 Horas</option>
                                <option value="Entre 7 a 9 horas">De 7 a 9 Horas</option>
                                <option value="Mas de 9 horas">Más de 9 Horas</option>
                            </select></h6>

                            <h6 class="text-hide">¿Cual es su equipo de futbol favorito?     &nbsp; &nbsp;
                            <select
                                value={this.state.equipo}
                                onChange={this.onChangeEquipo}
                            >
                                <option value="cali">Cali</option>
                                <option value="america">America</option>
                                <option value="nacional">Nacional</option>
                                <option value="medellin">Medellin</option>
                                <option value="millonarios">Millonarios</option>
                                <option value="santa fe">Santa Fe</option>
                                <option value="otro">Otro</option>
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