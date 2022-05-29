import React from 'react'
import SignUp from './New folder/Components/Authentication/SignUp'
import './index.css'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './New folder/Components/Authentication/Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import TodoList from './TodoList'
import Sign from './New folder/Components/Authentication/Sign'
import Home from './New folder/Home/Home'
import LandingPage from './New folder/Components/landing-page/LandingPage'
{
  /* <Route exact path='/' element={<PrivateRoute component={HomePage}/>}/> */
}
const App = () => {
  return (
    <div id="container w-full h-full">
      <div>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/todo-app" element={<PrivateRoute />}>
                <Route exact path="/todo-app" element={<TodoList />} />
              </Route>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/todo-app" element={<TodoList />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
