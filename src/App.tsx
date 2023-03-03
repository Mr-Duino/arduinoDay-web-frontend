import './App.css'
import About from './components/About'
import Agenda from './components/Agenda'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Speakers from './components/Speakers'
import Sponsors from './components/Sponsors'
import Swag from './components/Swag'
import Teams from './components/Teams'

import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}


export default App
