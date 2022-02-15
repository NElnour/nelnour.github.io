import React from 'react'
import { BiHomeHeart } from "react-icons/bi";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { RiContactsLine } from "react-icons/ri";
import { SiNounproject } from "react-icons/si";
import '@/assets/css/Navbar.css'

export default function Navbar() {
    return (
        <div className='Navbar'>
            <div className='VerticalDiv'></div>
            <NavLink icon="home"></NavLink>
            <div className='VerticalDiv'></div>
            <NavLink icon="projects"></NavLink>
            <div className='VerticalDiv'></div>
            <NavLink icon="cv"></NavLink>
            <div className='VerticalDiv'></div>
            <NavLink icon="contact"></NavLink>
            <div className='VerticalDiv'></div>
        </div>
    )
}

class NavLink extends React.Component {
    constructor(props) {
        super(props)
        const displayIcon = {
            'home': <BiHomeHeart />,
            'projects': <SiNounproject />,
            'cv': <HiOutlineDocumentSearch />,
            'contact': <RiContactsLine />
        }

        this.state = { icon: displayIcon[this.props.icon] }

    }

    render() {
        return <span className='Navlink'>
            <a href={`#${this.props.icon}` } onClick={e => {
                e.preventDefault
                console.log(`clicked on ${this.props.icon}`)
            }}>{
                    this.state.icon}
            </a>
        </span>
    }
}