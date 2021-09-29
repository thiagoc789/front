import React, { Component } from "react";
import EventoDataService from "../services/evento.service";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route } from "react-router-dom";
import CuartaPagina from "./cuartaPagina.component";





export default class AddTutorial extends Component {

    constructor(props) {
        super(props);
        this.onChangeEvento = this.onChangeEvento.bind(this);
        this.onChangeActividad = this.onChangeActividad.bind(this);
        this.onChangeTv = this.onChangeTv.bind(this);
        this.onChangeDeporte = this.onChangeDeporte.bind(this);
        this.onChangeFisica = this.onChangeFisica.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);
        <Route exact path="/cuartaPagina" component={CuartaPagina} />

        this.state = {
            evento: "",
            actividad: "",
            tv: "",
            deporte: "",
            fisica: ""
            
        };
    }

    onChangeEvento(e) {
        this.setState({
            evento: e.target.value,

        });
    }

    onChangeActividad(e) {
        this.setState({
            actividad: e.target.value
        });
    }

    onChangeTv(e) {
        this.setState({
            tv: e.target.value
        });
    }

    onChangeDeporte(e) {
        this.setState({
            deporte: e.target.value
        });
    }

    onChangeFisica(e) {
        this.setState({
            fisica: e.target.value
        });
    }


    saveTutorial() {
        var data = {
            evento: this.state.evento,
            actividad: this.state.actividad,
            tv: this.state.tv,
            deporte: this.state.deporte,
            fisica: this.state.fisica,
            
        };

        EventoDataService.create(data)
            .then(response => {
                this.setState({
                    evento: response.data.evento,
                    actividad: response.data.actividad,
                    tv: response.data.tv,
                    deporte: response.data.deporte,
                    fisica: response.data.fisica,
                    


                    submitted: true
                });
                console.log(response.data);
                window.location.href = '/cuartaPagina';
            })
            .catch(e => {
                console.log(e);
            });
    }

    newTutorial() {
        this.setState({
            evento: "",
            actividad: "",
            tv: "",
            deporte: "",
            fisica: "",
            


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

                        <h6 class="text-hide">A que evento asistiria usted en la ciudad de Cali:    &nbsp; &nbsp;
                            <select
                                value={this.state.evento}
                                onChange={this.onChangeEvento}
                            >
                                <option value="concierto">Concierto</option>
                                <option value="teatro">Teatro</option>
                                <option value="pelicula">pelicula</option>
                                <option value="danza">Danza</option>
                                <option value="lucha libre">Lucha Libre</option>
                                <option value="ciclismo">Ciclismo</option>
                                <option value="carreras de carros o motos">Carreras De Carros O Motos</option>
                                <option value="partido de futbol">Partido de futbol</option>
                            </select></h6>

                        <h6 class="text-hide">En cual actividad invierte la mayor parte de su tiempo:    &nbsp; &nbsp;
                            <select
                                value={this.state.actividad}
                                onChange={this.onChangeActividad}
                            >
                                <option value="trabajar">Trabajar</option>
                                <option value="musica">Escuchar Musica</option>
                                <option value="estudiar">Estudiar</option>
                                <option value="jugar videojuegos">Jugar Videojuegos</option>
                                <option value="ver series">Ver Series</option>
                                <option value="redes sociales">Redes Sociales</option>
                                <option value="ver videos">Ver Videos</option>
                                <option value="hacer ejercicio">Hacer Ejercicio</option>
                            </select></h6>

                        <h6 class="text-hide">Cual es el tipo de contenido que suele ver en television     &nbsp; &nbsp;
                            <select
                                value={this.state.tv}
                                onChange={this.onChangeTv}
                            >
                                <option value="musica">Musica</option>
                                <option value="peliculas">Peliculas</option>
                                <option value="cultura">Culturales</option>
                                <option value="lucha libre">Lucha Libre</option>
                                <option value="futbol">Futbol</option>
                                <option value="carreras">Carreras</option>
                                <option value="ciclismo">Ciclismo</option>

                            </select></h6>

                        <h6 class="text-hide">¿Le interesa o practica algun deporte?     &nbsp; &nbsp;
                            <select
                                value={this.state.deporte}
                                onChange={this.onChangeDeporte}
                            >
                                <option value="futbol">futbol</option>
                                <option value="baloncesto">baloncesto</option>
                                <option value="ajedrez">ajedrez</option>
                                <option value="voleyball">voleyball</option>
                                <option value="tenis">tenis</option>
                                <option value="patinaje">patinaje</option>
                                <option value="natacion">natacion</option>
                                <option value="ninguno">Ninguno</option>


                            </select></h6>

                        <h6 class="text-hide">¿Practica alguna actividad física activamente?     &nbsp; &nbsp;
                            <select
                                value={this.state.fisica}
                                onChange={this.onChangeFisica}
                            >
                                <option value="caminar">Caminar</option>
                                <option value="correr">Correr</option>
                                <option value="yoga">Yoga</option>
                                <option value="aerobicos">Aerobicos</option>
                                <option value="calistenia">Calistenia</option>
                                <option value="crossfit">Crossfit</option>
                                <option value="ninguna">Ninguna</option>
                                


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