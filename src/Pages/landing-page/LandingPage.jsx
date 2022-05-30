import React, { useState } from 'react'
import './landingpage.css'
import todo from './todo.jpg'
import background from './background.jpg'
import background2 from './bg2.jpg'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import video from './video.mp4'

const LandingPage = () => {
  const navigate = useNavigate()

  const handleStarted = () => {
    navigate('/signup')
  }

  return (
    <div className="landing-page">
      {/* <video loop autoPlay muted>
        <source src={video} type="video/mp4" />
      </video> */}
      <img src={background} alt="" className="bg" />
      <div className="content-inside">
        <NavBar handleStarted={handleStarted} />
        <div className="content">
          <div className="text">
            <h1>
              <span>
                <i>The Need for Task Management</i>{' '}
              </span>{' '}
              <br /> It’s Time to Get Organized.
            </h1>
            <p>
              Task management is the link between planning to do something and getting it done.
              Let's get organized together!
            </p>
            <div className="get">
              <input type="text" placeholder="Enter your email address" />
              <button className="getstarted" onClick={handleStarted}>
                Get Started
              </button>
            </div>
          </div>

          <img className="todo-img" src={background2} alt="" />
        </div>
      </div>

      <div className="innerpage"></div>
    </div>
  )
}

export default LandingPage
