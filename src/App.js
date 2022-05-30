import React from 'react'
import SignUp from './components/Authentication/SignUp'
import './index.css'
import { AuthProvider } from './components/contexts/AuthContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Authentication/Login'
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './components/ForgotPassword'
import TodoList from './Pages/todolist/TodoList'

import LandingPage from './Pages/landing-page/LandingPage'
{
}
const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/todo-app" element={<PrivateRoute />}>
                <Route path="/todo-app" element={<TodoList />} />
              </Route>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              {/* <Route path="/todo-app" element={<TodoList />} /> */}
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
