import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './TopBar.css';

export default function TopBar() {
  return (
    <Container fluid className="fluid">
      <Navbar className="App-header" expand="lg">
        <Navbar.Brand className="title" href="#" style={{ color: '#c98030' }}>
          SeeChange.
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
}
