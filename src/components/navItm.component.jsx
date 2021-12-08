// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavItm = ({ data, isActive }) => {
    return (
        <ul className='navmenu' style={{ display: isActive ? 'block' : 'none' }}>
            {data.map(({ title, icon, path }) => (
                <li key={title}>
                    {icon}
                    <a href={path}>{title}</a>
                </li>
            ))}
        </ul>
    )
}

export default NavItm;
