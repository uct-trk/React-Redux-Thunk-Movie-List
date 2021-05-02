import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbari = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand><Link to="/"><i id="imbd" className="fab fa-imdb fa-5x"></i></Link></Navbar.Brand>
            <Nav className="m-auto">
                <Nav.Link className="text-warning">Ugurcan TURK</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default Navbari

