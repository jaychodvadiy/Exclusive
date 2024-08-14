import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { TiHeartOutline } from "react-icons/ti";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Slider from "../slider/slider";
function Nabar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Exclusive</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
              <Nav.Link href="#action4">About</Nav.Link>
              <Nav.Link href="#action2">Sign Up</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <TiHeartOutline
                style={{ width: "50px", top: "10px", position: "relative" }}
              />
              <FaShoppingCart
                style={{ width: "50px", top: "10px", position: "relative" }}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Slider />
    </div>
  );
}

export default Nabar;
