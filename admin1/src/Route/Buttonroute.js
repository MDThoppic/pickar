import React from 'react'
import Neworder from '../compoent/Neworder'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../compoent/Dashboard';
import Bookingactive from '../compoent/Bookingactive';
import Bookinactive from '../compoent/Bookinactive';
import Newvender from '../compoent/Newvender';
import Venderdetails from '../compoent/Venderdetails';


export const Buttonroute = () => {
    return (
        <div>
            
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/neworder' element={<Neworder />} />
                <Route path='/Bookingactive' element={<Bookingactive />} />
                <Route path='/Bookinginactive' element={<Bookinactive />} />
                <Route path='/newvender' element={<Newvender />} />
                <Route path='/venderdetails' element={<Venderdetails />} />

            </Routes>
            
        </div>
    )
}
