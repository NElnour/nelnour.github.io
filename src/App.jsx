import React from 'react'
import Canvas from '@/components/Canvas'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Resume from '@/components/Resume'
import Trailer from '@/components/Trailer'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import '@/assets/css/App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className='Hero' id='home'>
        <Canvas />
        <Header />
        <div className='ScrollDown'>
          <a href='#trailer'>
            <HiOutlineArrowNarrowDown />
          </a>
        </div>
      </section>
      <Trailer />
      <Projects />
      <Resume />
      <footer>
        <Contact />
      </footer>
    </div>
  )
}

export default App