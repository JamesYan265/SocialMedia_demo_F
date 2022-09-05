import React, { useContext, useState } from 'react';
import './Timeline.css';
import Share from '../share/Share';
import Post from '../post/Post';
import { useEffect } from 'react';
// import { Posts } from '../../dummyData';
import axios from 'axios';
import { AuthContext } from '../../state/AuthContext';


export default function Timeline( {username} ) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  //因為useEffect唔可以直接行async, 所以要用函式裝好
  useEffect(() => {
    const fetchPosts = async() => {
      const response = username 
      ? await axios.get(`/post/profile/${username}`) 
      : await axios.get(`/post/timeline/${user._id}`);
      // console.log(repsonse); sort是排順位
      setPosts(
        response.data.sort((post1, post2) => {
        return new Date(post2.createdAt) - new Date(post1.createdAt);
        })
      );
    };
    fetchPosts();
  },[username, user._id]);
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id}/>
        ))}
      </div>
    </div>
  )
}
