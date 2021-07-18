import React from 'react'
import './Sidebar.css'
import sprite from '../img/sprite.svg'
import { NavLink } from 'react-router-dom'
import logo from '../logo.jpg'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img className="logo" src={logo} />
            <ul className='side-nav'>
                <li className="side-nav__item">

                    <a href='#' className='side-nav__link'>
                  

                        <NavLink to='/'>
                            <span>Home</span>
                        </NavLink>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href='#' className='side-nav__link'>

                        <NavLink to='/notes'>
                            <span>Notes</span>
                        </NavLink>
                    </a>
                </li>

            </ul>
            <div className='legal'>
                &#169; 2021 DSA
            </div>
        </div>
    )
}

export default Sidebar
