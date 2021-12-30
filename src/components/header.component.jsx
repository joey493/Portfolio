import React, { useEffect, useState } from 'react';
import Hamburger from './hamburger.icon'
import { data } from '../data'
import NavItm from './navItm.component';

const Header = () => {
    const [active, setActive] = useState(false);

    const { navItms } = data

    const handleClick = () => {
        // active ? setActive(false) : setActive(true)
        setActive(prev => !prev)
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) setActive(false)
        })
    }, [active])

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
