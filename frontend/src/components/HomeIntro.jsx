import React from 'react'

const HomeIntro = () => {
   return (
      <section className="">
         <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight ">
            Welcome to <span className="text-orange-500">BrainSync</span>
         </h1>
         <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            A minimalist productivity platform where your thoughts, tasks, and links come together.
            Write notes, manage to-dos, store links — all in one place. Simple, powerful, and shareable.
         </p>
         <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-orange-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg transition duration-200 hover:scale-103">
               Get Started
            </button>
            <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition duration-200">
               Learn More
            </button>
         </div>
      </section>

   )
}

export default HomeIntro