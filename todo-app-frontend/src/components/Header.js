import React from 'react'

import "../styles/Header.css"

const Header = ({ onAdd }) => {
    return (
        <div className='header'>
            <div className='header__left'>
                <h2 className='header__left-title'>TODO-APP</h2>
            </div>
            <div className='header__right'>
                <button className='header__right-button' onClick={onAdd}>ADD TASK</button>
            </div>
        </div>
    )
}

export default Header