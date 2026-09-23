import React from "react";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-2">

            <a
              href="#home"
              className="inline-block text-3xl font-black uppercase tracking-tight text-white transition-colors duration-300 hover:text-red-500"
            >
              IRON <span className="text-red-500">PLUS</span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
              Train with purpose. Build strength. Become the strongest
              version of yourself with Iron Plus Gym.
            </p>

            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-sm text-slate-400 transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-sm text-slate-400 transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white"
              >
                FB
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-sm text-slate-400 transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white"
              >
                YT
              </a>

            </div>

          </div>
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a
                  href="#Home"
                  className="text-sm text-slate-500 transition-colors duration-300 hover:text-red-500"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-sm text-slate-500 transition-colors duration-300 hover:text-red-500"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#Services"
                  className="text-sm text-slate-500 transition-colors duration-300 hover:text-red-500"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#trainers"
                  className="text-sm text-slate-500 transition-colors duration-300 hover:text-red-500"
                >
                  Trainers
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-slate-500 transition-colors duration-300 hover:text-red-500"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">

              <div>
                <p className="text-xs uppercase tracking-widest text-slate-600">
                  Phone
                </p>

                <a
                  href="tel:+919876543210"
                  className="mt-1 block text-sm text-slate-400 transition-colors duration-300 hover:text-red-500"
                >
                  +91 98765 43210
                </a>
              </div>


              <div>
                <p className="text-xs uppercase tracking-widest text-slate-600">
                  Email
                </p>

                <a
                  href="mailto:ironplusgym@example.com"
                  className="mt-1 block break-all text-sm text-slate-400 transition-colors duration-300 hover:text-red-500"
                >
                  ironplusgym@example.com
                </a>
              </div>


              <div>
                <p className="text-xs uppercase tracking-widest text-slate-600">
                  Opening Hours
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Mon - Sun: 5:00 AM - 10:00 PM
                </p>
              </div>

            </div>

          </div>

        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:flex-row sm:items-center sm:p-8">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              Ready to start?
            </p>

            <h3 className="mt-2 text-2xl font-black uppercase text-white sm:text-3xl">
              Your Goals. Your Grind.
            </h3>

          </div>

          <a
            href="#contact"
            className="group flex w-full items-center justify-center gap-3 rounded-lg bg-red-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-red-700 sm:w-auto"
          >
            Join Iron Plus

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p className="text-xs text-slate-600">
            © 2026 Iron Plus Gym. All rights reserved.
          </p>

          <div className="flex justify-center gap-5">

            <a
              href="#"
              className="text-xs text-slate-600 transition-colors duration-300 hover:text-red-500"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-slate-600 transition-colors duration-300 hover:text-red-500"
            >
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;