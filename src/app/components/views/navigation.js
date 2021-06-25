import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Collector App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Analog Audio </Nav.Link>
          <Nav.Link href="#features">Digital Audio</Nav.Link>
          <Nav.Link href="#pricing">Books and Print</Nav.Link>
          <Nav.Link href="#pricing">
            Graphic, Magazines, Graphic Novels
          </Nav.Link>
          <Nav.Link href="#pricing">Multimedia, DVDs, Blurays</Nav.Link>
          <Nav.Link href="#pricing">Video Games, cartridges, CDs</Nav.Link>
          <Button variant="dark">Something</Button>{" "}
        </Nav>
      </Navbar>
      <br />
    </>
  );
};

export default Navigation;
