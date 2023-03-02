import React, { useState } from 'react'

type Props = {}

function Register({ }: Props) {

  const style = {
    formLableStyle: 'text-30 font-medium text-xl',
    formFieldStyle: 'border-2 border-30 rounded-md w-[100%] h-9 mt-2 md:h-12 active:border-70 focus:border-70 active:outline-none focus:outline-none text-30 font-medium px-3',

  }

  return (
    <div className='px-4 md:px-10 lg:px-20'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-70 text-8xl font-semibold lg:text-9xl'>Why</h1>
          <br />
          <h1 className='text-30 font-semibold text-4xl -mt-3 lg:text-5xl'>Should I Register ?</h1>

          <p className='text-80 text-sm font-medium my-4 lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

          {/* <button className='btn-1'>Let's Register</button> */}
        </div>
        <div className='flex justify-center mt-7'>
          <img className='object-cover' src="/register-img.png" loading='lazy' alt="Registration Background Image" />
        </div>
      </div>





      <div className='mt-10 md:flex md:justify-center'>

        <form action="">


          <div className='grid grid-cols-1 gap-8'>


            <div>
              <h4 className={style.formLableStyle}>Full Name</h4>
              <input className={style.formFieldStyle} type="text" />
            </div>



            <div>
              <h4 className={style.formLableStyle}>Email</h4>
              <input className={style.formFieldStyle} type="email" />
            </div>



            <div className='grid grid-cols-1 gap-4'>
              <div>
                <h4 className={style.formLableStyle}>Student/Undergraduate</h4>
                <div className='flex flex-row gap-5 mt-2 mb-5'>
                  <div>
                    <input
                    className=''
                      type="radio"
                      id="student-radio"
                      name="status"
                    /> <span className='text-30 font-medium text-xl'>Student</span>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="undergraduate-radio"
                      name="status"
                    /> <span className='text-30 font-medium text-xl'>Undergraduate</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className={style.formLableStyle}>School/University Name</h4>
                <input className={style.formFieldStyle} type="text" />
              </div>
            </div>




            <div>
              <h4 className={style.formLableStyle}>Phone Number</h4>
              <input className={style.formFieldStyle} type="text" />
            </div>

            <hr />

            <div>
              <h4 className={style.formLableStyle}>What is the date you are willing to participate</h4>
              <h5 className='text-30 font-normal text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h5>
              <div className='flex flex-row gap-5 mt-2'>
                <div>
                  <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                  /> <span className='text-30 font-medium text-xl'>Day 1</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                  /> <span className='text-30 font-medium text-xl'>Day 2</span>
                </div>
              </div>
            </div>



            <div>
              <h4 className={style.formLableStyle}>Are you participating in the Hackathon ?</h4>
              <h5 className='text-30 font-normal text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h5>
              <div className='flex flex-row gap-5 mt-2'>
                <div>
                  <input
                    type="radio"
                    id="subscribe"
                    name="subscribe"
                  /> <span className='text-30 font-medium text-xl'>Yes</span>
                </div>
                <div>
                  <input
                    type="radio"
                    id="subscribe"
                    name="subscribe"
                  /> <span className='text-30 font-medium text-xl'>No</span>
                </div>
              </div>
            </div>

            <hr />

            <div>
              <h4 className={style.formLableStyle}>Full Name (Member 1)</h4>
              <input className={style.formFieldStyle} type="text" />
            </div>



            <div>
              <h4 className={style.formLableStyle}>Email (Member 1)</h4>
              <input className={style.formFieldStyle} type="email" />
            </div>



            <div className='grid grid-cols-1 gap-4'>
              <div>
                <h4 className={style.formLableStyle}>Student/Undergraduate (Member 1)</h4>
                <div className='flex flex-row gap-5 mt-2 mb-5'>
                  <div>
                    <input
                      type="radio"
                      id="student-radio"
                      name="status"
                    /> <span className='text-30 font-medium text-xl'>Student</span>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="undergraduate-radio"
                      name="status"
                    /> <span className='text-30 font-medium text-xl'>Undergraduate</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className={style.formLableStyle}>School/University Name (Member 1)</h4>
                <input className={style.formFieldStyle} type="text" />
              </div>
            </div>



            <div>
              <h4 className={style.formLableStyle}>Phone Number (Member 1)</h4>
              <input className={style.formFieldStyle} type="text" />
            </div>

            <hr />

            <div>
              <h4 className={style.formLableStyle}>Full Name (Member 2)</h4>
              <input className={style.formFieldStyle} type="text" />
            </div>



            <div>
              <h4 className={style.formLableStyle}>Email (Member 2)</h4>
              <input className={style.formFieldStyle} type="email" />
            </div>



            <div className='grid grid-cols-1 gap-4'>
              <div>
                <h4 className={style.formLableStyle}>Student/Undergraduate (Member 2)</h4>
                <div className='flex flex-row gap-5 mt-2 mb-5'>
                  <div>
                    <input
                      type="radio"
                      id="student-radio"
                      name="status"
                    /> <span className='text-30 font-medium text-xl'>Student</span>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="undergraduate-radio"
                      name="status"
                    /> <span className='text-30 font-medium text-xl'>Undergraduate</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className={style.formLableStyle}>School/University Name (Member 2)</h4>
                <input className={style.formFieldStyle} type="text" />
              </div>
            </div>



            <div>
              <h4 className={style.formLableStyle}>Phone Number (Member 2)</h4>
              <input className={style.formFieldStyle} type="text" />
            </div>


          </div>

          <div className='flex items-center justify-center mt-10'>
            <button className='btn-1 mb-8'>Register</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Register