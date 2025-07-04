import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './Pages/HomeScreen/HomeScreen.jsx'
import LoginScreen from './Pages/LoginScreen/LoginScreen.jsx'
import ProfileScreen from './Pages/ProfileScreen/ProfileScreen.jsx'

const App = () => {
  const user=null
  return (
    <div>
      <Router>
        {!user ? (
          <LoginScreen/>
        ):(
          <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/profile' element={<ProfileScreen/>}/>
          </Routes>
        )
        }
      </Router>
    </div>
  )
}
export default App
