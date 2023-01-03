import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import User from './pages/User'


const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<User />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Root