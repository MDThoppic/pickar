import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Vender from '../Headers/Vender'


export default function Newvender() {
  const[vender,setvender]=useState([{name: "", phoneno: "", lot: "", addr: "", age: "", Experience: "", Language: ""}])
 
  const handlesubmit = (e) => {
    const { name, value } = e.currentTarget;
    setvender((prev) => {
        return { ...prev, [name]: value };
    })
    // console.log(e.target);
};
const subimtvedner = (e) => {
  e.preventdefalt();
  console.log(vender);
  // alert(JSON.stringify(vehicles));
}
  
  return (
    <div>
      <Vender />
      <div className="container m-3 ">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5  p-4 m-5 border">
            <form className='' onSubmit={subimtvedner}>
              <h3 className='text-center text-uppercase'>ADD new Vender</h3>
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Name"
                  name='name'
                  onChange={handlesubmit}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Phone No</label>
                <input
                  type="number"
                  className="form-control "
                  placeholder="Mobile number"
                  name='phoneno'
                  onChange={handlesubmit}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Location</label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Location"
                  name='lot'
                  onChange={handlesubmit}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Full address"
                  name='Addr'
                  onChange={handlesubmit}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Age</label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Age"
                  name='age'
                  onChange={handlesubmit}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Experience</label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter the Experience"
                  name='Experience'
                  onChange={handlesubmit}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Language Know</label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="know Language"
                  name='Language'
                  onChange={handlesubmit}
                  required
                />
              </div>
              {/* <div className="mb-3">
                <label></label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="full address"
                  name='Addr'
                  onChange={handlesubmit}
                  required
                />
              </div> */}
              {/* <div>
                <input type="checkbox"
                  value={Checked}
                  onChange={() => setChecked(!Checked)}
                />
                <label>Add vehicle</label>
              </div> */}
              <div className='d-flex justify-content-between'>                
                  <Link className='' to='/addvehicle'><Button >Add vehicle </Button></Link>
                  <Link className='ms-1rem' to='/addDriver'><Button >Add Driver Detils</Button></Link>                

              </div>

        
              <div className="d-grid mt-5">
                <button type="submit" className="btn btn-primary" >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

