import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap';

export default function Home() {
    return (
        <div>
            <Navbar expand="lg mx-auto" className=''>
                <Container>
                    <Navbar.Brand to="/"><h2>Dashboard{React.version}</h2></Navbar.Brand>
                    <Button type="Button" className="btn btn-light  justify-content-end"  >Logout</Button>
                </Container>            
            </Navbar>
        </div>
    )
}
