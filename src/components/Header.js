import React from 'react'
import './Header.scss'
import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import sprite from "../assets/sprite.svg";
import { Avatar } from '@material-ui/core'

const Header = () => {
    return (
        <div className="header">
            <div>

                <form action="#" className='header__search'>
                    <input type='text' className='header__search--input' placeholder='search' />
                    <button className='header__search--button'>
                        search
                    </button>
                </form>
            </div>

            
                <nav className="header__nav">
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
                    <div className='header__nav--icon-box'>
                        <Avatar />
                        <span className='header__nav--username'>Peter</span>
                    </div>
                </nav>
            
        </div>
    )
}

export default Header
