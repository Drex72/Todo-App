import React, { useEffect } from 'react'
import { Route, Redirect, useNavigate, Outlet } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

// We'll create a wrapper for our current route
const PrivateRoute = () => {
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  let authenticate = currentUser
  return authenticate ? <Outlet /> : navigate('/signup')
  // <Route
  //   // {...rest}
  //   render={({ location }) => (authenticate ? <Outlet /> : navigate('/signup'))}
  // />
}

export default PrivateRoute
