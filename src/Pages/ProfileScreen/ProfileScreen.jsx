import './ProfileScreen.css'
import Navbar from '../../Componente/Navbar/Navbar'
import { selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const ProfileScreen = () => {
  const user = useSelector(selectUser)
  const logOut = () =>{
    signOut(auth)
  }
  return (
    <div className="ProfileScreen">
      <Navbar/>
      <div className="ProfileScreen-body">
        <h1>Edit Profile</h1>
        <div className="ProfileScreen-info">
          <img               
            src="https://loodibee.com/wp-content/uploads/Netflix-avatar-7.png" 
            alt="profile" 
          />
          <div className="ProfileScreen-details">
            <strong>{user.email}</strong>
            <div className="ProfileScreen-plans">
              <h3>Plans :</h3>
              <h4 className="plan">Basic 720p 199$ 1month</h4>
              <h4 className="plan">Medium 1080p 299$ 1month</h4>
              <h4 className="plan">Top 4k 399$ 1month</h4>
            </div>
            <button className="LogOut-btn" onClick={logOut}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
