import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap';


export default function Booking() {
    return (
        <div>
            <Navbar expand="lg mx-auto" className=''>
                <Container>
                    <Navbar.Brand to="/Dashboard"><h2>Booking</h2></Navbar.Brand>
                    
                    <Button type="Button" className="btn btn-light  justify-content-end"  >Logout</Button>

                </Container>

            </Navbar></div>
    )
}
