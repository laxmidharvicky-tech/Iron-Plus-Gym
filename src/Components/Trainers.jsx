import React from 'react'
import Trainer1 from '../assets/Trainer1.jpg';
import Trainer2 from '../assets/Trainer2.jpg';
import Trainer3 from '../assets/Trainer3.jpg';
function Trainers() {
  return (
    <section
  id="trainers"
  className="py-16 sm:py-20 md:py-24 bg-slate-900"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

   
    <div className="text-center mb-10 sm:mb-12 md:mb-14">

      <p className="text-red-500 font-bold uppercase tracking-widest text-sm sm:text-base mb-3">
        Meet The Team
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
        Our Trainers
      </h2>

      <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-4">
        Train with experienced professionals who can guide you
        toward your fitness goals.
      </p>

    </div>


    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">


      
      <div
        className="bg-slate-950 rounded-xl sm:rounded-2xl overflow-hidden
        border border-slate-800
        hover:border-red-500
        hover:-translate-y-1
        transition-all duration-300"
      >

        <img
          src={Trainer1}
          alt="Rahul Kumar - Strength Coach"
          className="w-full h-64 sm:h-72 md:h-80 object-cover object-top"
        />

        <div className="p-5 sm:p-6">

          <h3 className="text-xl sm:text-2xl font-bold">
            Rahul Kumar
          </h3>

          <p className="text-red-500 text-sm sm:text-base mt-1">
            Strength Coach
          </p>

        </div>

      </div>


      
      <div
        className="bg-slate-950 rounded-xl sm:rounded-2xl overflow-hidden
        border border-slate-800
        hover:border-red-500
        hover:-translate-y-1
        transition-all duration-300"
      >

        <img
          src={Trainer2}
          alt="Amit Das - Fitness Trainer"
          className="w-full h-64 sm:h-72 md:h-80 object-cover object-top"
        />

        <div className="p-5 sm:p-6">

          <h3 className="text-xl sm:text-2xl font-bold">
            Amit Das
          </h3>

          <p className="text-red-500 text-sm sm:text-base mt-1">
            Fitness Trainer
          </p>

        </div>

      </div>


     
      <div
        className="bg-slate-950 rounded-xl sm:rounded-2xl overflow-hidden
        border border-slate-800
        hover:border-red-500
        hover:-translate-y-1
        transition-all duration-300"
      >

        <img
          src={Trainer3}
          alt="Priya Sharma - Personal Trainer"
          className="w-full h-64 sm:h-72 md:h-80 object-cover object-top"
        />

        <div className="p-5 sm:p-6">

          <h3 className="text-xl sm:text-2xl font-bold">
            Akash Sharma
          </h3>

          <p className="text-red-500 text-sm sm:text-base mt-1">
            Personal Trainer
          </p>

        </div>

      </div>

    </div>

  </div>
</section>


  )
}

export default Trainers