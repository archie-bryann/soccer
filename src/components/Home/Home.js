import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons'
import './Home.css'

function Home() {
    return (
        <div className = "home bootstrap-wrapper">
            <div className='container'>
        <div className = "row">
            <div className = "col-lg-5 col-sm-12">
                <h1>A Great Learning Progress for Soccer Players</h1>
                <p>Dreams Become Possible or Impossible By Our Actions. Your Dream of Playing Professional Football Depends On Your Action Today. Make That Dream Possible, Join Midas Today</p>
                <button className='read-more'>Read more <ArrowRight size = {18} /></button>
            </div>
            <div className="col-lg-7 col-sm-d-none">
                <img src = "images/cover.png" className = "home-bg" alt = "" />
            </div>
        </div>
        </div>
        </div>
    )
}

export default Home
