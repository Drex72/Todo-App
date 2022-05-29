// export default Login
import { useRef, useState } from 'react'
import { auth } from '../../../firebase'
import { useAuth } from '../../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import './Authentication.css'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import Google from '../Google'

import { authentication } from '../../../firebase'

const Login = (email, password) => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { logIn, currentUser } = useAuth()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const myStyle = {
    left: '50%',
  }
  const google = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(authentication, provider)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setError()
      setLoading(true)
      await logIn(emailRef.current.value, passwordRef.current.value)
      navigate('/todo-app')
    } catch {
      setError('Failed to log in')
    }

    setLoading(false)
  }

  return (
    <div className="full-page ">
      <div className="form-box">
        <div className="switch-box">
          <div id="btn" style={myStyle}></div>
          <Link to="/signup" className="toggle-btn">
            Sign Up
          </Link>
          <Link to="/login" className="toggle-btn">
            Log in
          </Link>
        </div>
        <div className="login-page" id="info-card">
          {error && <strong className="bg-red-500 p-4 w-100">{error}</strong>}
          <form onSubmit={handleSubmit} className="input-group-login">
            <div className="email">
              <label htmlFor="email">Email</label>
              <input className="input-field" type="email" id="email" required ref={emailRef} />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className="input-field"
                type="password"
                id="password"
                required
                ref={passwordRef}
              />
            </div>
            <img src={'https://unsplash.com/photos/IzXTR79nph0'} alt="" />
            {/* <div onSubmit={handleSubmit} disabled={loading} className="submit-btn">
              Log In
            </div> */}
            <button disabled={loading} className="submit-btn " type="submit">
              Log In
            </button>
            <p style={{ textAlign: 'center' }}>or</p>
            <Google />
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
