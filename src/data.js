import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';

export const data = {
    navItms: [
        {
            title: 'Home',
            icon: <FaHome />,
            path: '#home'
        },
        {
            title: 'About',
            icon: <FaUser />,
            path: '#about'
        },
        {
            title: 'Projects',
            icon: <FaBriefcase />,
            path: '#projects'
        },
        {
            title: 'Contact Me',
            icon: <FaEnvelope />,
            path: '#contact'
        }
    ]
}