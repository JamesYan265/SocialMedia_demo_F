import React from 'react';
import './Rightbar.css';
import { Users } from "../../dummyData";

export default function rightbar( {user} ) {
  const PUBLIC_FOLDER = import.meta.env.VITE_SOME_KEY;
  const HomeRightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <img src="assets/mark.png" className='markImg' />
          <span className="eventText">
            <b>Only Follower</b> Event Starting
          </span>
        </div>

        <img src="assets/event.jpeg" alt="" className="eventImg" />

        <h4 className="rightbarTitle">Online</h4>
        <ul className="rightbarFriendList">
          {/* {Users.map((user) =>(
            <Online user={user} key={user.id} />
          ))} */}

        </ul>

        <p className="promotionTitle">Advertise</p>

        <img src="assets/promotion/promotion1.jpeg" alt="" className="rightbarPromotionImg" />
        <p className="promotionName">Shopping</p>

        <img src="assets/promotion/promotion2.jpeg" alt="" className="rightbarPromotionImg" />
        <p className="promotionName">Car Shop</p>

        <img src="assets/promotion/promotion3.jpeg" alt="" className="rightbarPromotionImg" />
        <p className="promotionName">Demo Technology Cltd</p>
      </>
    )
  }

  const ProfileRgihtbar = () => {
    return (
      <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Born:</span>
          <span className="rightbarInfoKey">Hong Kong</span>
        </div>
        <h4 className='rightbarTitle'>Your Frined</h4>

        <div className="rightbarFollowings">

          <div className="rightbarFollow">
            <img src={PUBLIC_FOLDER + "/person/1.jpeg"} alt="" className="rightbaraFollowingImg" />
            <span className="nightbarFollowingName">Dummy Account</span>
          </div>
          <div className="rightbarFollow">
            <img src={PUBLIC_FOLDER + "/person/2.jpeg"} alt="" className="rightbaraFollowingImg" />
            <span className="nightbarFollowingName">Dummy Account</span>
          </div>
          <div className="rightbarFollow">
            <img src={PUBLIC_FOLDER + "/person/3.jpeg"} alt="" className="rightbaraFollowingImg" />
            <span className="nightbarFollowingName">Dummy Account</span>
          </div>
          <div className="rightbarFollow">
            <img src={PUBLIC_FOLDER + "/person/4.jpeg"} alt="" className="rightbaraFollowingImg" />
            <span className="nightbarFollowingName">Dummy Account</span>
          </div>
          <div className="rightbarFollow">
            <img src={PUBLIC_FOLDER + "/person/5.jpeg"} alt="" className="rightbaraFollowingImg" />
            <span className="nightbarFollowingName">Dummy Account</span>
          </div>

        </div>
      </div>
      </>
    )
  }

  return (
  <div className="rightbar">
    <div className="rightbarWrapper">
      {user ? <ProfileRgihtbar/> : <HomeRightbar/>}
    </div>
  </div>
  )
}
