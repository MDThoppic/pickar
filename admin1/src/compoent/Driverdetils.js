import React from 'react'
import Vender from '../Headers/Vender'

function Driverdetils() {
    return (
        <div>
            <Vender />
            <div className="container m-3 ">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5  p-4 m-5 border">
                        <form className='' onSubmit={''}>
                            <h3 className='text-center text-uppercase'>ADD new Driver</h3>
                            <div className="mb-3">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control "
                                    placeholder="Name"
                                    name='name'
                                    onChange={''}
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
                                    onChange={''}
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
                                    onChange={''}
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
                                    onChange={''}
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
                                    onChange={''}
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
                                    onChange={''}
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
                                    onChange={''}
                                    required
                                />
                            </div>
                            <div className="d-grid mt-5">
                <button type="submit" className="btn btn-primary" >
                  Submit
                </button>
              </div>

                        </form>
                    </div>
                </div >
            </div >
        </div >

    )
}

export default Driverdetils