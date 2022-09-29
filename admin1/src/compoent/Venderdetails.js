import React from 'react'
import Vender from '../Headers/Vender'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Venderdetails() {
    return (
        <div>
            <Vender />
            <h5 className=' d-flex justify-content-center mt-3'>Vender List</h5>
            <div className='d-flex justify-content-end me-5'>
                <Button variant="outline-primary" size='lg'>
                    <Link className='text-decoration-none text-dark ' to="/newvender" variant="outline-primary">Add vender
                    </Link>
                </Button>
            </div>
            <div className='continer m-5'>

                <Table striped className=''>
                    <thead>
                        <tr>
                            <th>Vender ID</th>
                            <th>Name</th>
                            <th>phone</th>
                            <th>Location</th>
                            <th>Address</th>
                            <th> Vehivle</th>
                            <th>Vehicle Type</th>
                            <th>Licenace NO</th>
                            <th>Insurance Reneval Date</th>
                            <th>Fare Per KM</th>
                            <th>Driver Details</th>
                            <th>Wallet Balamce</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=''>

                            <td>1</td>
                            <td>thoppic</td>
                            <td>9159139370</td>
                            <td>vellore</td>
                            <td>32/1 muslim street pulimedu</td>
                            <td>thor</td>
                            <td>6 member</td>
                            <td>58674668561354</td>
                            <td>23/11/2050</td>
                            <td>14rs</td>
                            <td>tamil</td>
                            <td>600</td>
                        </tr>
                       

                    </tbody>
                </Table>
            </div>
        </div>
    )
}
