import React from 'react'
import '@/assets/css/Header.css'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'

export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            mssg: "Hi!",
        }
    }

    render() {
        return (
            <div className='Header'>
                <h1 className='Greeting'>{this.state.mssg}</h1>
                <div className='ScrollDown'>
                    <HiOutlineArrowNarrowDown onClick={(e) => {
                        document.querySelector('.IntroContainer').scrollIntoView()
                    }} />
                </div>
            </div>
        )
    }
}
