import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaSass,
    FaGithub
} from "react-icons/fa";

import {
    SiRedux,
    SiTailwindcss
} from 'react-icons/si'

import {
    IoLogoJavascript
} from 'react-icons/io'




const About = () => {
    return (
        <section className="about" id='about'>
            <h2 className='sec-header'>About</h2>
            <div className="container">
                <p className="info p">
                    Hi, I'm Ibrahim . I am Front-End Web Development,
                    And I really enjoy dealing With Programming languages, Frameworks, And Modern Web Technologies,
                    And I trained a lot by building a lot of projects to increase my experience.
                    I'm a fast learner and always love to develop myself.
                </p>
                <ul className="skills">
                    <li>
                        <FaHtml5 className='icon' />
                        <span>HTML</span>
                    </li>
                    <li>
                        <FaCss3Alt className='icon' />
                        <span>CSS</span>
                    </li>
                    <li>
                        <FaBootstrap className='icon' />
                        <span>BOOTSTRAP</span>
                    </li>
                    <li>
                        <SiTailwindcss className='icon' />
                        <span>TAILWIND</span>
                    </li>
                    <li>
                        <FaSass className='icon' />
                        <span>SASS</span>
                    </li>
                    <li>
                        <IoLogoJavascript className='icon' />
                        <span>JAVASCRIPT</span>
                    </li>
                    <li>
                        <FaReact className='icon' />
                        <span>REACT</span>
                    </li>
                    <li>
                        <SiRedux className='icon' />
                        <span>REDUX</span>
                    </li>
                    <li>
                        <FaGithub className='icon' />
                        <span>GITHUB</span>
                    </li>
                </ul>
            </div>
        </section >
    )
}

export default About;

/* <i class="fab fa-js-square"></i> */