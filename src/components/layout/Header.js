import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

const Header = ({ toggleSidebar }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Button variant="outline-secondary" onClick={toggleSidebar}>
          ☰
        </Button>
        <Navbar.Brand className="ms-3">Athreya Gurukulam</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;