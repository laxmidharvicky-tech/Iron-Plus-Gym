import React from "react";
import heroimage from "../assets/hero-image.jpg";

function About() {
  return (
    <section id="About" className="py-16 sm:py-20 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="w-full">
            <img src={heroimage} className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl sm:rounded-2xl"/>
          </div>
          <div className="text-center md:text-left">
            <p className="text-red-500 font-bold upparcase tracking-widest text-sm sm:text-base mb-3">About Iron Plus</p>
            <h2 className="text-3xl sm:text-4xl md:text=5xl font-black mb-5 sm:mb-6">More Than A Gym</h2>
            <p className="text-slate-400 text-sm sm:text-base leading-7 mb-5 sm:mb-6">
              Iron Plus Gym is a place where beginners and experienced athletes
              can train, improve their strength and build a healthier lifestyle.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-7 mb-5 sm:mb-6">
              Our goal is simple — provide the right environment, equipment and
              guidance to help you become stronger.
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="bg-slate-800 p-3 sm:p-5 rounded-lg sm:rounded-xl text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-red-500 ">5+</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">Years</p>
              </div>
              <div className="bg-slate-800 p-3 sm:p-5 rounded-lg sm:rounded-xl text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-red-500">500+</h3>
                <p  className="text-xs sm:text-sm text-slate-400 mt-1">Members</p>
              </div>
              <div className="bg-slate-800 p-3 sm:p-5 rounded-lg sm:rounded-xl text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-red-500">10+</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">Trainers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
