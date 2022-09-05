import React, { useContext, useRef, useState } from 'react';
import './Share.css';
import { Image, LineAxisOutlined } from '@mui/icons-material';
import { Gif } from '@mui/icons-material';
import { Face } from '@mui/icons-material';
import { Analytics } from '@mui/icons-material';
import { AuthContext } from '../../state/AuthContext';
import axios from 'axios';

export default function share() {
  const PUBLIC_FOLDER = import.meta.env.VITE_SOME_KEY;
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId:user._id,
      desc:desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;

      try {
        //image API - frontend
        await axios.post("/upload", data)
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post('/post', newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }

    
  }
  return (
    <div className="share">
        <div className="shareWrapper">

            <div className="shareTop">
                <img src = { user.profilePicture ? 
                        PUBLIC_FOLDER + user.profilePicture :
                        PUBLIC_FOLDER + '/person/noAvatar.png'} alt="" className="shareProgileImg" />
                <input type='text' className="shareInput" placeholder="Post Something?" ref={desc}/>
            </div>

            <hr className="shareHr" />

            <form className="shareButtons" onSubmit={(e) => handleSubmit(e)}>

              <div className="shareOptions">
                <label className="shareOption" htmlFor='file'>
                  <Image className="shareIcon" htmlColor="blue"/>
                  <span className="shareOptionText">Photo</span>
                  <input type="file" accept='.jpg, .jpeg, .png' id="file" className='file' onChange={(e) => setFile(e.target.files[0])}/>
                </label>
                <div className="shareOption">
                  <Gif className="shareIcon" htmlColor="red"/>
                  <span className="shareOptionText">Gif</span>
                </div>
                <div className="shareOption">
                  <Face className="shareIcon" htmlColor="yellow"/>
                  <span className="shareOptionText">Emoji</span>
                </div>
                <div className="shareOption">
                  <Analytics className="shareIcon" htmlColor="green"/>
                  <span className="shareOptionText">Vote</span>
                </div>
              </div>


              <button className="shareButton" type="submit">Post</button>
            </form>

        </div>
    </div>
  )
}

