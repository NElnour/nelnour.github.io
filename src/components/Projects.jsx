import React from 'react'
import AOS from 'aos'
import '@/assets/css/Projects.css'
import 'aos/dist/aos.css';
import * as ProjectsMap from '@/assets/jsons/p2p.json';
import { FiGlobe, FiGithub } from 'react-icons/fi'

export default class Projects extends React.Component {
    render() {
        return <section id='projects' className='Projects'>
            <Project direction='left' projectName='fs' />
            <Project direction='right' projectName='nhs' />
            <Project direction='left' projectName='sendfoodz' />
            <Project direction='right' projectName="snake" />
            <Project direction='left' projectName='fortnite' />
            <Project direction='right' projectName='bcb' />

        </section>
    }
}

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            direction: `zoom-in`,
            projectName: this.props.projectName,
        }
    }
    componentDidMount() {
        AOS.init({
            duration: 1000
        })
    }

    render() {
        const project = ProjectsMap[this.state.projectName] || {}
        const allTechs = project.tech
        return <div className='Project' data-aos={this.state.direction}>
            <ProjectImage src={project.image} />
            <ProjectTitle title={project.title} githubUrl={project.githubUrl} deploymentUrl={project.deploymentUrl
            } />
            <span className='TechStack'>
                {
                    allTechs.map(tech => (
                        <ProjectTechPill tech={tech} key={tech}/>
                    ))
                }
            </span>
        </div>
    }
}

function ProjectImage(props) {
    return <img src={props.src} alt='' aria-hidden='false' className='ProjectImage' />
}

class ProjectTitle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayGithub: this.props.githubUrl !== '',
            displayWeblink: this.props.deploymentUrl !== '',
            githubUrl: this.props.githubUrl,
            deploymentUrl: this.props.deploymentUrl,
            title: this.props.title
        }
    }
    render() {
        return <span className='ProjectHead'>
            <h2 className='ProjectTitle'>{this.state.title}</h2>
            <span className='ProjectLinks'>
                <a href={this.state.githubUrl} className={`github-link ${this.state.displayGithub ? '' : 'inactive'}`}><FiGithub /></a>
                <a href={this.state.deploymentUrl} className={`web-link ${this.state.displayWeblink ? '' : 'inactive'}`}><FiGlobe /></a>
            </span>
        </span>
    }
}

function ProjectTechPill(props) {
    return <span className='TechPill'>{props.tech}</span>
}