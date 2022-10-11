import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap';


export default function Booking() {
    return (
        <div>
            <Navbar expand="lg mx-auto" className='bg-light'>
                <Container>
                    <Navbar.Brand to="/Dashboard">Booking</Navbar.Brand>
                    
                    <Button type="Button" className="btn btn-light  justify-content-end"  >Logout</Button>

                </Container>

            </Navbar></div>
    )
}
