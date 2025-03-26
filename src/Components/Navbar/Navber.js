import React, { useEffect, useState } from 'react'
import './Navbar.css'

export const Navber = () => {

    const [show,setshow] = useState(false)

    const transitionNavbar =()=>{
        if(window.scrollY >100){
            setshow(true)
        }
        else{
            setshow(false)
        }
    };

   useEffect(() => {
     window.addEventListener("scroll",transitionNavbar)

     return ()=>window.removeEventListener("scroll",transitionNavbar)
     }, []);
   
  return (
    <nav className='nav'>
        <div className='nav_contents'> 
            <img
            src='https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png'
            className='nav_logo'
            />
            <img
            src='https://loodibee.com/wp-content/uploads/Netflix-avatar-7.png'
            className='nav_avatar'
            />
        </div>
    </nav>
  )
}
