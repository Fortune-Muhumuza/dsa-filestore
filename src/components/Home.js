import React from 'react'
import './Home.css'
import Header from './Header'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <h1>Home page</h1>
            <div className='home__container'>


                <div className='home__headerCard'>
                    <h2>Peterson Mugume - Year 1</h2>
                </div>
                <h2>Course units</h2>
                <table className='home__table'>
        <tr>
                <th>Name</th>
                <th>Tutor</th>
                <th>Contact</th>
              </tr>
              <tr>
                <td>Microbiologu</td>
                <td>Dr. Bwambale Phineas</td>
                <td>0759391123</td>
              </tr>
              </table>
            </div>
        </div>
    )
}

export default Home
