import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Protected from './components/Protected/Protected'
import Login from './pages/Login'

import User from './pages/User'


const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Protected Component={User} />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Root