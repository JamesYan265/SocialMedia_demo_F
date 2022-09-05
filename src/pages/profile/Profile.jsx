import React, { useEffect, useState } from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import TimeLine from '../../components/timeline/Timeline';
import Rightbar from '../../components/rightbar/Rightbar';
import './Profile.css';
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function profile() {

  const PUBLIC_FOLDER = import.meta.env.VITE_SOME_KEY;
  
  const username = useParams().username;
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async() => {
      const response = await axios.get(`/users?username=${username}`);
      // console.log(repsonse);
      setUser(response.data);
    };
    fetchUser();
  },[]);

  return (
    <>
    <Topbar />
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img src= {user.coverPicture 
                ? PUBLIC_FOLDER + user.coverPicture 
                : PUBLIC_FOLDER + "/post/8.jpeg"} alt="" className="profileCoverImg" />
                <img src= { user.profilePicture ? 
                        PUBLIC_FOLDER + user.profilePicture :
                        PUBLIC_FOLDER + '/person/noAvatar.png'} alt="" className="profileUserImg" width="50" height="50"/>
            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>{user.username}</h4>
                <div className="profileInfoDesc">{user.desc}</div>
            </div>
        </div>
        <div className="profileRightBottom">
        <TimeLine username = {username}/>
        <Rightbar user={user}/>
        </div>
      </div>
    </div>
</>
  )
}
