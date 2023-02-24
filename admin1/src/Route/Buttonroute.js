import React from 'react'
import Neworder from '../compoent/Neworder'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../compoent/Dashboard';
import Bookingactive from '../compoent/Bookingactive';
import Bookinginactive from '../compoent/Bookinginactive';
import Newvender from '../compoent/Newvender';
import Venderdetails from '../compoent/Venderdetails';
import Newvehicle from '../compoent/Newvehicle';
import Driverdetils from '../compoent/Driverdetils';


export const Buttonroute = () => {
    return (
        <div>
            
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/neworder' element={<Neworder />} />
                <Route path='/Bookingactive' element={<Bookingactive />} />
                <Route path='/Bookinginactive' element={<Bookinginactive />} />
                <Route path='/newvender' element={<Newvender />} />
                <Route path='/venderdetails' element={<Venderdetails />} />
                <Route path='/addvehicle' element={<Newvehicle />} />
                <Route path='/addDriver' element={<Driverdetils />} />


            </Routes>
            
        </div>
    )
}
