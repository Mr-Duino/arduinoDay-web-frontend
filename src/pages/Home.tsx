import React from 'react'
import About from '../components/About'
import Agenda from '../components/Agenda'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Speakers from '../components/Speakers'
import Sponsors from '../components/Sponsors'
import Swag from '../components/Swag'
import Teams from '../components/Teams'

type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            <Hero />
            <About />
            <Agenda />
            <Speakers />
            <Sponsors />
            <Swag />
            <Teams />
        </div>
    )
}

export default Home