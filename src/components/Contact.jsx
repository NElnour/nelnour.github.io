import contact from '@/assets/jsons/contact.json'
import '@/assets/css/Contact.css'

import { FaGithubAlt } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { SiFrontendmentor } from "react-icons/si";

function Contact() {
    return (
        <section className='Contact' id='contact'>
            <FindMe icon='github' />
            <FindMe icon='linkedin' />
            <FindMe icon='frontend' />
        </section>)

}

function FindMe(props) {
    const icons = {
        "github": <FaGithubAlt />,
        "linkedin": <FiLinkedin />,
        "frontend": <SiFrontendmentor />
    }
    const url = contact[props.icon]
    return <a href={url} className='FindMe' target='_blank'>{icons[props.icon]}</a>
}

export default Contact