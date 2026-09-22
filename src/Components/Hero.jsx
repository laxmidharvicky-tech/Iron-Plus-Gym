import React from 'react'
import heroimage from "../assets/hero-image-4.jpg";
function Hero() {
  return (
    <section
            id="Home"
            className="min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${heroimage})` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <p className="text-red-500 font-bold uppercase tracking-[0.25em] text-sm sm:text-base mb-4">
                Train Hard. Stay Strong.
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6">
                Build Your <span className="text-red-500">Strongest</span>Version
              </h1>
              <p className="text-slate-200 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed mb-8">
                Transform your body, build your confidence and become stronger every
                single day at Iron Plus Gym.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className=" w-full sm:w-auto inline-block bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-bold transition"
                >
                  Start Your Journey
                </a>
                <a
                  href="#Services"
                  className="w-full sm:w-auto inline-block border border-white/30 hover:bg-white hover:text-black active:bg-white active:text-black px-8 py-4 rounded-lg font-bold transition"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </section>
  )
}

export default Hero;