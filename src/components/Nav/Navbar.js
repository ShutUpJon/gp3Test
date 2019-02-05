import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './nav.css';
var Logo = require('./Rlogo.png');


class CustomNavbar extends Component {
     render() {
          return (
               <Navbar bg="dark">
                    <Navbar.Brand href="#home">
                         <img
                              src={Logo}
                              width="150px"
                              height="40px"
                              className="d-inline-block align-top"
                              alt="R"
                         />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="justify-content-end" activeKey="/home">
                              <Nav.Item>
                                   <Nav.Link href="#home">Home</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                   <Nav.Link eventKey="search">Search</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                   <Nav.Link eventKey="about">About</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                   <Nav.Link eventKey="connect">Connect</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                   <Nav.Link eventKey="login">Log In</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                   <Nav.Link eventKey="register">Register</Nav.Link>
                              </Nav.Item>
                         </Nav>
                    </Navbar.Collapse>
               </Navbar>
          )
     }
}

export default CustomNavbar;