import React from 'react'
import { Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Home from '../Headers/Home';

function Dashboard() {
    return (
        <>
            <Home />
            <div className='container mt-5'>
                <div className='d-flex justify-center m-3'>
                    <Stack gap={5} className="col-md-2 m-4  mx-auto">

                        <Link className='text-decoration-none text-dark d-grid gap-2' to="/neworder"  variant="outline-primary">
                            <Button variant="outline-primary" size='lg'>NewOrder
                            </Button>
                        </Link>
                        <Link className='text-decoration-none text-dark d-grid gap-2' to="/venderdetails"  variant="outline-primary">
                            <Button variant="outline-primary" size='lg'>Vendors
                            </Button>
                        </Link>
                    </Stack>
                    <Stack gap={5} className="col-md-2 m-4">
                    <Link className='text-decoration-none text-dark d-grid gap-2' to="/Bookactive"  variant="outline-primary">
                            <Button variant="outline-primary" size='lg'>Bookings
                            </Button>
                        </Link>
                        <Link className='text-decoration-none text-dark d-grid gap-2' to="/"  variant="outline-primary">
                            <Button variant="outline-primary" size='lg'>Coutomers
                            </Button>
                        </Link>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default Dashboard