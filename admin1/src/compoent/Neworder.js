import axios from 'axios';
import React, { useState } from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'
import Order from '../Headers/Order'

function Neworder() {
    let bookurl = "http://localhost:3001/booking";

    const [radiovalue, setradiovalue] = useState('Oneway');


    const [booking, setBooking] = useState({
        name: "",
        phoneno: "",
        from: "",
        to: "",
        date: "",
        time: "",
        // radiovalue: "",
        vehicletype: ""
    });

    const radios = [
        { name: 'Oneway', value: 'Oneway' },
        { name: 'Round', value: 'Round' },

    ];
    const handlesubmit = (e) => {
        const { name, value } = e.currentTarget;
        setBooking((prev) => {
            return { ...prev, [name]: value };
        })
        // console.log(e.target);
    };
    const bookingsubmit = (e) => {
        e.preventDefault();
        console.log(booking);
        const item = { radiovalue, booking }
        axios.post(bookurl,[{ item}])
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    };
    return (
        <div>
            <Order />
            <div className="container m-3 ">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5  p-4 m-5 border">
                        <form className='' onSubmit={bookingsubmit} >
                            <h3 className='text-center '>BOOKING</h3>
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
                                <label>PickupAddress</label>
                                <input
                                    type="text"
                                    className="form-control "
                                    placeholder="From"
                                    name='from'
                                    onChange={handlesubmit}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label>DropAddress</label>
                                <input
                                    type="text"
                                    className="form-control "
                                    placeholder="To"
                                    name='to'
                                    onChange={handlesubmit}
                                    required
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
                                    required
                                    onChange={handlesubmit}
                                />
                                <input
                                    type="time"
                                    className=""
                                    placeholder=""
                                    name='time'
                                    required
                                    onChange={handlesubmit}
                                />
                            </div>
                            <div className="mb-3">
                                <label>Select Trip Type</label>
                            </div>
                            <div className='m-3'>
                                <ButtonGroup className='d-flex' >
                                    {radios.map((radio, idx) => (
                                        <>

                                            <ToggleButton
                                                key={idx}
                                                id={`radio-${idx}`}
                                                type="radio"
                                                // variant="secondary"
                                                variant={idx % 2 ? 'outline-primary' : 'outline-success'}
                                                name='radio'
                                                value={radio.value}
                                                checked={radiovalue === radio.value}
                                                onChange={(e) => setradiovalue(e.currentTarget.value)}
                                            // onChange={handlesubmit}

                                            >


                                                {radio.name}


                                            </ToggleButton>
                                        </>

                                    ))}
                                </ButtonGroup >

                            </div>

                            <div className='mb-3 d-flex '>
                                <label className=' me-3'>Select Vehice Type :   </label>
                                <select classname='form-control' name='vehicletype' id='vehicle'
                                    onChange={handlesubmit}
                                >
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
                                <button type="submit" className="btn btn-primary"  >
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

export default Neworder