import React from "react";

const services = [
  {
    number: "01",
    title: "Strength Training",
    description:
      "Build serious strength and muscle with structured workouts, progressive training and modern equipment.",
    tag: "STRENGTH",
  },
  {
    number: "02",
    title: "HIIT & Cardio",
    description:
      "Improve endurance, stamina and conditioning with high-intensity workouts designed to keep you moving.",
    tag: "CONDITIONING",
  },
  {
    number: "03",
    title: "Personal Training",
    description:
      "Train with focused guidance and a program designed around your goals, fitness level and progress.",
    tag: "COACHING",
  },
  {
    number: "04",
    title: "Nutrition Coaching",
    description:
      "Build sustainable eating habits and learn how nutrition can support your training and fitness goals.",
    tag: "NUTRITION",
  },
  {
    number: "05",
    title: "Boxing & Combat",
    description:
      "Develop coordination, conditioning and confidence through boxing-inspired fitness and combat training.",
    tag: "COMBAT",
  },
  {
    number: "06",
    title: "Fat Loss",
    description:
      "Combine strength, cardio and structured training to build healthier habits and improve body composition.",
    tag: "TRANSFORMATION",
  },
];

function Services() {
  return (
    <section
      id="Services"
      className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 md:py-28"
    >
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red-600/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-red-600/5 blur-3xl"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl sm:mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-red-500"></span>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              What We Offer
            </p>
          </div>
          <h2 className="max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
            Train With
            <span className="block text-red-500">Purpose.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            From strength and conditioning to personal coaching, our programs
            are designed to help you train harder, move better and achieve
            measurable results.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative bg-slate-950 p-6 transition-all duration-500 hover:bg-slate-900 sm:p-8"
            >
              <div className="mb-12 flex items-start justify-between">
                <span className="text-sm font-bold tracking-widest text-slate-600 transition-colors duration-300 group-hover:text-red-500">
                  {service.number}
                </span>

                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-600">
                  {service.tag}
                </span>
              </div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 transition-all duration-300 group-hover:border-red-500 group-hover:bg-red-500">
                <span className="text-lg font-bold text-red-500 transition-colors duration-300 group-hover:text-white">
                  +
                </span>
              </div>
              <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-white">
                {service.title}
              </h3>
              <p className="min-h-[84px] text-sm leading-7 text-slate-400">
                {service.description}
              </p>
              <div className="mt-7 flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-white">
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  Learn More
                </span>

                <span className="text-red-500">→</span>
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-500 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              Ready to start?
            </p>

            <h3 className="mt-2 text-2xl font-black uppercase text-white sm:text-3xl">
              Your goals. Your grind.
            </h3>
          </div>

          <a
            href="#contact"
            className="group flex w-full items-center justify-center gap-3 rounded-lg bg-red-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-red-700 sm:w-auto"
          >
            Start Training
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
