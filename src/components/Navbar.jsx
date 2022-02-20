import React from 'react'
import { BiHomeHeart } from "react-icons/bi";
import { SiCodeproject } from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md";
import '@/assets/css/Navbar.css'

export default function Navbar() {
    return (
        < div className='NavbarContainer'>
            <div className='Name'>Nada Elnour</div>
            <div className='Navbar'>
                <NavLink icon="home"></NavLink>
                <div className='VerticalDiv'></div>
                <NavLink icon="projects"></NavLink>
                <div className='VerticalDiv'></div>
                <NavLink icon="contact"></NavLink>
                <div className='VerticalDiv'></div>
            </div>
        </div>
    )
}

class NavLink extends React.Component {
    constructor(props) {
        super(props)
        const displayIcon = {
            'home': <BiHomeHeart />,
            'projects': <SiCodeproject />,
            'contact': <MdOutlineAlternateEmail />
        }

        this.state = { icon: displayIcon[this.props.icon] }

    }

    render() {
        return <a href={`#${this.props.icon}`} className='NavLink'>
            {this.state.icon}
        </a>

    }
}