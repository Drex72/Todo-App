import { useRef, useState } from 'react'
// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword } from "../firebase";
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import './Authentication.css'
import Google from '../Google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const SignUp = (email, password) => {
  // We'll return this, so we can get the status of this. To know whether it succeeded or not
  //createUserWithEmailAndPassword(auth, email, password)
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signUp, currentUser } = useAuth()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const myStyle = {
    left: '0%',
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }
    // Sign up is an asynchronous event
    try {
      setError()
      setLoading(true)
      await signUp(emailRef.current.value, passwordRef.current.value)
      navigate('/login')
    } catch {
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  return (
    <div className="full-page">
      <button
        className="back-arrow"
        onClick={() => {
          navigate('/')
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
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
        <div className="" id="info-card">
          {error ? <strong className="bg-red-500 p-4 w-100">{error}</strong> : ''}
          <form onSubmit={handleSubmit} className="register">
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
            <div className="password-confirm">
              <label htmlFor="password-confirm">Password Confirmation</label>
              <input
                className="input-field"
                type="password"
                id="password-confirm"
                required
                ref={passwordConfirmRef}
              />
            </div>
            <div className="conditions">
              <input type="checkbox" name="" className="check-box input-field" id="" />
              <span>I agree to the terms and conditions</span>
            </div>
            <p style={{ textAlign: 'center' }}>or</p>

            <Google />
            <button disabled={loading} className="submit-btn " type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SignUp
