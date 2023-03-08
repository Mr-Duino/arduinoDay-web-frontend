import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import DayOneRegulations from './pages/DayOneRegulations'
import DayTwoRegulations from './pages/DayTwoRegulations'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {


  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/dayone-regulations' element={<DayOneRegulations />} />
        <Route path='/daytwo-regulations' element={<DayTwoRegulations />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}


export default App
