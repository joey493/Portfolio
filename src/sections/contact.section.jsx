// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaPhoneAlt,
    FaEnvelope
} from 'react-icons/fa'

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <h2 className='sec-header'>Contact</h2>
                <p className="label">Feel free to drop us a line at: </p>
                <div>
                    <p>
                        <FaEnvelope className='icon' />
                        <span>
                            Email: <a href="mailto:ebrahemnader321@gmail.com">ebrahemnader321@gmail.com</a>
                        </span>
                    </p>
                    <p>
                        <FaPhoneAlt className='icon' />
                        <span>
                            Phone: 01014085412
                        </span>
                    </p>
                </div>
                <div className="social">
                    Find Us On Social Networks:
                    <div>
                        <FaLinkedin className='icon' />
                        <FaGithub className='icon' />
                        <FaTwitter className='icon' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;

/*
    - github
    - twitter
    - linked in
*/
