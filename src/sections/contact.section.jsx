import {
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaPhoneAlt,
    FaEnvelope
} from 'react-icons/fa'

const Contact = () => {
    return (
        <section className="contact" id='contact'>
            <div className="container">
                <h2 className='sec-header'>Contact</h2>
                <p className="label">Feel free to drop us a line at: </p>
                <div className='info'>
                    <p>
                        <FaEnvelope id='hello' className='con-icon' />
                        <a href="mailto:ebrahemnader321@gmail.com">ebrahemnader321@gmail.com</a>
                    </p>
                    <p>
                        <FaPhoneAlt className='con-icon' />
                        <span>
                            01014085412
                        </span>
                    </p>
                </div>
                <div className="social">
                    <p>
                        Find Us On Social Networks:
                    </p>
                    <div>
                        <a href="https://www.linkedin.com/in/ibrahim-nader-3a65351b6/">
                            <FaLinkedin className='icon' />
                        </a>
                        <a href="https://github.com/joey493">
                            <FaGithub className='icon' />
                        </a>
                        <a href="https://twitter.com/ibrahim33996">
                            <FaTwitter className='icon' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;