import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import DayOneRegulations from './pages/DayOneRegulations'
import DayTwoRegulations from './pages/DayTwoRegulations'
import HomeCall from './pages/HomeCall'
// import PrivacyPolicy from './pages/privacyPolicy'
import DMCARemoval from './pages/DMCARemoval'


function App() {


  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<HomeCall />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/dayone-regulations' element={<DayOneRegulations />} />
        <Route path='/daytwo-regulations' element={<DayTwoRegulations />} />
        {/* <Route path='/privacyPolicy' element={<PrivacyPolicy />} /> */}
        <Route path='/dmca' element={<DMCARemoval />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}


export default App
