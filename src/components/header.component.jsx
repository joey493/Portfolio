import React, { useState } from 'react';
// import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import Hamburger from './hamburger.icon'
import { data } from '../data'
import NavItm from './navItm.component';

const Header = () => {
    const [active, setActive] = useState(false);

    const { navItms } = data

    const handleClick = () => {
        active ? setActive(false) : setActive(true)
    }

    return (
        <header>
            <div className='container'>
                <div className='logo'>Ibra<span className='h-font-style'>him</span></div>
                <ul className='navbar'>
                    {navItms.map(({ title, icon, path }) => (
                        <li key={title}>
                            {icon}
                            <a href={path}>{title}</a>
                        </li>
                    ))}
                </ul>
                <Hamburger click={handleClick} isActive={active} />
                <NavItm data={navItms} isActive={active} />
            </div>
        </header >
    )
}

export default Header;
