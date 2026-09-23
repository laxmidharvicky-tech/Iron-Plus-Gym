import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 md:py-28"
    >
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red-600/10 blur-3xl"></div>

      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-red-600/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl sm:mb-16">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-red-500"></span>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              Get In Touch
            </p>
          </div>

          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
            Let's Get
            <span className="block text-red-500">
              To Work.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Ready to start your fitness journey? Get in touch with our team
            and let us help you build a training plan around your goals.
          </p>

        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">

            <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                Start Your Journey
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase text-white sm:text-3xl">
                We're Here To Help.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Whether you're looking to lose weight, build muscle or simply
                become healthier, our team is ready to help you get started.
              </p>

              <div className="mt-8 space-y-6">

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-red-500">
                    📍
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Central Market,Jagatsinghpur
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-red-500">
                    📞
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      +91 98765 43210
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-red-500">
                    ✉
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 break-all text-sm font-semibold text-white">
                      contact@ironplusgym.com
                    </p>
                  </div>

                </div>

              </div>
              <div className="mt-10 border-t border-slate-800 pt-6">

                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Training Hours
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  Monday — Sunday
                </p>

                <p className="mt-1 text-sm text-red-500">
                  5:00 AM — 10:00 PM
                </p>

              </div>

            </div>

          </div>

          <div className="lg:col-span-2">

            <form
              action="https://formspree.io/f/mzepkgwl"
              method="POST"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 md:p-10"
            >

              <div className="mb-8 border-b border-slate-800 pb-6">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
                  Contact Form
                </p>

                <h3 className="mt-2 text-2xl font-black uppercase text-white">
                  Tell Us About Your Goals
                </h3>

              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                  />

                </div>

                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                  />

                </div>

              </div>
              <div className="mt-5">

                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-white"
                >
                  Mobile Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your mobile number"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                />

              </div>
              <div className="mt-5">

                <label
                  htmlFor="goal"
                  className="mb-2 block text-sm font-semibold text-white"
                >
                  Fitness Goal
                </label>

                <select
                  id="goal"
                  name="goal"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                >
                  <option value="Weight Loss">
                    Weight Loss
                  </option>

                  <option value="Muscle Building">
                    Muscle Building
                  </option>

                  <option value="General Fitness">
                    General Fitness
                  </option>

                  <option value="Personal Training">
                    Personal Training
                  </option>

                  <option value="Strength Training">
                    Strength Training
                  </option>

                </select>

              </div>
              <div className="mt-5">

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-white"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your fitness goals..."
                  className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                ></textarea>

              </div>
              <button
                type="submit"
                className="group mt-6 flex w-full items-center justify-center gap-3 rounded-lg bg-red-600 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-red-700 hover:scale-[1.01] active:scale-[0.99]"
              >
                Send Message

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <p className="mt-4 text-center text-xs text-slate-600">
                We'll get back to you as soon as possible.
              </p>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;