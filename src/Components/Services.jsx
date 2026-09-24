
import React from "react";

const services = [
  {
    number: "01",
    title: "Strength Training",
    description:
      "Build serious strength and muscle with structured workouts, progressive training and modern equipment.",
    tag: "STRENGTH",
    icon: "↗",
  },
  {
    number: "02",
    title: "HIIT & Cardio",
    description:
      "Improve endurance, stamina and conditioning with high-intensity workouts designed to keep you moving.",
    tag: "CONDITIONING",
    icon: "⚡",
  },
  {
    number: "03",
    title: "Personal Training",
    description:
      "Train with focused guidance and a program designed around your goals, fitness level and progress.",
    tag: "COACHING",
    icon: "✦",
  },
  {
    number: "04",
    title: "Nutrition Coaching",
    description:
      "Build sustainable eating habits and learn how nutrition can support your training and fitness goals.",
    tag: "NUTRITION",
    icon: "◈",
  },
  {
    number: "05",
    title: "Boxing & Combat",
    description:
      "Develop coordination, conditioning and confidence through boxing-inspired fitness and combat training.",
    tag: "COMBAT",
    icon: "✹",
  },
  {
    number: "06",
    title: "Fat Loss",
    description:
      "Combine strength, cardio and structured training to build healthier habits and improve body composition.",
    tag: "TRANSFORMATION",
    icon: "↗",
  },
];

function Services() {
  return (
    <section
      id="Services"
      className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 md:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 animate-pulse rounded-full bg-red-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-red-600/5 blur-[120px]" />

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mb-12 max-w-3xl sm:mb-16">

          <div className="mb-5 flex items-center gap-3 animate-[fadeIn_0.8s_ease-out]">
            <span className="h-px w-10 bg-red-500" />

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              What We Offer
            </p>

            <span className="h-px w-10 bg-red-500/30" />
          </div>

          <h2 className="max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
            Train With
            <span className="relative block text-red-500">
              Purpose.

              {/* underline */}
              <span className="absolute -bottom-3 left-0 h-1 w-20 rounded-full bg-red-500" />
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            From strength and conditioning to personal coaching, our programs
            are designed to help you train harder, move better and achieve
            measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={service.number}
              className="group relative overflow-hidden bg-slate-950 p-6 transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:bg-slate-900 sm:p-8"
              style={{
                animation: `serviceReveal 0.7s ease-out ${index * 0.12}s both`,
              }}
            >

             
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-red-500/0 blur-3xl transition-all duration-700 group-hover:bg-red-500/10" />

           
              <div className="relative mb-10 flex items-start justify-between">

                <span className="text-sm font-black tracking-[0.2em] text-slate-700 transition-all duration-500 group-hover:text-red-500 group-hover:tracking-[0.3em]">
                  {service.number}
                </span>

                <span className="rounded-full border border-slate-800 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-slate-600 transition-all duration-500 group-hover:border-red-500/30 group-hover:text-red-400">
                  {service.tag}
                </span>
              </div>

            
              <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xl text-red-500 transition-all duration-500 group-hover:rotate-12 group-hover:border-red-500 group-hover:bg-red-500 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(239,68,68,0.35)]">
                {service.icon}

                
                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              
              <h3 className="relative mb-4 text-2xl font-black uppercase tracking-tight text-white transition-transform duration-500 group-hover:translate-x-1">
                {service.title}
              </h3>

              
              <p className="relative min-h-[84px] text-sm leading-7 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                {service.description}
              </p>

             
              <div className="relative mt-7 flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-white">

                <span className="transition-all duration-300 group-hover:text-red-400">
                  Learn More
                </span>

                <span className="text-lg text-red-500 transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>

             
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-500 transition-all duration-700 group-hover:w-full" />

            
              <div className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-slate-800 transition-all duration-500 group-hover:h-12 group-hover:w-12 group-hover:border-red-500/40" />
            </div>
          ))}
        </div>

       
        <div
          className="group relative mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-500 hover:border-red-500/30 sm:p-8"
          style={{
            animation: "serviceReveal 0.8s ease-out 0.8s both",
          }}
        >

          {/* CTA glow */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-red-500/5 blur-3xl transition-all duration-700 group-hover:bg-red-500/10" />

          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                  Ready to start?
                </p>
              </div>

              <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                Your goals.{" "}
                <span className="text-red-500">Your grind.</span>
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Stop waiting. Start building.
              </p>
            </div>

            <a
              href="#contact"
              className="group/button relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg bg-red-600 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-500 hover:shadow-[0_10px_30px_rgba(239,68,68,0.25)] sm:w-auto"
            >
              {/* button shine */}
              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-700 group-hover/button:translate-x-full" />

              <span className="relative">
                Start Training
              </span>

              <span className="relative text-lg transition-transform duration-300 group-hover/button:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

     
      <style type="text/css">{`
        @keyframes serviceReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Services;


