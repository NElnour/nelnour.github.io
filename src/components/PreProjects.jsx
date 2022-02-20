import '@/assets/css/PreProjects.css'
import React from 'react'

export default class PreProjects extends React.Component {
    componentDidMount() {
        let path = document.getElementById('sideLine')
        let rect = document.querySelector('.PreProjects').getBoundingClientRect()
        let pathLength = rect.bottom - rect.top

        console.log(pathLength)
    
        window.addEventListener('scroll', () => {
            let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
            let drawLength = pathLength * scrollPercentage * 2
            path.setAttribute("style",`height:${drawLength}px`);
        })

    }
    render() {
        return <div className='PreProjectContainer'>
            <div className='SideLine' id='sideLine' />
            <div className='PreProjects'>
                with a few <h2 data-text='projects' id='project'>projects</h2> under my belt
            </div>  
        </div>
    }
}