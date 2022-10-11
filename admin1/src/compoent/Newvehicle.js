import React, { useState } from 'react'
import Vender from '../Headers/Vender';

export default function Newvehicle() {
    const [vehicles, setvehicles] = useState([{ vehiclename: "", vehicletype: "", licenace: "", reneval: "", perkm: "", driver: "" }])

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


    // const subimtvedner = (e) => {
    //     e.preventdefalt();
    //     console.log(vehicles);
    //     alert(JSON.stringify(vehicles));
    // }
    return (
        <div>
            <Vender />
            <div className="container m-3 ">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5  p-4 m-5 border">
                        <form className='' >
                            <h3 className='text-center text-uppercase'>ADD new vehicle</h3>
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
                                    {/* <div className="mb-3">
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
                                    </div> */}



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

                            <div className='d-flex justify-content-start'>
                                <button type="button" className="btn btn-primary" onClick={() => addFromfield()}>
                                    Add more
                                </button>
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
        </div>

    )
}
