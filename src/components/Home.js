import React from 'react'
import './Home.scss'
import Header from './Header'
import { useSelector } from 'react-redux'
import userPicture from '../img/user.jpg'

const Home = () => {
    const userDetails = useSelector(state => state.home)


    return (
        <div className="home">
            <Header />
            <div className="home__header">
                <div class="home__header--text-box">
                    <img src={userPicture} alt="user picture" className="home__header--text-box-picture"/>
                    <h1 class="heading-primary">
                        <span class="heading-primary--main">
                            Welcome, Fortune
                        </span>
                        <span class="heading-primary--sub">
                            You have 2 Notifications
                        </span>
                    </h1>
                </div>
                <div className="home__header--text-box-buttons">
                <a href="#" class="btn btn--blue">Settings</a>
                </div>
            </div>

        </div>
    )
}

export default Home
