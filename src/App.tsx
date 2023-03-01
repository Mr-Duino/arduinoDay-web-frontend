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

function App() {

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Agenda />
      <Speakers />
      <Sponsors />
      <Swag />
      <Teams />
      <Footer />
    </div>
  )
}

export default App
