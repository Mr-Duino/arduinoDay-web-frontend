import React from 'react'
import { Link } from 'react-router-dom'
import Countdown from './Countdown'

type Props = {}

function Hero({ }: Props) {
  return (
    <div className='m-5 flex flex-row justify-center items-center'>
      <div className='flex flex-col md:flex-row '>
        <div className='md:flex flex-col justify-center'>
          <h3 className='text-70 font-medium md:text-2xl'>2023 MAR 24 - 25</h3>
          <h1 className='uppercase text-30 font-bold text-7xl md:text-8xl' >Arduino Day</h1>

          <Countdown targetDate={new Date('2023-03-24T00:00:00')} />  

          <div>
            <Link to={'/register'}>
              <button className='btn-1'>Register Now</button>
            </Link>
          </div>
        </div>

        <div className='mt-8 lg:h-[500px]'>
          <img loading='lazy' src="/hero-img.png" alt="Hero Image" />
        </div>
      </div>
    </div>
  )
}

export default Hero