import React from 'react'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
const [menu, setMenu] = useState(false);
  return (
   
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#Home" className="text-xl sm:text-2xl font-extrabold">
            IRON <span className="text-red-500">PLUS GYM</span>
          </a>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#Home" className="hover:text-red-500 transition mt-2">
              Home
            </a>
            <a href="#About" className="hover:text-red-500 transition mt-2">
              About
            </a>
            <a href="#Services" className="hover:text-red-500 transition mt-2">
              Services
            </a>
            <a href="#Trainers" className="hover:text-red-500 transition mt-2">
              Trainers
            </a>
            <a
              href="#contact"
              className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg transition"
            >
              Join Now
            </a>
          </div>
          <button
            onClick={() => setMenu(!menu)}
            className="md:hidden text-2xl text-white"
          >
            <FontAwesomeIcon icon={menu ? faXmark : faBars} />
          </button>
        </div>
        {menu && (
          <div className="md:hidden bg-slate-900  border-t border-slate-800 px-6 py-5">
            <div className="flex flex-col gap-5">
              <a
                href="#Home"
                onClick={() => setMenu(false)}
                className="hover:text-red-500 transition"
              >
                Home
              </a>
              <a
                href="#About"
                onClick={() => setMenu(false)}
                className="hover:text-red-500 transition"
              >
                About
              </a>
              <a
                href="#Services"
                onClick={() => setMenu(false)}
                className="hover:text-red-500 transition"
              >
                Services
              </a>
              <a
                href="#Trainers"
                onClick={() => setMenu(false)}
                className="hover:text-red-500 transition"
              >
                Trainers
              </a>
              <a
                href="#contact"
                onClick={() => setMenu(false)}
                className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg transition"
              >
                Join Now
              </a>
            </div>
          </div>
        )}
          </nav>
          
  )
}

export default Navbar;