import React from 'react'
import UserSettings from './UserSettings'

const UserProfile = ({userLoggedIn, userSites}) => {

  return (
    <>
    <h1>UserProfile</h1>
    {userSites.map((site)=>{
        return(
            <div>
            <h3>
                current userSite is: {site.name} at {site.address}
            </h3>
            </div>
        )
    })}
    <div>
        <UserSettings userLoggedIn={userLoggedIn} />
    </div></>
  )
}

export default UserProfile