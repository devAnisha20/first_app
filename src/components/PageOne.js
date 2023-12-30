import React from 'react'
import { Navbar, Nav,NavDropdown, Button, Container } from 'react-bootstrap'
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Satranga from '../components/img/Satranga.png'
import '../components/css/nav.css';

function PageOne() {
  return (
    <div>
         <Navbar expand='lg' bg='dark' variant='dark'>
          <Container className='container-fluid m-3'>
        <img src={Satranga} alt='Satranga' style={{height: "100px", width:"100px", borderRadius: "50%", verticalAlign: "middle"}}/>
        <Navbar.Brand href="#name" className='p-1 m-2'> Satranga
        <br/><span>Wedding Planner</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" m-5 me-auto text-white">
            <Nav.Link className='nav-link active' to="/">Home</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
            {/* <Nav.Link as={Link} to="services"> */}
            <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Balloon Decoration</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Couple Entry
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mandap Decoration</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Anchoring
              </NavDropdown.Item>
            </NavDropdown>
            {/* </Nav.Link>  */}
            <Nav.Link to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav.Link to='/login'>
          <Button variant='outline-primary' className='login'>Login</Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default PageOne