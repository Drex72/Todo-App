import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'

const Sign = ({ setUser }) => {
  const [isToggled, setIsToggled] = useState(false)
  let authTitle = ''
  return (
    <div className="Sign">
      <div className="welcome">
        {isToggled ? (authTitle = 'Login') : (authTitle = 'Sign Up')}
        <h1>Welcome to our {authTitle} Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste voluptatem sit corporis,
          voluptas aut voluptatum!
        </p>
      </div>
      <div className="authentication">
        {isToggled ? (
          <Login toggle={isToggled} setToggle={setIsToggled} setUser={setUser} />
        ) : (
          <SignUp toggle={isToggled} setToggle={setIsToggled} setUser={setUser} />
        )}
      </div>
    </div>
  )
}

export default Sign
