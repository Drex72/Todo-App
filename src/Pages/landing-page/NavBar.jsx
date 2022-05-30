import React from 'react'

const NavBar = ({ handleStarted }) => {
  return (
    <div className="nav">
      <div className="logo">
        <img
          className="logo-img"
          src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png"
        />
        <h1 className="logoname">Todoist</h1>
      </div>
      <button className="nav-btn" onClick={handleStarted}>
        Get Started
      </button>
    </div>
  )
}

export default NavBar
