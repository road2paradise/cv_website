import React from 'react';


import {Navbar, Nav} from 'react-bootstrap';

import './navibar.styles.scss';

const Logo = require ('../../assets/home-svgrepo-com.svg');

const Navibar = () => (
    <Navbar variant = "light" bg="light" expand="lg" >
    <Navbar.Brand href="home"> 
        <img
        src = {Logo}
        width = "25"
        height = "25"
        alt = "React Bootstrap Logo"
        />
        {" "}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Nav className="mr-auto">
        <Nav.Link className = "link-1" href="/about">About Me</Nav.Link>
        <Nav.Link className = "link-2" href="/contactus">Contact Us</Nav.Link>
    </Nav>
</Navbar>
);

export default Navibar;



