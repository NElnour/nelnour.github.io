import React from 'react'
import AOS from 'aos'
import '@/assets/css/Projects.css'
import 'aos/dist/aos.css';

export default class Projects extends React.Component {
    render() {
        return <section id='projects' className='Projects'>
            <Project direction='right' />
            <Project direction='left' />
            <Project direction='right' />
            <Project direction='left' />
            <Project direction='right' />
            <Project direction='left' />
        </section>
    }
}

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = { direction: `fade-up-${this.props.direction}` }
    }
    componentDidMount() {
        AOS.init({
            duration: 1000
        })
    }

    render() {
        return <div className='Project' data-aos={this.state.direction} id={this.state.direction}>
            <ProjectImage />
            <ProjectTitle />
        </div>
    }
}

function ProjectImage() {
    return <img src='' alt='' aria-hidden='false' />
}

function ProjectTitle() {
    return <h2>title</h2>
}

function ProjectDescription() {
    return <p>project description</p>
}