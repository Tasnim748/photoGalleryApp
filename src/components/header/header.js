import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import './header.css';

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>
                    <NavLink to='/home' className="NavBrand">Photo Gallery</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <NavLink to="/gallery" className="NavLink">Gallery</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/account" className="NavLink">Account Info</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/credits" className="NavLink">Credits</NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

