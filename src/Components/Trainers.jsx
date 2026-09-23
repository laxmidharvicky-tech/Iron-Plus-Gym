import React from "react";

import Trainer1 from "../assets/Trainer1.jpg";
import Trainer2 from "../assets/Trainer2.jpg";
import Trainer3 from "../assets/Trainer3.jpg";

const trainers = [
  {
    number: "01",
    name: "Rahul Kumar",
    role: "Strength Coach",
    experience: "8+ Years Experience",
    image: Trainer1,
  },
  {
    number: "02",
    name: "Amit Das",
    role: "Fitness Trainer",
    experience: "6+ Years Experience",
    image: Trainer2,
  },
  {
    number: "03",
    name: "Akash Sharma",
    role: "Personal Trainer",
    experience: "7+ Years Experience",
    image: Trainer3,
  },
];

function Trainers() {
  return (
    <section
      id="Trainers"
      className="relative overflow-hidden bg-slate-900 py-20 sm:py-24 md:py-28"
    >

      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red-600/10 blur-3xl"></div>

      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-red-600/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl sm:mb-16">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-red-500"></span>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              Meet The Team
            </p>
          </div>

          <h2 className="max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
            Train With
            <span className="block text-red-500">
              The Best.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Our experienced trainers bring knowledge, discipline and
            personalized coaching to help you train smarter and achieve
            your fitness goals.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {trainers.map((trainer) => (
            <div
              key={trainer.number}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 transition-all duration-500 hover:-translate-y-2 hover:border-red-500/60"
            >

              <div className="relative h-[420px] overflow-hidden">

                <img
                  src={trainer.image}
                  alt={`${trainer.name} - ${trainer.role}`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xs font-bold text-white backdrop-blur-sm">
                  {trainer.number}
                </div>
                <div className="absolute right-5 top-5 rounded-full border border-red-500/30 bg-red-500/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">
                  {trainer.role}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <div className="mb-3 h-0.5 w-10 bg-red-500 transition-all duration-500 group-hover:w-20"></div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                    {trainer.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-red-500">
                    {trainer.role}
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">
                    {trainer.experience}
                  </p>

                </div>

              </div>
              <div className="flex items-center justify-between border-t border-slate-800 px-6 py-5">

                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Certified Coach
                </span>

                <a
                  href="#contact"
                  className="text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:text-red-500"
                >
                  Train With Us →
                </a>

              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-500 transition-all duration-500 group-hover:w-full"></div>

            </div>
          ))}

        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:flex-row sm:items-center sm:p-8">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              Ready to get started?
            </p>

            <h3 className="mt-2 text-2xl font-black uppercase text-white sm:text-3xl">
              Find Your Coach.
            </h3>
          </div>

          <a
            href="#contact"
            className="group flex w-full items-center justify-center gap-3 rounded-lg bg-red-600 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-red-700 hover:scale-105 sm:w-auto"
          >
            Contact Us

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Trainers;