import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const activeStyle = {
        color: "brown",
        textDecoration: "underline"
    }
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Nav className="me-auto mx-auto">
                    <NavLink activeStyle={activeStyle} to="/breakfast">Breakfast</NavLink>
                    <NavLink activeStyle={activeStyle} to="/lunch">Lunch</NavLink>
                    <NavLink activeStyle={activeStyle} to="/dinner">Dinner</NavLink>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;