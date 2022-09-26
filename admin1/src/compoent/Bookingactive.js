import React from 'react'
import Booking from '../Headers/Booking'
import Table from 'react-bootstrap/Table';
export default function Bookingactive() {



  return (
    <div>
      <Booking />
      <div>
      <h5 className=' d-flex mt-3 justify-content-center uppercase'>Active Booking</h5>

      </div>
      <div className='continer m-5'>

        <Table striped className=''>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Start Time</th>
              <th>Pickup</th>
              <th>Destination</th>
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
              <td>
                name
                9159139370
              </td>
              <td>name
                9159139370</td>
              <td>app or overcall</td>
            </tr>
            <tr>

              <td>2</td>
              <td>6:00 am</td>
              <td>chennai</td>
              <td>vellore</td>

              <td>
                name
                9159139370
              </td>
              <td>name
                9159139370</td>
              <td>app or overcall</td>
            </tr>
            <tr>

              <td>2</td>
              <td>6:00 am</td>
              <td>chennai</td>
              <td>vellore</td>

              <td>
                name
                9159139370
              </td>
              <td>name
                9159139370</td>
              <td>app or overcall</td>
            </tr>

          </tbody>
        </Table>
      </div>
    </div>
  )
}
