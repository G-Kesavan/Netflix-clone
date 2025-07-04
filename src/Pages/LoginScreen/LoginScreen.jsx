import React ,{useState} from 'react'
import './LoginScreen.css'
import SignScreen from '../../Componente/SignScreen/SignScreen'

const LoginScreen = () => {

const [sign, setSign] = useState(false)
  return (
    <div className='LoginScreen'>
        <nav className="login-nav">
            <img className='logo' src="/netflix-logo.png" alt="logo" />
            <button className='login-btn' onClick={()=>setSign(true)}>Sign in</button>
            <div className="login-gredient"></div>
        </nav>
        <div className="login-body">
            {sign ? (<SignScreen/>):(
            <>
                <h1>Unlimited films, Tv programmes and more..</h1>
                <h2>Watch anywhere. cencel at any time</h2>
                <h3>Ready to watch Enter your email to create or restart your membership.</h3>
                <div className="loginScreen-input">
                    <form>
                        <input type="email" placeholder='Email Adderess'/>
                        <button onClick={()=>setSign(true)}>Sign in</button>
                    </form>
                </div>
            </>
            )
            }
        </div>
    </div>
  )
}

export default LoginScreen
