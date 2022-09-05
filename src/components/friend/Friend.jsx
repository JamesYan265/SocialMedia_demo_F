import React from 'react'

export default function friend( {user} ) {
  const PUBLIC_FOLDER = import.meta.env.VITE_SOME_KEY;
  console.log(PUBLIC_FOLDER + user.profilePicture);
  return (
    <li className="sidebarFriend">
        <img 
            src={PUBLIC_FOLDER + user.profilePicture} 
            alt="" 
            className="sidebarFrinedImg" 
        />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
