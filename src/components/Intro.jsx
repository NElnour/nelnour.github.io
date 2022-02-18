import '@/assets/css/Intro.css'
import 'aos/dist/aos.css';
import AOS from 'aos'
import React from 'react'

export default class Trailer extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 500
        })
    }

    render() {
        return <section className='IntroContainer'>
            <div className='Intro'>
                <div className='Experience'>junior</div>
                <div className='Position'>
                    web developer
                </div>
                <div className='Scroll' data-rate='0.2' data-direction='vertical'>learning the ropes</div>
            </div>
        </section>
    }
}