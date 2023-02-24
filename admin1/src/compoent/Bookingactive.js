import React, { useEffect,useState } from 'react'
import Booking from '../Headers/Booking'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Bookingactive() {

  const [detail, setdetails] = useState([]);
  const getBookingurl = "http://localhost:3001/booking"

  useEffect(() => {
    setTimeout(() => {
      getBooking()
    }, 3000);
  }, []);

  const getBooking = async () => {
    const data = await axios.get(getBookingurl)
      .then(res => {
        console.log(res.data);
        setdetails(res.data);
      }).catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <Booking />
      <div>
        <h5 className=' d-flex mt-3 justify-content-center uppercase text-white'>Active Booking</h5>

      </div>
      <div className='d-flex justify-content-end me-5'>

        <Button variant="outline-danger" size='lg'>
          <Link className='text-decoration-none text-white ' to="/Bookinginactive" variant="outline-primary">In Active book
          </Link>
        </Button>
      </div>
      <div className='continer m-5'>

        <Table striped className='text-white'>
          <thead>
            <tr>
              <td>Sr.no</td>
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
          {
            detail.map((arr, id, i) => {
              return <>
              <tbody>
                <tr key={i}>
                  <td>{i++}</td>
                  <td>{arr.id}</td>
                  <td>{arr.booking.date}<br />{arr.booking.time}</td>
                    <td>{arr.booking.from}</td>
                    <td>{arr.booking.to}</td>
                    <td>{arr.radiovalue}</td>
                    <td>{arr.booking.name}<br />
                      ({arr.booking.phoneno})</td>
                    
                </tr>
              </tbody>
              </>
            })
          }
        </Table>
      </div>
    </div>
  )
}
