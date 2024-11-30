import React from 'react'
import heroImg from "../../assets/images/AN-2.png"

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-cover bg-center bg-fixed -mt-32 px-20"
    style={{
      backgroundColor: "rgba(245, 252, 255, 100)",
      backgroundBlendMode: "overlay",
      backgroundPosition: "70% 50%",        
    }}>
        <div className="relative text-left w-1/2 p-5 md:p-10 mx-auto z-10">
            <h1 className="text-deep-blue text-3xl md:text-6xl font-bold leading-tight mb-4">
            Hey!, I’m<span className='text-primary'> Anuka </span>
            </h1>
            <p className="text-deep-blue text-base md:text-2xl mb-6">
            A Full-Stack Developer creating functional and aesthetic digital
            solutions.
            </p>
            <p className="text-deep-blue mb-6 text-sm md:text-lg italic">
            "Turning ideas into responsive, functional designs."
            </p>
            <button className='bg-primary text-white rounded-md px-3 py-3 outline-none hover:bg-deep-blue'>Get in touch</button>
        </div>
        <div className='w-1/2 flex justify relative text-left mx-auto z-10'>
            <img src={heroImg} alt="" className='w-5/6'/>
        </div>
        
        
    </section>
  )
}

export default Hero
