import React, { useState } from 'react'
import Vender from '../Headers/Vender'


export default function Newvender() {
  const [Checked, setChecked] = useState(false);
  const [vehicles, setvehicles] = useState([{ name: "", phoneno: "", lot: "", addr: "", vehiclename: "", vehicletype: "", licenace: "", reneval: "", perkm: "", driver: "" }])

  const handlechange = (i, e) => {
    let newVehicles = [...vehicles];
    newVehicles[i][e.target.name] = e.target.value;
    setvehicles(newVehicles);
    
  };

  const removeFromfield = (i) => {
    let newVehicles = [...vehicles];
    newVehicles.splice(i, 1);
    setvehicles(newVehicles)
  }

  const addFromfield = () => {
    setvehicles([...vehicles, { vehiclename: "", vehicletype: "", licenace: "", reneval: "", perkm: "", driver: "" }])
  }

  const handlesubmit = (e) => {
    const { name, value } = e.currentTarget;
    setvehicles((prev) => {
        return { ...prev, [name]: value };
    })
    // console.log(e.target);
};

  const subimtvedner = (e) => {
    e.preventdefalt();
    console.log(vehicles);
    alert(JSON.stringify(vehicles));
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
                  placeholder="name"
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
                  placeholder="mobile number"
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
                  placeholder="full address"
                  name='Addr'
                  onChange={handlesubmit}
                  required
                />
              </div>
              <div>
                <input type="checkbox"
                  value={Checked}
                  onChange={() => setChecked(!Checked)}
                />
                <label>Add vehicle</label>
              </div>

              {
                Checked ?
                  <div>
                    {vehicles.map((element, index) => (
                      <div key={index}>
                        <div className="mb-3">
                          <label>Vehicle Name</label>
                          <input
                            type="text"
                            className="form-control "
                            placeholder="vehicle name"
                            name='vehiclename'
                            value={element.vehiclename || ""}
                            onChange={e => handlechange(index, e)}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label>Vehicle type</label>
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Vihicle type"
                            name='vehicletype'
                            value={element.vehicletype || ""}
                            onChange={e => handlechange(index, e)}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label>licenace</label>
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Licenace No"
                            name='licenace'
                            value={element.licenace || ""}
                            onChange={e => handlechange(index, e)}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label>Insurance Reneval Date</label>
                          <input
                            type="date"
                            className="form-control "
                            placeholder=""
                            name='reneval'
                            value={element.reneval || ""}
                            onChange={e => handlechange(index, e)}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label>fare per KM</label>
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Enter km"
                            name='perkm'
                            value={element.perkm || ""}
                            onChange={e => handlechange(index, e)}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label>Driver Details</label>
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Enter Details"
                            name='driver'
                            value={element.driver || ""}
                            onChange={e => handlechange(index, e)}
                            required
                          />
                        </div>



                        {
                          index ?
                            <div className='center'>
                              <div className='d-flex justify-content-end '>
                                <button type='button' className=" btn btn-danger  " onClick={() => removeFromfield(index)}>Remove</button>
                              </div>
                              <span>-----------------------------------------------------------------------------</span>
                            </div> : null
                        }
                      </div>
                    ))}
                  </div>
                  : null
              }
              {
                Checked ?
                  <div className='d-flex justify-content-start'>
                    <button type="button" className="btn btn-primary" onClick={() => addFromfield()}>
                      Add more
                    </button>
                  </div>
                  : null
              }
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
  )
}
