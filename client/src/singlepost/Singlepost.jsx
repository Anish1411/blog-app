import React, { useEffect, useState } from 'react';
// import SideBar from '../../../sidebar/SideBar';
import './Singlepost.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context/Context';


function Singlepost() {
  const location = useLocation();
  //  console.log(location,"loca");
  //  console.log(location.pathname.split("/")[2])
  const path = location.pathname.split("/")[2]
  // console.log(path,"path");
  const [post, setPost] = useState({})
  const PF = "http://localhost:5000/images/"
  const { user } = useContext(Context);
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [updateMode, setupdateMode] = useState("")

  console.log(user, "user");

  const handleDelete = async () => {
    // console.log(user.username,  "username");
    try {

      await axios.delete(`/posts/${post._id}`,
        {
          data: { username: user.username },
        });
      window.location.replace("/");
    } catch (err) { }

  }
  // console.log(user);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path)
      // console.log(res);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);

      // console.log(user.username);
    }
    getPost();
  }, [path])

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`,
        {
          username: user.username,
          title,
          desc
        });
      // window.location.reload("/");
      setupdateMode(false);
    } catch (err) { }

  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {
          post.photo && (
            <img className='singlePostImg' src={PF + post.photo} alt="" />
          )
        }
        {
          updateMode ? <input type="text" value={title} className="singlePostTitleInput" autoFocus="true" onChange={(e) => setTitle(e.target.value)} /> : (
            <h1 className='singlePostTitle'>
              {title}
              {post.username === user.username && (
                <div className="singlePostEdit">
                  <i className=" singlePostIcon fa-regular fa-pen-to-square"
                    onClick={() => setupdateMode(true)}
                  ></i>
                  <i className=" singlePostIcon fa-sharp fa-solid fa-trash" onClick={handleDelete}></i>
                </div>
              )}


            </h1>
          )
        }


        <div className="singlePostInfo">
          <span className="siglePostAuthor">
            Author :
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toLocaleTimeString()}</span>
        </div>

        {
          updateMode ? (
            <textarea className='singlePostDescInput' value={desc} onChange={(e) => setDesc(e.target.value)} />) : (
            <p className="singlePostDesc">
              {desc}
            </p>
          )
        }
        {
          updateMode &&

          <button className="singlePostButton" onClick={handleUpdate}>UPDATE</button>
        }
      </div>
    </div>
  );
}

export default Singlepost;
