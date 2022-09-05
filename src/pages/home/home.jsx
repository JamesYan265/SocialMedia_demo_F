import React, { useContext } from 'react';
import './home.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import TimeLine from '../../components/timeline/Timeline';
import Rightbar from '../../components/rightbar/Rightbar';
import { AuthContext } from '../../state/AuthContext';
import { useNavigate } from 'react-router-dom';




export default function home() {
  
  return (
    <>
        <Topbar />
        <div className="homeContainer">
          <Sidebar />
          <TimeLine />
          <Rightbar />
        </div>
    </>
  )
}
