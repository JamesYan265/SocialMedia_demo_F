import React from 'react';
import './Sidebar.css';
import { Home } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import { Notifications } from '@mui/icons-material';
import { MessageRounded } from '@mui/icons-material';
import { Bookmark } from '@mui/icons-material';
import { Person } from '@mui/icons-material';
import { Settings } from '@mui/icons-material';
import { Users } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../state/AuthContext';



export default function sidebar() {
    const {user} = useContext(AuthContext);
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <Home className='sidebarIcon'/>
                    <Link to="/" style={{textDecoration:"none", color:"black"}}>
                        <span className="sidebarListItemText">Home</span>   
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Search className='sidebarIcon'/>
                    <span className="sidebarListItemText">Search</span>
                </li>
                <li className="sidebarListItem">
                    <Notifications className='sidebarIcon'/>
                    <span className="sidebarListItemText">Notification</span>
                </li>
                <li className="sidebarListItem">
                    <MessageRounded className='sidebarIcon'/>
                    <span className="sidebarListItemText">Message</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className='sidebarIcon'/>
                    <span className="sidebarListItemText">BookMark</span>
                </li>
                <li className="sidebarListItem">
                    <Person className='sidebarIcon'/>
                    <Link to={`/profile/${user.username}`} style={{textDecoration:"none", color:"black"}}>
                        <span className="sidebarListItemText">Profile</span>
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Settings className='sidebarIcon'/>
                    <span className="sidebarListItemText">Setting</span>
                </li>
            </ul>

            <hr className="sidebarHr" />

            <ul className="sidebarFriendList">
                {/* {Users.map((user) => (
                    <Friend user={user} key={user.id}/>
                ))} */}
                
            </ul>

        </div>
    </div>
  )
}
