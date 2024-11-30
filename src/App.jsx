import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/common/Navbar'
import Hero from './components/Home/Hero'
import Skills from './components/Home/Skills'
import AboutMe from './components/Home/AboutMe'
import Projects from './components/Home/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <AboutMe/>
      <Projects/>
    </>
  )
}

export default App
