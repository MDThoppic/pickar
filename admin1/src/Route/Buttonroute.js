import React from 'react'
import Neworder from '../compoent/Neworder'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../compoent/Dashboard';
import Bookingactive from '../compoent/Bookingactive';


export const Buttonroute = () => {
    return (
        <div>
            
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/neworder' element={<Neworder />} />
                <Route path='/Bookingactive' element={<Bookingactive />} />

            </Routes>
            
        </div>
    )
}
