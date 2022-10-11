import React from 'react'
import Booking from '../Headers/Booking'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Bookingactive() {



  return (
    <div>
      <Booking />
      <div>
        <h5 className=' d-flex mt-3 justify-content-center uppercase'>Active Booking</h5>

      </div>
      <div className='d-flex justify-content-end me-5'>

        <Button variant="outline-danger" size='lg'>
          <Link className='text-decoration-none text-dark ' to="/Bookinactive" variant="outline-primary">In Active book
          </Link>
        </Button>
      </div>
      <div className='continer m-5'>

        <Table striped className=''>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Start Time</th>
              <th>Pickup</th>
              <th>Destination</th>
              <th>Trip type</th>
              <th>Customer Details</th>
              <th>Driver Details</th>
              <th>Pickup Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className=''>

              <td>1</td>
              <td>6:00 am</td>
              <td>vellore</td>
              <td>chennai</td>
              <td>one way</td>
              <td>
                name
                9159139370
              </td>
              <td>name
                9159139370</td>
              <td> overcall</td>
            </tr>
            <tr>

              <td>2</td>
              <td>6:00 am</td>
              <td>chennai</td>
              <td>vellore</td>
              <td>one way</td>
              <td>
                name
                9159139370
              </td>
              <td>name
                9159139370</td>
              <td>app </td>
            </tr>
            <tr>

              <td>2</td>
              <td>6:00 am</td>
              <td>chennai</td>
              <td>vellore</td>
              <td>Round</td>
              <td>
                name
                9159139370
              </td>
              <td>name
                9159139370</td>
              <td>app </td>
            </tr>

          </tbody>
        </Table>
      </div>
    </div>
  )
}
