import React from "react";
import heroimage from "../assets/hero-image-4.jpg";

function Hero() {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center pt-24 pb-10 px-4 sm:px-6 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${heroimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-red-600/20 blur-3xl"></div>

      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-red-600/10 blur-3xl"></div>
      <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="animate-float mb-6 inline-block rounded-full border border-red-500/30 px-4 py-2">
    <span className="text-sm font-bold text-red-500">
      BUILD YOUR STRENGTH
    </span>
  </div>
        <div className="mb-5 flex items-center justify-center gap-3 animate-pulse">
          <span className="h-px w-10 bg-red-500"></span>

          <p className=" animate-float text-sm font-bold uppercase tracking-[0.25em] text-red-500 sm:text-base">
            Train Hard. Stay Strong.
          </p>

          <span className="h-px w-10 bg-red-500"></span>
        </div>
        <h1 className="animate-slide-right mb-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
          Build Your{" "}
          <span className="relative inline-block text-red-500">Strongest</span>
          <br className="hidden sm:block" />
          <span className="text-white"> Version</span>
        </h1>
        <p className="animate-fade-up delay-200 mx-auto mb-9 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
          Transform your body, build your confidence, and become stronger every
          single day at{" "}
          <span className="font-bold text-white">Iron Plus Gym.</span>
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group w-full rounded-lg bg-red-600 px-8 py-4 font-bold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-red-600/50 sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              Start Your Journey
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>
          <a
            href="#Services"
            className="group w-full rounded-lg border border-white/30 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black active:bg-white active:text-black sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              Explore Services
              <span className="transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
