import React from 'react'

function Hamburger({ click, isActive }) {

    return (
        <div className={`hamburger ${isActive ? 'active-icon' : ''}`} onClick={click} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Hamburger
