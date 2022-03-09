import React from 'react'
import AOS from 'aos'
import '@/assets/css/Projects.css'
import 'aos/dist/aos.css';
import * as ProjectsMap from '@/assets/jsons/p2p.json';

import facesplash from '@/assets/img/facesplash.png'
import nhs from '@/assets/img/nhs.png'
import sendfoodz from '@/assets/img/sendfoodz.png'
import snake from '@/assets/img/snake.gif'
import fortnite from '@/assets/img/homepage.png'
import musicplayer from '@/assets/img/music-player.png'

export default class Projects extends React.Component {
    render() {
        return <section id='projects' className='Projects'>
            <Project direction='right' projectName='mp' />
            <Project direction='left' projectName='fs' />
            <Project direction='right' projectName='nhs' />
            <Project direction='left' projectName='sendfoodz' />
            <Project direction='right' projectName="snake" />
            <Project direction='left' projectName='fortnite' />
        </section>
    }
}

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            direction: `fade-up`,
            projectName: this.props.projectName,
            ImageMap: {
                "fs": facesplash,
                "nhs": nhs,
                "sendfoodz": sendfoodz,
                "snake": snake,
                "fortnite": fortnite,
                "mp": musicplayer
            }
        }
    }
    componentDidMount() {
        AOS.init({
            duration: 700
        })
    }

    render() {
        const project = ProjectsMap[this.state.projectName] || {}
        const allTechs = project.tech
        return <div className='Project' data-aos={this.state.direction}>
            <ProjectImage src={this.state.ImageMap[this.state.projectName]} />
            <ProjectTitle title={project.title} githubUrl={project.githubUrl} deploymentUrl={project.deploymentUrl
            } />
            <span className='TechStack'>
                {
                    allTechs.map(tech => (
                        <ProjectTechPill tech={tech} key={tech} />
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
            <h3>{this.state.title}</h3>
            <span className='ProjectLinks'>
                <a href={this.state.githubUrl} target='_blank' className={`github-link ${this.state.displayGithub ? '' : 'inactive'}`}><ion-icon name="logo-github"></ion-icon></a>
                <a href={this.state.deploymentUrl} target='_blank' className={`web-link ${this.state.displayWeblink ? '' : 'inactive'}`}><ion-icon name="globe"></ion-icon></a>
            </span>
        </span>
    }
}

function ProjectTechPill(props) {
    return <span className='TechPill'>{props.tech}</span>
}