import React from 'react'
import './Home.scss'
import Header from './Header'
import { useSelector } from 'react-redux'
import userPicture from '../img/user.jpg'
import sprite from "../assets/sprite.svg";
import { NavLink } from 'react-router-dom'

const Home = () => {
    const userDetails = useSelector(state => state.auth.user)

    return (
        <div className="home">
            <Header />
            <div className="home__header">
                <div class="home__header--text-box">
                    <img src={userDetails.photoURL} alt="user picture" className="home__header--text-box-picture" />
                    <h1 class="heading-primary">
                        <span class="heading-primary--main">
                            Welcome, {userDetails.displayName}
                        </span>
                        <span class="heading-primary--sub">
                            You have 2 Notifications
                        </span>
                    </h1>
                </div>

                <div className="home__header--text-box-buttons">

                    <a href="#" class="btn btn--blue btn--flexed">  <svg className="home__header--icon">
                        <use href={`${sprite}#icon-cogs`}></use>
                    </svg><span>Settings</span></a>
                </div>
            </div>

            <div className="home__content">
                {/* <h1>
                    Options
                </h1> */}

                <div className="home__content--card">
                    <h1 className="home__content--card-heading">
                        Options
                    </h1>
                    <h2>
                        <NavLink to='/notes' className='link'>
                        <svg className="home__content--card-icon">
                                <use href={`${sprite}#icon-book`}></use>
                            </svg>
                            Notes
                        </NavLink></h2>

                        <h2>
                        <NavLink to='/courseOutline' className='link'>
                        <svg className="home__content--card-icon">
                                <use href={`${sprite}#icon-list`}></use>
                            </svg>
                            Course Outline
                        </NavLink></h2>

                        <h2>
                        <NavLink to='/timetables' className='link'>
                        <svg className="home__content--card-icon">
                                <use href={`${sprite}#icon-table2`}></use>
                            </svg>
                            Timetable
                        </NavLink></h2>


                </div>

            </div>

        </div>
    )
}

export default Home
