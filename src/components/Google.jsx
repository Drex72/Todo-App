import React, { useState } from 'react'
import { auth } from '../firebase'
import { useAuth } from '../components/contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import './Authentication/Authentication.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const Google = () => {
  const { google, currentUser } = useAuth()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signWithGoogle = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await google()
      navigate('/todo-app')
    } catch {
      console.log('Failed to log in')
    }

    setLoading(false)
  }
  return (
    <div>
      <button className="google" onClick={signWithGoogle}>
        {' '}
        <FontAwesomeIcon icon={faGoogle} />
      </button>
    </div>
  )
}

export default Google
