import React from 'react'
import Canvas from '@/components/Canvas'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Resume from '@/components/Resume'
import '@/assets/css/App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='Hero'>
        <Canvas />
        <Header />
      </div>
      <Projects />
      <Resume />
      <footer>
        <Contact />
      </footer>
    </div>
  )
}

export default App