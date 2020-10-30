import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css';


const Navb = () => {
    return (
        <div className='navbb'>
<Navbar bg="dark" variant="dark">
    <Navbar.Brand >User Contact</Navbar.Brand>
    <Nav className="mr-auto">
    <Link className='lnk' to='/'> Home </Link>
    <Link className='lnk' to='/user'>User</Link>
    </Nav>
</Navbar> 
        </div>
    )
}

export default Navb
