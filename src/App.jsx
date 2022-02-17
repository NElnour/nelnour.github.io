import React, { useCallback, useEffect } from 'react'
import Canvas from '@/components/Canvas'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Resume from '@/components/Resume'
import Trailer from '@/components/Trailer'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import '@/assets/css/App.css'
import { render } from 'react-dom'

export default class App extends React.Component {
  // window.addEventListener('scroll', (event) => {
  //   event.preventDefault
  //   const laggers = document.querySelector('Header')
  //   console.log(lagger)
  // })

  componentDidMount() {
    const lagger = document.querySelector('.scroll')
    window.addEventListener('scroll', (e) => {
      e.preventDefault
      let pos = window.pageYOffset * lagger.dataset.rate

      if (lagger.dataset.direction === 'vertical') {
        lagger.style.transform = `translate3d(0px, ${pos}px, 0px)`
      } else {
        let posX = window.pageYOffset * lagger.dataset.ratex
        let posY = window.pageYOffset * lagger.dataset.ratey
        lagger.style.transform = `translate3(${posX}px, ${posY}px, 0px)`
      }
    }
    )
  }

  render() {
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
}
