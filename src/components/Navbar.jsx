import React from 'react'
import projects from '@/assets/img/projects.gif'
import home from '@/assets/img/home.gif'
import resume from '@/assets/img/resume.gif'
import contact from '@/assets/img/contact.gif'
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
            'home': home,
            'projects': projects,
            'cv': resume,
            'contact': contact
        }

        this.state = { icon: displayIcon[this.props.icon] }

    }

    render() {
        return <a href={`#${this.props.icon}`} className='NavLink'>
            <img src={this.state.icon} alt={this.props.icon} />
        </a>

    }
}