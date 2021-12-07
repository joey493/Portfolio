import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavItm = ({ title, icon, active }) => {
    return (
        <li className={active}>
            <FontAwesomeIcon icon={icon} />
            <span>
                {title}
            </span>
        </li>
    )
}

export default NavItm;
