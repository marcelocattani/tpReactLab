import React, { Component } from 'react';
import Navigation from './navigation';
import { instrumentos } from '../datos/instrumentos.json'
import './css/details_style.css'

class details extends Component {

    constructor() {
        super();
        this.state = { instrumentos };
    }

    render() {
        const idInstrumento = this.props.match.params.id;
        const instrumento = instrumentos.filter(inst => inst.id == idInstrumento)[0];

        let costoDescripcion;
        if (instrumento.costoEnvio == 'G') {
            this.costoDescripcion = <span className="gratis"><img src={require(`../assets/img/camion.png`)} ></img>Envìo gratis a todo el País</span>
        } else {
            this.costoDescripcion = <span className="costo">Costo de Envio de Argentina ${instrumento.costoEnvio}</span>
        }

        return (
            <React.Fragment>
                <Navigation></Navigation>
                <div class="todo">
                    <div className="contenedor-detalle">
                        <div className="contenedor-imagen">
                            <img src={require(`../assets/img/${instrumento.imagen}`)}></img>
                            <div className="contenedor-descripcion">
                                <p>Descipción</p>
                                <p>{instrumento.descripcion}</p>
                            </div>
                        </div>
                        <a className="link-volver" href="/products">
                            <h2>volver</h2>
                         </a>
                    </div>
                    <div className="contenedor-datos">
                        <p className="cantidadVendida">{instrumento.cantidadVendida} vendidos</p>
                        <h3>{instrumento.instrumento}</h3>
                        <h2>${instrumento.precio}</h2>
                        <br></br>
                        <p>Marca: {instrumento.marca}</p>
                        <p>Modelo: {instrumento.modelo}</p>
                        <p>Costo Envio</p>
                        <p>{this.costoDescripcion}</p>
                        <br></br>
                        <button class="añadir-btn">
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default details;