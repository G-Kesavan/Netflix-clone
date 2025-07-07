import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './Pages/HomeScreen/HomeScreen.jsx'
import LoginScreen from './Pages/LoginScreen/LoginScreen.jsx'
import ProfileScreen from './Pages/ProfileScreen/ProfileScreen.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice.js'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.jsx'

const App = () => {
  const user=useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      }
      else{
        dispatch(logout())
      }
    }) 
    return unSubscribe
  },[])

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
