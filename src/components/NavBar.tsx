import React, { useState } from "react";

import IonIcon from "@reacticons/ionicons";

import { Link } from "react-router-dom";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  let [open, setOpen] = useState(false);
  return (
    <div className="mb-20">
      <div className=" w-full z-50 fixed top-0 left-0 bg-slate-100/80 backdrop-blur-[20px] py-6 lg:px-12 px-4 ">
        <div className=" lg:flex items-center justify-between mx-auto max-w-[1280px]">
          <div className="flex justify-between items-center ">
            <Link to={'/'}>
              <a>
                <img
                  src="/logo.svg"
                  className="h-12 mr-3 sm:h-[50px]"
                  alt="Arduino Logo"
                />
              </a>
            </Link>
            <div className="flex flex-row-reverse">

              <Link to={'/register'}>
                <button
                  type="button"
                  className="btn-1 mr-10 px-4 py-2  block lg:hidden"
                >
                  Register Now
                </button>
              </Link>
              <div
                onClick={() => setOpen(!open)}
                className="text-3xl absolute right-5 top-8 cursor-pointer lg:hidden"
              >
                <IonIcon
                  className="text-40"
                  name={open ? "close" : "menu"}
                ></IonIcon>
              </div>
            </div>
          </div>
          <ul
            className={`font-roboto text-[18px]  flex flex-col lg:flex-row gap-10 lg:gap-8 items-center  lg:py-0 py-12  absolute lg:static bg-slate-100/0  lg:bg-transparent lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 transition-all duration-500 ease-in-out ${open ? "top-20 " : "top-[-580px]"
              }`}
          >
            <li>
              <a
                href="#"
                onClick={() => setActiveNav("#")}
                className={`block py-2 pl-3 pr-4 text-30 rounded md:hover:bg-transparent md:hover:text-70 md:p-0  ${activeNav === "#" ? "text-70" : ""
                  }  `}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#agenda"
                onClick={() => setActiveNav("#agenda")}
                className={`block py-2 pl-3 pr-4 text-30 rounded md:hover:bg-transparent md:hover:text-70 md:p-0  ${activeNav === "#agenda" ? "text-70" : ""
                  }  `}
              >
                Agenda
              </a>
            </li>
            <li>
              <a
                href="#speakers"
                onClick={() => setActiveNav("#speakers")}
                className={`block py-2 pl-3 pr-4 text-30 rounded md:hover:bg-transparent md:hover:text-70 md:p-0  ${activeNav === "#speakers" ? "text-70" : ""
                  }  `}
              >
                Speakers
              </a>
            </li>
            <li>
              <a
                href="#sponsors"
                onClick={() => setActiveNav("#sponsors")}
                className={`block py-2 pl-3 pr-4 text-30 rounded md:hover:bg-transparent md:hover:text-70 md:p-0  ${activeNav === "#sponsors" ? "text-70" : ""
                  }  `}
              >
                Sponsors
              </a>
            </li>
            <li>
              <a
                href="#ourTeam"
                onClick={() => setActiveNav("#ourTeam")}
                className={`block py-2 pl-3 pr-4 text-30 rounded md:hover:bg-transparent md:hover:text-70 md:p-0  ${activeNav === "#ourTeam" ? "text-70" : ""
                  }  `}
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#contactUs"
                onClick={() => setActiveNav("#contactUs")}
                className={`block py-2 pl-3 pr-4 text-30 rounded md:hover:bg-transparent md:hover:text-70 md:p-0  ${activeNav === "#contactUs" ? "text-70" : ""
                  }  `}
              >
                Contact Us
              </a>
            </li>
            <Link to={'/register'}>
              <button type="button" className="btn-1 mr-1 ml-6 hidden lg:block ">
                Register Now
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
