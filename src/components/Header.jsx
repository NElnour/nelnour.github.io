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
        writer.setAttribute('class', 'Typewriter Scroll')
        writer.setAttribute('data-rate', '0.4')
        writer.setAttribute('data-direction', 'vertical')
    }

    render() {
        return (
            <span className='Header'>
                <TypeWriter id='role'
                    data-rate='0.2'
                    data-direction='vertical'
                    className='scroll'
                    options={{
                        delay: 100
                    }}
                    onInit={
                        (typewriter) => {
                            typewriter
                                .typeString(`<h1 id="hi">${this.state.mssg}</h1>`)
                                .typeString(`<div className='Name'>I'm Nada</div>`)
                                .start()
                        }
                    } />          
            </span>
        )
    }
}
