import React from 'react'
import UserDashboard from '../User/UserDashboard'

const HomePage = ({userLoggedIn, userSites}) => {
  return (
    <div>
        <h1>Home Page</h1>
        <UserDashboard userLoggedIn={userLoggedIn} userSites={userSites}/> 
    </div>
  )
}

export default HomePage