import NavItm from './navItm.component';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// import './header.style.scss';
const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='logo'>Ibra<span className='h-font-style'>him</span></div>
                <ul className='navbar'>
                    <NavItm title='Home' icon={faHome} active='active' />
                    <NavItm title='About' icon={faUser} /> {/*it will may contain skills */}
                    {/* <li>Skills</li> */}
                    <NavItm title='My Work' icon={faBriefcase} />
                    <NavItm title='contact me' icon={faEnvelope} />
                </ul>
            </div>
        </header >
    )
}

export default Header;
