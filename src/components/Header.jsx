import React from 'react'
import TypeWriter from 'typewriter-effect'
import '@/assets/css/Header.css'

export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            mssg: "Hi!",
        }
    }

    componentDidMount() {
        let writer = document.querySelector('.Typewriter')
        writer.setAttribute('class', 'Typewriter scroll')
        writer.setAttribute('data-rate', '0.4')
        writer.setAttribute('data-direction', 'vertical')
    }

    render() {
        return (
            <TypeWriter id='role' data-rate='0.2' data-direction='vertical' className='scroll' onInit={
                (typewriter) => {
                    typewriter.typeString(`<h1 id="hi">${this.state.mssg}</h1>`)
                        .changeDelay(1)
                        .start()
                }
            } />
        )
    }
}
