import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './Pages/Home/HomeScreen.jsx'

const App = () => {
  const user='ok'
  return (
    <div>
      <Router>
        {!user ? (
          <h1>login screen</h1>
        ):(
          <Routes>
            <Route path='/' element={<HomeScreen/>}/>
          </Routes>
        )
        }
      </Router>
    </div>
  )
}
export default App
