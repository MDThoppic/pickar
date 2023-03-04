import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Booking from '../Headers/Booking'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Bookinginactive() {

  const [detail, setdetails] = useState([]);
  const [search, setsearch] = useState('');


  let bookbackurl = "http://localhost:3001/booking";


  useEffect(() => {

    setTimeout(() => {
      getbookdata()
    }, 3000);
  }, []);

  const getbookdata = async () => {
    const data = await axios.get(bookbackurl)
      .then(res => {
        // res.json()
        console.log(res.data)
        setdetails(res.data)
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='text-white'>
      <Booking />
      <div>
        <h5 className=' d-flex mt-3 justify-content-center uppercase text-white'>In Active Booking</h5>

      </div>

      <div className='d-flex justify-content-between me-5'>
        <div className='ms-5'>
          <input type='search' placeholder='search here' onChange={e => setsearch(e.target.value)} />
        </div>
        <div>
        <Button variant="outline-success" size='lg'>
          <Link className='text-decoration-none text-dark ' to="/Bookingactive" variant="outline-primary">Active book
          </Link>
        </Button>
        </div>
      </div>
      <div className='continer m-5'>

        <Table striped className='text-white'>
          <thead>
            <tr>
              <th>Sr.No</th>
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

            detail
            // .filter((item)=>{
            //   if(search=''){
            //     return item;
            //   }
            //   else if(item.booking.date){
            //     return item;
            //   }
            // })
            .map((item, id,i) => {
              return <>
                <tbody>
                  <tr key={id}>
                    <td>{i++}</td>
                    <td>{item.id}</td>
                    <td>{item.booking.date}<br />{item.booking.time}</td>
                    <td>{item.booking.from}</td>
                    <td>{item.booking.to}</td>
                    <td>{item.radiovalue}</td>
                    <td>{item.booking.name}<br />
                      ({item.booking.phoneno})</td>
                    <td></td>
                    <td>app</td>
                    <br />
                  </tr>
                </tbody>
              </>
            })}
        </Table>
      </div>
    </div>
  );
}
