import React, { Component } from 'react';
import Navigation from './navigation';
import './css/home_style.css'

class home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation>
                </Navigation>
                <div className="container alinear">
                    <h1>
                        Musical Hendrix
                    </h1>
                    <h2>
                        tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el
                        conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.

                    </h2>
                </div>
            </React.Fragment>
        );
    }
}

export default home;