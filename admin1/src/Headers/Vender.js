import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap';



export default function Vender() {
    return (
        <div>
            
            <Navbar expand="lg mx-auto" className='bg-light'>
                <Container>
                    <Navbar.Brand to="/venderdetails">Vender</Navbar.Brand>
                    <Button type="Button" className="btn btn-light  justify-content-end"  >Logout</Button>

                </Container>

            </Navbar></div>
    )
}
