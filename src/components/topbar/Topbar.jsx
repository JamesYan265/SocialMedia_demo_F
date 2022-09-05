import { Search } from '@mui/icons-material';
import { Chat } from '@mui/icons-material';
import { Notifications } from '@mui/icons-material';
import "./Topbar.css";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../../state/AuthContext";

export default function Topbar() {
    const {user} = useContext(AuthContext);
    const PUBLIC_FOLDER = import.meta.env.VITE_SOME_KEY;
  return (
    <div className='topbarContainer'>
        <div className="topbarleft">
            <Link to="/" style={{textDecoration:"none", color:"black"}}>
                <span className="logo">Real Social Media</span>
            </Link>
        </div>

        <div className="topbarCenter">
            <div className="searchbar">
                <Search className='SearchIcon'/>
                <input type="text" className='searchInput'
                placeholder='Search?'/>
            </div>
        </div>

        <div className="topbarRight">
            <div className="topbarItemIcons">
                <div className="topbarIconItem">
                    <Chat />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications />
                    <span className="topbarIconBadge">2</span>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePicture ? PUBLIC_FOLDER + user.profilePicture : PUBLIC_FOLDER + '/person/noAvatar.png'} alt="" className='topbarImg' />
                </Link>
            </div>
        </div>
    </div>
  )
}
