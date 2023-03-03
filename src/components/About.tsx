import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Marquee from "react-fast-marquee";


type Props = {}

function About({ }: Props) {
  return (

    <section>
      <Marquee
        gradient={false}
        speed={40}
        pauseOnClick={true}
        pauseOnHover={false}
        className='flex justify-between my-11'
      >

        <p className="mq_txt mr-11"> Artificial intelligence </p>
        <p className="mq_txt mx-11"> Robotics </p>
        <p className="mq_txt mx-11"> internet of things </p>
        <p className="mq_txt mx-11"> Artificial intelligence </p>
        <p className="mq_txt mx-11"> Robotics </p>
        <p className="mq_txt mx-11"> internet of things </p>
        <p className="mq_txt mx-11"> Artificial intelligence </p>
        <p className="mq_txt mx-11"> Robotics </p>
        <p className="mq_txt mx-11"> internet of things </p>

      </Marquee>
      <div className='flex flex-col md:flex-row gap-7 px-10 lg:flex-row justify-center'>
        <div className='flex flex-col gap-7 md:flex-col lg:flex-row'>
          <div className='md:flex md:justify-center'>
            {/* card 1 */}
            <div className="flex">
              <div
                className="block w-[100%] md:w-[30rem] rounded-lg bg-30 px-10 pt-5 pb-9">
                <h5
                  className="mb-2 text-xl font-medium text-white">
                  Lorem ipsum dolor sit amet consectetur <br /> adipiscing elit.
                </h5>
                <p className="mb-0 text-white font-light mt-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
                <button
                  type="button"
                  className="btn-2 mt-5">
                  Register Now
                </button>
              </div>
            </div>
            {/* card 1 */}
          </div>

          <div className='flex flex-col md:flex-row gap-7'>
            {/* card-2 */}
            <div className="flex">
              <a href='#'
                className="w-[100%] h-[25rem] md:w-[15rem] md:max-h-[20rem] rounded-lg border-30 border-2 px-8 pt-5 pb-9 flex justify-between card-two">
                <h5
                  className="mb-2 text-xl font-medium text-30">
                  Hackathon <br />Challenge
                </h5>
                <ArrowForwardIcon className='text-30 mt-2' />
              </a>
            </div>
            {/* card-2 */}


            {/* card-3 */}
            <div className="flex">
              <a href='#'
                className="w-[100%] h-[25rem] md:h-[20rem] md:w-[15rem] rounded-lg border-30 border-2 px-8 pt-10 pb-9 flex justify-between card-three">
              </a>
            </div>
            {/* card-3 */}
          </div>
        </div>

      </div>
    </section>

  )
}

export default About;