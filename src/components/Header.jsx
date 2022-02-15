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

    render() {
        return (
            <TypeWriter id='role' onInit={
                (typewriter) => {
                    typewriter.typeString(`<h1 id="hi">${this.state.mssg}</h1>`)
                        .changeDelay(1)
                        .start()
                }
            } />
        )
    }
}
