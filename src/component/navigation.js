import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

class navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/home">Musical Hendrix</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/maps">Donde Estamos</Nav.Link>
            <Nav.Link href="/products">Productos</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" / >
            <Button variant="outline-light" disabled>Search</Button>
          </Form>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default navigation;