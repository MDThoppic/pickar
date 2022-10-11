import axios from 'axios';
import React, { useState } from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'
import Order from '../Headers/Order'

function Neworder() {
    let bookurl = "http://localhost:3001/booking";

    const [radiovalue, setradiovalue] = useState('Oneway');
    const [checked, setchecked] = useState(false);


    const [booking, setBooking] = useState({
        isbookingstatus:"overcall",
        name: "",
        // name1: "",
        // phone: "",
        phoneno: "",
        from: "",
        to: "",
        date: "",
        time: "",
        Seaters: "",
        vehicletype: "",
        checked: "",
        return:"",
        women:""
    
        // checked ?
        // othername:"",
        // otherphone:""
        // :null
    });
    const changeHolder = e => {
        setBooking({
            booking,
            [e.target.name]:
                e.currenttarget.value
        });

    }

    const radios = [
        { name: 'Oneway', value: 'Oneway' },
        { name: 'Round', value: 'Round' }
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
        const item = { booking, radiovalue }
        axios.post(bookurl, item)
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
                                            <div>
                                                {
                                                   !radiovalue % 2 ?
                                                        <div>
                                                            <div className="mb-3">
                                                                <label>return date</label>
                                                                <input
                                                                    type="date"
                                                                    className="form-control "
                                                                    placeholder=""
                                                                    name='return'
                                                                    onChange={handlesubmit}
                                                                    required
                                                                />
                                                            </div>

                                                        </div>
                                                        : null


                                                }
                                            </div>
                                        </>


                                    ))}
                                </ButtonGroup >

                            </div>


                            <div className='mb-3 d-flex '>
                                <label className=' me-3'>Select Vehice Type :   </label>
                                <select className='form-control' name='vehicletype' id='vehicle'
                                    onChange={handlesubmit}
                                >
                                    <optgroup label='types of vehicle'>
                                        <option>select type</option>
                                        <option value='Hatchback'>Hatch back</option>
                                        <option value='sedan'>Sedan</option>
                                        <option value='Muv'>Muv</option>
                                        <option value='Suv'>Suv</option>
                                        <option value='auto'>Auto</option>

                                    </optgroup>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label>Seaters</label>
                                <input
                                    type="number"
                                    className="form-control "
                                    placeholder="Total Seater"
                                    name='Seaters'
                                    onChange={handlesubmit}
                                // required
                                />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input"
                                    type="checkbox" value=""
                                    id="flexCheckChecked"
                                    name='women'
                                    onChange={handlesubmit} />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    isSinglewomen
                                </label>
                            </div>

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="customCheck2"
                                    value={checked}
                                    onChange={() => setchecked(!checked)}
                                />
                                <label className="form-check-label" htmlFor="customCheck2">
                                    Is bookingForOther
                                </label>
                            </div>


                            {
                                checked ?
                                    <div className='border m-3'>
                                        <div className=' m-5'>
                                            <input type="number"
                                                className='form-control'
                                                placeholder='Enter his/her Phone number'
                                                name='otherphone'
                                                onChange={changeHolder}
                                                required
                                            />
                                            <input type="text"
                                                className="form-control mt-4"
                                                placeholder='Enter his/her Name'
                                                name='othername'
                                                onChange={changeHolder}
                                                required
                                            />
                                        </div>
                                    </div> : null
                            }
                            <div className="mt-3">
                                <label >
                                    Pickaar commission
                                </label><br />
                                <textarea className='form-control' required />
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