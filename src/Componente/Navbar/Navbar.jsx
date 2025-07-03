import React, { useEffect, useState} from 'react'
import './Navbar.css'

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
          <img className='nav-icon logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROAxZZAHvodR-TFwFwcvH18RRtMGeJl8pihg&s" alt="logo" />
          <img className='nav-icon avatar' src="https://loodibee.com/wp-content/uploads/Netflix-avatar-7.png" alt="avatar" />
        </div>
    </nav>
  )
}

export default Navber
