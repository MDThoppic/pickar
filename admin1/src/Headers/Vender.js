import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap';



export default function Vender() {
    return (
        <div>
            
            <Navbar expand="lg mx-auto" className=''>
                <Container>
                    <Navbar.Brand to="/venderdetails"><h2>Vender</h2></Navbar.Brand>
                    <Button type="Button" className="btn btn-light  justify-content-end"  >Logout</Button>

                </Container>

            </Navbar></div>
    )
}
