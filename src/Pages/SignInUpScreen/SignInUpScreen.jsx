import React ,{useState} from 'react'
import './SignInUpScreen.css'
import SignUpIn from '../../Componente/SignInUp/SignInUp'

const SignInUpScreen = () => {

const [sign, setSign] = useState(false)
  return (
    <div className='SignInUpScreen'>
        <nav className="SignInUpScreen-nav">
            <img className='logo' src="/netflix-logo.png" alt="logo" />
            <button className='sign-btn' onClick={()=>setSign(true)}>Sign in</button>
            <div className="SignInUpScreen-nav-gredient"></div>
        </nav>
        <div className="SignInUpScreen-body">
            {sign ? (<SignUpIn/>):(
            <>
                <h1>Unlimited films, Tv programmes and more..</h1>
                <h2>Watch anywhere. cencel at any time</h2>
                <h3>Ready to watch Enter your email to create or restart your membership.</h3>
                <div className="SignInUpScreen-input">
                    <form>
                        <input className='input-email' type="email" placeholder='Email Adderess'/>
                        <button className='getStart-btn' onClick={()=>setSign(true)}>GET START</button>
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
