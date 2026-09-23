import React from 'react'

function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950">

  <div className="max-w-7xl mx-auto px-6 py-10">

    <div className="flex flex-col md:flex-row justify-between gap-6">

      <div>

        <h2 className="text-2xl font-black">
          IRON <span className="text-red-500">PLUS</span>
        </h2>

        <p className="text-slate-500 mt-2">
          Train hard. Stay strong.
        </p>

      </div>


      <div className="text-slate-400">

        <p>
          Phone: +91 98765 43210
        </p>

        <p>
          Email: ironplusgym@example.com
        </p>

      </div>

    </div>


    <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-500">

      © 2026 Iron Plus Gym. All rights reserved.

    </div>

  </div>

</footer>
  )
}

export default Footer