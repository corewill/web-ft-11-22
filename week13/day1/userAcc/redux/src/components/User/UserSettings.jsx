import React from "react";

const UserSettings = ({userLoggedIn, userSites}) => {
  return (
    <div>
      <h1>Adjust your UserSettings here</h1>
      
      <h2>User that is logged in is: {userLoggedIn.name}</h2>
    </div>
  );
};

export default UserSettings;
