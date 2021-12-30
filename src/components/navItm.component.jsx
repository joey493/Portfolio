const NavItm = ({ data, isActive }) => {
    return (
        <ul className={`navmenu ${isActive ? 'show' : ''}`}>
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
