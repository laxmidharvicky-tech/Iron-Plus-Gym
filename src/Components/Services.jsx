import React from "react";

function Services() {
  return (
    <section id="Services" className="py-16 sm:py-20 md:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <p className="text-red-500 font-bold uppercase tracking-widest text-sm sm:text-base mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Our Services
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-4">
            Professional fitness services designed to help you become stronger,
            healthier and more confident.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="group bg-slate-900 border border-slate-800 p5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:border-red-500 hover:-translate-y-1 transition-all duration-300">
            <div className="text-red-500 text-3xl sm:text-4xl mb-4 sm:mb-5">
              🏋️
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
              Weight Training
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-6 sm:leading-7">
              Build muscle, increase strength and improve your overall fitness
              with structured weight training.
            </p>
          </div>
          <div className="group bg-slate-900 border border-slate-800 p5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:border-red-500 hover:-translate-y-1 transition-all duration-300">
            <div className="text-red-500 text-3xl sm:text-4xl mb-4 sm:mb-5">
              ❤️
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
              Cardio
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-6 sm:leading-7">
              Improve stamina and cardiovascular fitness with effective cardio
              workouts.
            </p>
          </div>
          <div className="group bg-slate-900 border border-slate-800 p5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:border-red-500 hover:-translate-y-1 transition-all duration-300">
            <div className="text-red-500 text-3xl sm:text-4xl mb-4 sm:mb-5">
              🧘
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
              Personal Training
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-6 sm:leading-7">
              Get personal guidance from experienced trainers and follow a
              structured fitness plan.
            </p>
          </div>
          <div className="group bg-slate-900 border border-slate-800 p5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:border-red-500 hover:-translate-y-1 transition-all duration-300">
            <div className="text-red-500 text-3xl sm:text-4xl mb-4 sm:mb-5">
              🥗
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
              Nutrition
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-6 sm:leading-7">
              Learn healthy eating habits that support your fitness journey.
            </p>
          </div>
          <div className="group bg-slate-900 border border-slate-800 p5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:border-red-500 hover:-translate-y-1 transition-all duration-300">
            <div className="text-red-500 text-3xl sm:text-4xl mb-4 sm:mb-5">
              🥊
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
              Boxing
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-6 sm:leading-7">
              Improve fitness, coordination and endurance through boxing
              workouts.
            </p>
          </div>
          <div className="group bg-slate-900 border border-slate-800 p5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:border-red-500 hover:-translate-y-1 transition-all duration-300">
            <div className="text-red-500 text-3xl sm:text-4xl mb-4 sm:mb-5">
              🔥
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
              Fat Loss
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-6 sm:leading-7">
              Follow structured workouts designed to help you improve fitness
              and body composition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
