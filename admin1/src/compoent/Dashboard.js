import React from 'react'
import { Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Home from '../Headers/Home';
import Upcoming from './Upcoming';

function Dashboard() {
    return (
        <>
            <Home />
            <div className='container mt-5'>
                <div className='d-flex justify-center m-3'>
                    <Stack gap={5} className="col-md-2 m-4  mx-auto">

                        <Link className='text-decoration-none  text-dark d-grid gap-2' to="/neworder" variant="outline-primary">
                            <Button className="text text-white" variant="outline-primary" size='lg'>NewOrder
                            </Button>
                        </Link>
                        <Link className='text-decoration-none text-dark d-grid gap-2' to="/venderdetails" variant="outline-primary">
                            <Button className="text text-white" variant="outline-primary" size='lg'>Vendors
                            </Button>
                        </Link>
                    </Stack>
                    <Stack gap={5} className="col-md-2 m-4">
                        <Link className='text-decoration-none text-dark d-grid gap-2' to="/Bookingactive" variant="outline-primary">
                            <Button className="text text-white" variant="outline-primary" size='lg'>Bookings
                            </Button>
                        </Link>
                        <Link className='text-decoration-none text-dark d-grid gap-2' to="/" variant="outline-primary">
                            <Button className="text text-white" variant="outline-primary" size='lg'>Costomers
                            </Button>
                        </Link>
                    </Stack>
                </div>
                <Upcoming />
            </div>
        </>
    )
}

export default Dashboard