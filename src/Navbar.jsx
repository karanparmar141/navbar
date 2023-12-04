import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Nav,Container} from 'react-bootstrap';
const Header = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-black py-3 ">
      <Container>
        <Navbar.Brand className='text-white'>Karan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="ms-5" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/' className='text-white text-end'>home</Link></Nav.Link>
            <Nav.Link><Link to='/Men' className='text-white text-end'>#men</Link></Nav.Link>
            <Nav.Link><Link to='/Women' className='text-white text-end'>#Women</Link></Nav.Link>
            <Nav.Link><Link to='/Kids' className='text-white text-end'>#kids</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header