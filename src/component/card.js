import React, { Component } from 'react';
import './css/card_style.css';

class card extends Component {

    render() {
        let costoDescripcion;     
        if (this.props.costoEnvio == 'G') {
            this.costoDescripcion = <span className ="gratis"><img src={require(`../assets/img/camion.png`)} ></img>Envìo gratis a todo el País</span>
        }else {
            this.costoDescripcion = <span className="costo">Costo de Envio de Argentina ${this.props.costoEnvio}</span>
        }
        

        return (
            <React.Fragment>
                <div className="d-block card-container">
                    <div className="d-block">
                        <img src={require(`../assets/img/${this.props.imagen}`)} className="float-left ilustracion"></img>
                    </div>
                    <div>
                        <a href={`details/${this.props.id}`}><h4>{this.props.instrumento}</h4></a>
                        <h3>${this.props.precio}</h3>
                        <p>{this.costoDescripcion}</p>
                        <p>{this.props.cantidadVendida} vendidos</p>                        
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default card;