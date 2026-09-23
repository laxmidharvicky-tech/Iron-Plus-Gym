import React from "react";
import heroimage from "../assets/hero-image.jpg";

function About() {
  return (
    <section
      id="About"
      className="relative overflow-hidden bg-slate-900 py-20 sm:py-24 md:py-28"
    >
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-red-600/10 blur-3xl"></div>

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-red-600/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-red-600/20 blur-2xl"></div>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800 p-2 shadow-2xl">
              <img
                src={heroimage}
                alt="Iron Plus Gym"
                className="h-72 w-full rounded-xl object-cover transition duration-700 ease-out group-hover:scale-105 sm:h-96 md:h-[500px]"
              />
              <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 rounded-xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-md transition duration-500 group-hover:-translate-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-red-500">
                  Iron Plus Gym
                </p>

                <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                  Build Your Strength
                </h3>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
           
            <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
              <span className="h-px w-8 bg-red-500"></span>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                About Iron Plus
              </p>
            </div>
            <h2 className="mb-6 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              More Than <span className="text-red-500">A Gym</span>
            </h2>
            <p className="mb-5 text-sm leading-7 text-slate-400 sm:text-base">
              Iron Plus Gym is a place where beginners and experienced athletes
              can train, improve their strength, and build a healthier
              lifestyle.
            </p>

            <p className="mb-8 text-sm leading-7 text-slate-400 sm:text-base">
              Our goal is simple — provide the right environment, quality
              equipment, and guidance to help you become stronger every day.
            </p>
            <div className="mb-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                  ✓
                </div>

                <span className="text-sm font-medium text-slate-300">
                  Modern Equipment
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                  ✓
                </div>

                <span className="text-sm font-medium text-slate-300">
                  Expert Trainers
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                  ✓
                </div>

                <span className="text-sm font-medium text-slate-300">
                  Flexible Programs
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                  ✓
                </div>

                <span className="text-sm font-medium text-slate-300">
                  Friendly Community
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {/* Years */}
              <div className="group rounded-xl border border-white/5 bg-slate-800/80 p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:border-red-500/30 hover:bg-slate-800 hover:shadow-lg hover:shadow-red-900/20 sm:p-5">
                <h3 className="text-2xl font-black text-red-500 transition-transform duration-300 group-hover:scale-110 sm:text-3xl">
                  5+
                </h3>

                <p className="mt-1 text-xs text-slate-400 sm:text-sm">Years</p>
              </div>
              <div className="group rounded-xl border border-white/5 bg-slate-800/80 p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:border-red-500/30 hover:bg-slate-800 hover:shadow-lg hover:shadow-red-900/20 sm:p-5">
                <h3 className="text-2xl font-black text-red-500 transition-transform duration-300 group-hover:scale-110 sm:text-3xl">
                  500+
                </h3>

                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Members
                </p>
              </div>
              <div className="group rounded-xl border border-white/5 bg-slate-800/80 p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:border-red-500/30 hover:bg-slate-800 hover:shadow-lg hover:shadow-red-900/20 sm:p-5">
                <h3 className="text-2xl font-black text-red-500 transition-transform duration-300 group-hover:scale-110 sm:text-3xl">
                  10+
                </h3>

                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Trainers
                </p>
              </div>
            </div>
          </div>
        </div>
         
      </div>
    </section>
  );
}

export default About;
