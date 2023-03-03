import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';




type Props = {}

const NavBar = ({ }: Props) => {

  const [activeNav, setActiveNav] = useState("#");


  return (
    <div className='mb-20'>
      <nav className="bg-slate-100/50 backdrop-blur-[10px] px-2 sm:px-4 py-4 fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto max-w-[1280px]">
          <Link to={'/'}>
            <a className="flex items-center">
              <img src='/logo.svg' className="h-12 mr-3 sm:h-[50px]" alt="Arduino Logo" />
            </a>
          </Link>
          <div className="flex lg:order-2">
            <Link to={'/register'}>
              <button type="button" className="btn-1">Register Now
              </button>
            </Link>

            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  " aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>

          <div className="items-center justify-between hidden w-full lg:ml-56 lg:flex lg:w-auto lg:order-1 " id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  lg:flex-row lg:space-x-8 lg:mt-0 text-lg lg:text-[18px] font-roboto md:border-0  items-center gap-2">
              <li>
                <Link to={'/'}>
                  <a
                    onClick={() => setActiveNav("#")}
                    className={`block py-2 pl-3 pr-4 text-30 rounded md:hover:bg-transparent md:hover:text-70 md:p-0  ${activeNav === "#" ? "text-70" : ""}  `}>
                    Home
                  </a>
                </Link>
              </li>

              <li>
                <a href="#agenda"
                  onClick={() => setActiveNav("#agenda")}
                  className={`block py-2 pl-3 pr-4 text-30 rounded md:hover:bg-transparent md:hover:text-70 md:p-0  ${activeNav === "#agenda" ? "text-70" : ""}  `}>
                  Agenda</a>
              </li>

              <li>
                <a href="#speakers"
                  onClick={() => setActiveNav("#speakers")}
                  className={`block py-2 pl-3 pr-4 text-30 rounded md:hover:bg-transparent md:hover:text-70 md:p-0  ${activeNav === "#speakers" ? "text-70" : ""}  `}>
                  Speakers</a>
              </li>

              <li>
                <a href="#sponsors"
                  onClick={() => setActiveNav("#sponsors")}
                  className={`block py-2 pl-3 pr-4 text-30 rounded md:hover:bg-transparent md:hover:text-70 md:p-0  ${activeNav === "#sponsors" ? "text-70" : ""}  `}>
                  Sponsors</a>
              </li>

              <li>
                <a href="#ourTeam"
                  onClick={() => setActiveNav("#ourTeam")}
                  className={`block py-2 pl-3 pr-4 text-30 rounded md:hover:bg-transparent md:hover:text-70 md:p-0  ${activeNav === "#ourTeam" ? "text-70" : ""}  `}>
                  Our Team</a>
              </li>

              <li>
                <a href="#contactUs"
                  onClick={() => setActiveNav("#contactUs")}
                  className={`block py-2 pl-3 pr-4 text-30 rounded md:hover:bg-transparent md:hover:text-70 md:p-0  ${activeNav === "#contactUs" ? "text-70" : ""}  `}>
                  Contact Us</a>
              </li>

            </ul>
          </div>
        </div>

      </nav>
    </div>


  );
};

export default NavBar;