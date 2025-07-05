import React,{useState} from 'react'
import './SignInUp.css'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase'

const SignInUp = () => {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const SignUp =(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password)
      .then((authUser)=>{
        console.log(authUser)
      })
      .catch((err) =>{
        alert(`${err.message}`)
      })
  }

  const SignIn =(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
      .then((authUser)=>{
        console.log(authUser)
      })
      .catch((err) =>{
        alert(`${err.message}`)
      })
  }

  return (
    <div className='SignInUp'>
      <form >
        <h1 className="SignInUp-heading">Sign In</h1>
        <input 
          value={email}
          className='SignInUp-email' 
          type="email" 
          placeholder='Email' 
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input 
          value={password}
          className='SignInUp-password' 
          type="password" placeholder='Password' 
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button className="signIn-btn" onClick={SignIn} >Sign In</button>
        <p className="signUp-message">New to Netflix ? <Link onClick={SignUp}>Sign Up Now</Link></p>
      </form>
    </div>
  )
}

export default SignInUp
