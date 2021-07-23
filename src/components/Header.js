import React from 'react'
import './Header.scss'
import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import sprite from "../assets/sprite.svg";
import { Avatar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">

             <NavLink to='/' className=' side-nav__link-link-flexed'>
                <svg className="header--icon">
                    <use href={`${sprite}#icon-home2`}></use>
                </svg>
                <span className="header-link">Home</span>
            </NavLink>

            <div>

                <form action="#" className='header__search'>
                    <input type='text' className='header__search--input' placeholder='search' />
                    <button className='header__search--button'>
                        <svg className="header--icon search-icon">
                            <use href={`${sprite}#icon-search`}></use>
                        </svg>
                    </button>
                </form>
            </div>

           


            <div className="header__nav">
                <div className='header__nav--icon-box'>
                    <div className='header__nav--icon'>
                        <svg className="header--icon">
                            <use href={`${sprite}#icon-bell`}></use>
                        </svg>
                    </div>
                </div>
                <div className='header__nav--icon-box'>
                    <div className='header__nav--icon'>
                        <svg className="header--icon">
                            <use href={`${sprite}#icon-bubbles4`}></use>
                        </svg>
                    </div>
                </div>
                <div className='header__nav--icon-box avatar'>
                    <Avatar />
                    <span className='header__nav--username'>Peter</span>
                </div>
            </div>

        </div>
    )
}

export default Header
