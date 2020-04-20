import React, { Component } from 'react';
import Navigation from './navigation';
import { instrumentos } from '../datos/instrumentos.json'
import Card from './card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class product extends Component {

    constructor() {
        super();
        this.state = { instrumentos };
    }

    render() {
        const instrumentos = this.state.instrumentos.map((instrumento, i) => {
            return (
                <Card
                    key={instrumento.id}
                    id={instrumento.id}
                    imagen={instrumento.imagen}
                    precio={instrumento.precio}
                    costoEnvio={instrumento.costoEnvio}
                    cantidadVendida={instrumento.cantidadVendida}
                    instrumento={instrumento.instrumento}>
                </Card>

            );
        });
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <Container fluid="md">
                    <Row>
                        {instrumentos}
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default product;