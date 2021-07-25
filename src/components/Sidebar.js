import React from 'react'
import './Sidebar.scss'
import sprite from "../assets/sprite.svg";
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import userPicture from '../img/user.jpg'

const Sidebar = () => {
    const userDetails = useSelector(state => state.auth.user)

    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <div className="sidebar__header--logo">
                    <h1>DSA</h1>
                </div>
                <div className="sidebar__header--icons">

                </div>

                <div className="sidebar__header--user-card">
                <img className="sidebar__header--user-card-picture" src={userDetails.photoURL} />

                <span className="sidebar__header--user-card-details-username">{userDetails.displayName}</span>
                <span className="sidebar__header--user-card-details-email">{userDetails.email}</span>

            </div>

            <div className="sidebar__options">
                <h1 className="sidebar__options--heading">Options</h1>
                <ul className='sidebar__options--list'>
                    <li className="sidebar__options--list-item">



                        <NavLink to='/' className='side-nav__link' activeClassName="side-nav__link--active">
                            <svg className="side-nav__link--icon">
                                <use href={`${sprite}#icon-home2`}></use>
                            </svg>
                            <span>Home</span>
                        </NavLink>

                    </li>
                    <li className="sidebar__options--list-item">

                        <NavLink to='/notes' className='side-nav__link'  activeClassName="side-nav__link--active">
                        <svg className="side-nav__link--icon">
                                <use href={`${sprite}#icon-book`}></use>
                            </svg>
                            <span>Notes</span>
                        </NavLink>

                    </li>

                </ul>
            </div>
            </div>

          


            <div className='legal'>
                &#169; 2021 DSA
            </div>
        </div>
    )
}

export default Sidebar
