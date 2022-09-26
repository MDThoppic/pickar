import React from 'react'
import Order from '../Headers/Order'

function Neworder() {


    return (
        <div>
            <Order />
            <div className="container m-3 ">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5  p-4 m-5 border">
                        <form className='' onClick={''}>
                            <h3 className='text-center '>BOOKING</h3>
                            <div className="mb-3">
                                <label>---------PickupAddress---------</label>
                                <input
                                    type="text"
                                    className="form-control "
                                    placeholder="From"
                                    name='from'
                                    onChange={''}
                                    required=""
                                />
                            </div>
                            <div className="mb-3">
                                <label>---------DropAddress---------</label>
                                <input
                                    type="text"
                                    className="form-control "
                                    placeholder="To"
                                    name='from'
                                    onChange={''}
                                    required=""
                                />
                            </div>
                            <div className="mb-3">
                                <label>Select Pickup Date & Time</label>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="date"
                                    className="me-4"
                                    placeholder=""
                                    name='date'
                                    required="enter"
                                    onChange={''}
                                />
                                <input
                                    type="time"
                                    className=""
                                    placeholder=""
                                    name='time'
                                    required="enter"
                                    onChange={''} />
                            </div>
                            <div className="mb-3">
                                <label>Select Trip Type</label>
                            </div>
                            <div className='mb-3 text-center btn-group btn-group-md '>
                                <button type="button" className=" ">
                                    one way
                                </button>
                                <button type="button" className=" " >
                                    Round
                                </button>
                            </div>

                            <div className='mb-3 d-flex '>
                                <label className=' me-3'>Select Vehice Type :   </label>
                                <select classname='form-control' name='vehicletype' id='vehicle'>
                                    <optgroup label='types of vehicle'>
                                        <option value='Hatchback'>Hatch back</option>
                                        <option value='sedan'>Sedan</option>
                                        <option value='Muv'>Muv</option>
                                        <option value='Suv'>Suv</option>
                                        <option value='auto'>Auto</option>

                                    </optgroup>
                                </select>
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
    )
}

export default Neworder