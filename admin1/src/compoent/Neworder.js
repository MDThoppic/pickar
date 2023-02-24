import { Switch } from 'antd';
import axios from 'axios';
import React, { useState } from 'react'
import Order from '../Headers/Order'

function Neworder() {
    let bookurl = "http://localhost:3001/booking";

    const [radiovalue, setradiovalue] = useState('');
    const [checked, setchecked] = useState(false);


    const [booking, setBooking] = useState({
        isbookingstatus: "overcall",
        name: "",
        phoneno: "",
        from: "",
        to: "",
        date: "",
        time: "",
        Seaters: "",
        vehicletype: "",
        returnDate: "",
        singleWomen: "",
        toggle:"",
        othername:"",
        otherphone:""
        
    });
   
    const radio = () => {
        radiovalue ? setradiovalue(false) : setradiovalue(true);
    }

    
    const handlesubmit = (e) => {
        const { name, value } = e.currentTarget;
        setBooking((prev) => {
            return { ...prev, [name]: value };
        })
        // console.log(e.target);
    };

    const bookingsubmit = (e) => {
        e.preventDefault(false);
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
                <div className="row d-flex justify-content-start">
                    <div className="col-md-5  p-4 m-5 border-none border-dark rounded bg-light d-inline-block
">
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
                            <div className="mb-3 ml-3">
                                <label className='me-5'>Select Trip Type</label>
                                <><Switch onClick={radio} /></>
                            </div>
                            <div className='m-3'>


                                <>
                                    {radiovalue ? <span onChange={handlesubmit} >Round
                                        <div>
                                            <div className="mb-3">
                                                <label>Return date</label>
                                                <input
                                                    type="date"
                                                    className="form-control "
                                                    placeholder=""
                                                    name='returnDate'
                                                    onChange={handlesubmit}
                                                    required
                                                />
                                            </div>

                                        </div>
                                    </span> :<span onChange={handlesubmit}>oneway</span>}
                                </>
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
                                required
                                />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input"
                                    type="checkbox" value="singleWomen"
                                    id="flexCheckChecked"
                                    name='singleWomen'
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
                                                onChange={handlesubmit}
                                                required
                                            />
                                            <input type="text"
                                                className="form-control mt-4"
                                                placeholder='Enter his/her Name'
                                                name='othername'
                                                onChange={handlesubmit}
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