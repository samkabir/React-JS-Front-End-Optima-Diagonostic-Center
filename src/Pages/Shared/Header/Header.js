import React from 'react';
import { Link } from 'react-router-dom';    
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect sticky="top" bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Optima Diagonostic Center</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav >
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                            <Nav.Link as={Link} to="/appointment">Appointment</Nav.Link>
                            {user?.email ? <Button onClick={logOut} className="text-white" variant="outline-dark"> {user?.displayName} Log Out <FontAwesomeIcon icon={faSignOutAlt} /></Button> :
                            <Nav.Link as={Link} to="/login">Login <FontAwesomeIcon icon={faSignInAlt} /></Nav.Link>}
                        
                        </Nav>
                    </Navbar.Collapse>    
                </Container>
            </Navbar>
        </>
    );
};

export default Header;