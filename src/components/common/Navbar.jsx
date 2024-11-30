import React from 'react'
import profile from "../../assets/images/profile.jpeg"

function Navbar() {
  return (
    <nav className='z-50 w-full bg-white shadow-md sticky top-0 flex justify-between items-center px-3 md:px-20 py-1 transition-transform duration-300'>
        {/* Logo and Name */}
        <div
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <img
            className="h-auto w-20 md:mr-5 neon-border rounded-full p-2"
            // src="https://cdn.vectorstock.com/i/500p/80/27/yc-logo-monogram-design-template-vector-38558027.jpg"
              src={profile}
            alt="logo"
            />
            <div className="hidden md:flex flex-col">
            <p className="text-xl text-black font-semibold">Anuka Fonseka</p>
            <p className="text-base mt-1 text-deep-blue">Full-Stack Developer</p>
            </div>
        </div>

        {/* Navbar items */}
        <div className='flex'>
            <p className='px-2'>Home</p>
            <p className='px-2'>Projects</p>
            <p className='px-2'>About me</p>
        </div>

        {/* Desktop View Links */}
        <div className="hidden md:flex font-semibold justify-between text-black space-x-5">
            <a
            href="https://www.linkedin.com/in/anukafonseka/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center neon-hover"
            >
            LinkedIn
            <span className="material-symbols-outlined text-xl ml-1">
                call_made
            </span>
            </a>

            <a
            href="https://github.com/AnukaFonseka"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center neon-hover"
            >
            GitHub
            <span className="material-symbols-outlined text-xl ml-1">
                call_made
            </span>
            </a>

            
            <a
            href="https://drive.google.com/file/d/1Xc_jCwd075Uz2obHd84ZNtyIrXJCVNPs/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center neon-hover"
            >
            Resume
            <span className="material-symbols-outlined text-xl ml-1">
                call_made
            </span>
            </a>
        </div>
    </nav>
  )
}

export default Navbar
