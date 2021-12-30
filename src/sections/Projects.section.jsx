import BookTracking from '../images/book-tracking-home.jpg'
import WouldYouRather from '../images/would-you-rather-home.png'
import CountriesAPI from '../images/countries-api-home.jpg'
import TODO from '../images/todo-home.png'
const Projects = () => {
    return (
        <section className="my-work" id='projects'>
            <div className="container">
                <h2 className='sec-header'>Pojects</h2>
                <div className="projects">
                    <div className="grid-row-span-2" style={{ backgroundImage: `url(${TODO})` }}>
                        <div className="overlay">
                            <a href="https://github.com/joey493/Frontend-Mentor-Todo-app" className='sec-btn'>Github Repo</a>
                            <a href="https://adoring-boyd-86d3cc.netlify.app/" className='sec-btn'>Live Site</a>
                        </div>
                    </div>
                    <div className="grid-col-start" style={{ backgroundImage: `url(${WouldYouRather})` }}>
                        <div className="overlay">
                            <a href="https://github.com/joey493/reactnd-project-would-you-rather" className='sec-btn'>Github Repo</a>
                            <a href="https://suspicious-boyd-a8a38d.netlify.app/" className='sec-btn'>Live Site</a>
                        </div>
                    </div>
                    <div className="grid-col-start" style={{ backgroundImage: `url(${CountriesAPI})` }}>
                        <div className="overlay">
                            <a href="https://github.com/joey493/Frontend-Mentor-REST-Countries-API" className='sec-btn'>Github Repo</a>
                            <a href="https://tender-visvesvaraya-3673ed.netlify.app/" className='sec-btn'>Live Site</a>
                        </div>
                    </div>
                    <div className="grid-row-span-2" style={{ backgroundImage: `url(${BookTracking})` }}>
                        <div className="overlay">
                            <a href="https://github.com/joey493/Book-Tracking-App-Udacity" className='sec-btn'>Github Repo</a>
                            <a href="https://wizardly-albattani-fe24ca.netlify.app/" className='sec-btn'>Live Site</a>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Projects;