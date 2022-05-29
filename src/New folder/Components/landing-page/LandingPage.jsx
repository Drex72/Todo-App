import React, { useState } from 'react'
import './landingpage.css'
import todo from './todo.jpg'
import { Link, useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()

  const handleStarted = () => {
    navigate('/signup')
  }

  return (
    <div className="landing-page">
      <div className="logo">
        <img
          className="logo-img"
          src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png"
        />
        <h1 className="logoname">Todoist</h1>
      </div>
      <div className="innerpage">
        <div className="content">
          <div className="text">
            <div className="logo">
              <img
                className="logo-img"
                src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png"
              />
              <h2 className="logoname">Todoist</h2>
            </div>
            <h1>
              The Need for Task Management <br /> <i> It’s Time to Get Organized.</i>
            </h1>
            <p>
              Task management is the link between planning to do something and getting it done. Your
              task management software should provide an overview of work in progress that enables
              tracking from conception to completion. Enter MeisterTask: join teams everywhere who
              use our Kanban-style project boards to digitalize workflows and gain a clear overview
              of task progress. Let's get organized together!
            </p>
            <button className="getstarted" onClick={handleStarted}>
              Get Started
            </button>
          </div>
          <img className="todo-img" src={todo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
