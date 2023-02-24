import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap';

export default function Order() {
    return (
        <div>
            <Navbar expand="lg" >
                <Container>
                    <Navbar.Brand className='d-line-block text-light' to=''><h2>New Order</h2></Navbar.Brand>
                    <Button type="Button" className="btn btn-light  justify-content-end"  >Logout</Button>
                </Container>
            
            </Navbar>
        </div>
    )
}
