import React ,{useState} from 'react'
import './LoginScreen.css'
import SignUpIn from '../../Componente/SignInUp/SignInUp'

const SignInUpScreen = () => {

const [sign, setSign] = useState(false)
  return (
    <div className='loginScreen'>
        <nav className="loginScreen-nav">
            <img className='loginScreen-nav-logo' src="/netflix-logo.png" alt="logo" />
            <button className='loginScreen-nav-btn' onClick={()=>setSign(true)}>Sign in</button>
            <div className="loginScreen-nav-gredient"></div>
        </nav>
        <div className="loginScreen-body">
            {sign ? (<SignUpIn/>):(
            <>
                <h1>Unlimited films, Tv programmes and more..</h1>
                <h2>Watch anywhere. cencel at any time</h2>
                <h3>Ready to watch Enter your email to create or restart your membership.</h3>
                <div className="loginScreen-input">
                    <form>
                        <input className='loginScreen-input-email' type="email" placeholder='Email Adderess'/>
                        <button className='loginScreen-input-btn' onClick={()=>setSign(true)}>GET START</button>
                    </form>
                </div>
            </>
            )
            }
        </div>
    </div>
  )
}

export default SignInUpScreen
