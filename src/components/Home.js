import React from 'react'
import './Home.css'
import Header from './Header'
import { useSelector } from 'react-redux'

const Home = () => {
    const userDetails = useSelector(state => state.home)

    const renderedDetails = userDetails.map(detail => (
        <div>
     <h2>{detail.name}</h2>
     <p>{detail.year}</p>
     </div>
      ))

    return (
        <div className="home">
            <Header />
            <h1>Home page</h1>
            {renderedDetails}
        </div>
    )
}

export default Home
