import React from 'react'
import Neworder from '../compoent/Neworder'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../compoent/Dashboard';


export const Buttonroute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/neworder' element={<Neworder />} />
            </Routes>
        </div>
    )
}
