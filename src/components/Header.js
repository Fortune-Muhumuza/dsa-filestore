import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Avatar} from '@material-ui/core'

const Header = () => {
    return (
        <div className="header">
            <form action="#" className='search'>
                <input type='text' className='search__input' placeholder='search' />
                <button className='search__button'>
                    <SearchIcon className='search__icon' />
                </button>
            </form>
            <nav className='user-nav'>
                <div className='user-nav__icon-box'>
                    <div className='user-nav__icon'>
                        <MessageIcon />
                    </div>
                </div>
                <div className='user-nav__icon-box'>
                    <div className='user-nav__icon'>
                        <NotificationsIcon />
                    </div>
                </div>
                <div className='user-nav__user'>
                    <Avatar />
                    <span className='user-nav__user-name'>Peter</span>
                </div>
            </nav>
        </div>
    )
}

export default Header
