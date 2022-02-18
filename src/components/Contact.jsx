import contact from '@/assets/jsons/contact.json'
import heart from '@/assets/img/heart.gif'
import coffee from '@/assets/img/coffee.gif'
import '@/assets/css/Contact.css'

import { FaGithubAlt } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { SiFrontendmentor } from "react-icons/si";

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
            </div>
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