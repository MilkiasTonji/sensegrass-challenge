import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../auth/Login'
import Signup from '../auth/Signup'
import Dashboard from '../dashboard/Dashboard'

const MainRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes