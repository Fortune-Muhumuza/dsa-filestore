import React from 'react'
import './Sidebar.css'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className='side-nav'>
                <li className="side-nav__item">
                    <a href='#' className='side-nav__link'>
                        <div className="side-nav__icon">
                            <HomeOutlinedIcon />
                        </div>
                        <NavLink to='/'>
                        <span>Home</span>
                        </NavLink>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href='#' className='side-nav__link'>
                        <div className="side-nav__icon">
                            <MenuBookOutlinedIcon />
                        </div>
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
