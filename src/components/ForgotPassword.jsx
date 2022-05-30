import React from 'react'
import { useRef, useState } from 'react'
import { auth } from '../firebase'
import { useAuth } from '../components/contexts/AuthContext'
import '../index.css'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const myStyle = {}

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Sign up is an asynchronous event
    try {
      setMessage('')
      setError(' ')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Check your inbox for further instructions')
    } catch {
      setError('Failed to reset password')
    }

    setLoading(false)
  }

  return (
    <div className="full-page">
      <div className="form-box">
        <div className="switch-box">
          <Link to="/signup" className="toggle-btn">
            Sign Up
          </Link>
          <Link to="/login" className="toggle-btn">
            Log in
          </Link>
        </div>
        <div className="" id="info-card">
          <h1 className="password-reset">Password Reset</h1>
          {error && <strong className="bg-red-500 p-4 w-100">{error}</strong>}
          {message && <strong className="bg-green-500 p-4 w-100">{message}</strong>}
          <form onSubmit={handleSubmit}>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="input-field" required ref={emailRef} />
            </div>
            <button disabled={loading} className="submit-btn " type="submit">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ForgotPassword
