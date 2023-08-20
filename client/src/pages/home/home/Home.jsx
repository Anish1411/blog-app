import React, { useEffect, useState } from "react";
import Header from "../../../header/Header";
import Posts from "../../../posts/Posts";
import SideBar from "../../../sidebar/SideBar";
import "./Home.css"
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {

  const [posts, setPosts] = useState([]);
  // const location = useLocation();
  const {search}= useLocation();
  // console.log(location);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+ search)
      // console.log(res);
      // posts = res.data;
      setPosts(res.data);
      // console.log(posts);
    }
    fetchPosts();
  }, [search])

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <SideBar />
      </div>
    </>
  )
}

export default Home;