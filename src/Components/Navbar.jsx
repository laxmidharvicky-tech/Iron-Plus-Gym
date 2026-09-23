import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#Home"
          onClick={closeMenu}
          className="group flex items-center"
        >
          <div>
            <h1 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
              IRON{" "}
              <span className="text-red-500 transition-colors duration-300 group-hover:text-red-400">
                PLUS
              </span>
            </h1>

            <p className="text-[8px] font-bold uppercase tracking-[0.35em] text-slate-500 sm:text-[9px]">
              Train With Purpose
            </p>
          </div>
        </a>
 <div className="hidden items-center gap-7 md:flex lg:gap-9">

          <a
            href="#Home"
            className="relative py-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-red-500"
          >
            Home
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 hover:w-full"></span>
          </a>

          <a
            href="#About"
            className="py-2 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-red-500"
          >
            About
          </a>

          <a
            href="#Services"
            className="py-2 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-red-500"
          >
            Services
          </a>

          <a
            href="#Trainers"
            className="py-2 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-red-500"
          >
            Trainers
          </a>

          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:bg-red-700"
          >
            Join Now

            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xs transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>


        <button
          type="button"
          onClick={() => setMenu(!menu)}
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-lg text-white transition-all duration-300 hover:border-red-500 hover:text-red-500 md:hidden"
        >
          <FontAwesomeIcon icon={menu ? faXmark : faBars} />
        </button>

      </div>
      <div
        className={`overflow-hidden border-t border-slate-800 bg-slate-950 transition-all duration-300 md:hidden ${
          menu
            ? "max-h-96 opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >

        <div className="px-4 py-5 sm:px-6">

          <div className="flex flex-col">

            <a
              href="#Home"
              onClick={closeMenu}
              className="border-b border-slate-800 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:text-red-500"
            >
              Home
            </a>

            <a
              href="#About"
              onClick={closeMenu}
              className="border-b border-slate-800 py-4 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-red-500"
            >
              About
            </a>

            <a
              href="#Services"
              onClick={closeMenu}
              className="border-b border-slate-800 py-4 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-red-500"
            >
              Services
            </a>

            <a
              href="#Trainers"
              onClick={closeMenu}
              className="border-b border-slate-800 py-4 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-red-500"
            >
              Trainers
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-red-700"
            >
              Join Now

              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xs"
              />
            </a>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;