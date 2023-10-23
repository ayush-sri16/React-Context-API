import React, { useContext } from 'react'
import UserContext from '../context/UserContext'



const Profile = () => {
    const {user} = useContext(UserContext)

    if(!user) return <h1>Please Login</h1>
    console.log(user,"profile")
    const upperCaseUser = user.userName

  return (
    <h1>
        Welcome {upperCaseUser.toUpperCase()}
        
    </h1>
  )
}

export default Profile
