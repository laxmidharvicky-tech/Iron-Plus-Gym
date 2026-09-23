import React from 'react'

function Contact() {
  return (
 <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 bg-slate-950"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-10">

          <p className="text-red-500 font-bold uppercase tracking-widest text-sm mb-3">
            Get In Touch
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Contact Us
          </h2>

          <p className="text-slate-400 mt-4">
            Have a question or want to join Iron Plus Gym?
            Send us a message.
          </p>

        </div>
        <form
          action="https://formspree.io/f/mzepkgwl"
          method="POST"
          className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-8 space-y-5"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-white mb-2"
            >
              Your Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white mb-2"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-white mb-2"
            >
              Mobile Number
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
            />
          </div>
         
      <div>

        <label className="block mb-2 font-semibold">
          Fitness Goal
        </label>

        <select
          name="goal"
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
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

        </select>

      </div>
 <div>

        <label className="block mb-2 font-semibold">
          Message
        </label>

        <textarea
          name="message"
          rows="5"
          placeholder="Tell us what you are looking for..."
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
        ></textarea>

      </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition"
          >
            Submit
          </button>

        </form>

      </div>
    </section>

  )
}

export default Contact