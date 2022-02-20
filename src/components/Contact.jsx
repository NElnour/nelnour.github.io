import contact from '@/assets/jsons/contact.json'
import heart from '@/assets/img/heart.gif'
import coffee from '@/assets/img/coffee.gif'
import '@/assets/css/Contact.css'
import cv from '@/assets/NadaElnour_resume.pdf?url'

import { FaGithubAlt } from "react-icons/fa"
import { FiLinkedin } from "react-icons/fi"
import { SiFrontendmentor } from "react-icons/si"
import { HiOutlineDocumentText } from "react-icons/hi";

function Contact() {
    return (
        <section id='contact' className='ContactContainer'>
            <div className='ContactText'>
                Made with
                <img src={heart} alt='love' />
                and
                <img src={coffee} alt='caffeine' />
            </div>
            <div className='Contact'>
                <FindMe icon='github' />
                <FindMe icon='linkedin' />
                <FindMe icon='frontend' />
                <FindMe icon='cv' />
            </div>
        </section>)

}

function FindMe(props) {
    const icons = {
        "github": <FaGithubAlt />,
        "linkedin": <FiLinkedin />,
        "frontend": <SiFrontendmentor />,
        "cv": <HiOutlineDocumentText />
    }
    var url
    if (props.icon == 'cv') {
        url = cv
    } else {
        url = contact[props.icon]
    }

    return <a href={url} className='FindMe' target='_blank'>{icons[props.icon]}</a>
}


export default Contact