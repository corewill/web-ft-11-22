import React from 'react'
import UserProfile from './UserProfile'

const UserDashboard = ({userLoggedIn, userSites}) => {
  return (
    
    <div>
        <h1>UserDashboard</h1>
        <UserProfile userLoggedIn={userLoggedIn} userSites={userSites}/>
        </div>
  )
}

export default UserDashboard