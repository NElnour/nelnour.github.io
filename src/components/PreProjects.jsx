import '@/assets/css/PreProjects.css'
import React from 'react'

export default class PreProjects extends React.Component {
    componentDidMount() {
        let paths = document.querySelectorAll('.svgPath')
        paths.forEach(path => {
            let pathLength = path.getTotalLength()

            path.style.strokeDasharray = `${pathLength} ${pathLength}`
            path.style.strokeDashoffset = pathLength
    
            window.addEventListener('scroll', () => {
                let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
                let drawLength = pathLength * scrollPercentage
                path.style.strokeDashoffset = pathLength - drawLength
            })
        })
        
    }
    render() {
        return <div className='PreProjects'>
            <svg className='LeadTrail' width="548" height="434" viewBox="0 0 548 434" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="svgPath" d="M3.31223 0.609362C3.31224 271 537 269 545.312 433.609" stroke="#141414" strokeWidth="5" />
            </svg>

            <h2>and a few projects under my belt</h2>
        </div>
    }
}