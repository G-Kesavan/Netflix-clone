import React, { useEffect, useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navber = () => {

  const [show, setshow] = useState(false)

  const transitionNavbar = () =>{
    if(window.scrollY > 100){
      setshow(true)
    }else{
      setshow(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',transitionNavbar)
    return ()=>window.removeEventListener('scroll',transitionNavbar)
  },[]
)

console.log(show)

  return (
    <nav className={`nav ${show && 'nav-black'}`}>
        <div className="nav-contents">
          <Link to='/'>
            <img 
              className='nav-icon logo' 
              src="/netflix-logo.png" 
              alt="logo" 
            />
          </Link>
          <Link to='/profile'>
            <img 
              className='nav-icon avatar' 
              src="https://loodibee.com/wp-content/uploads/Netflix-avatar-7.png" 
              alt="avatar" 
            />
          </Link>
        </div>
    </nav>
  )
}

export default Navber
