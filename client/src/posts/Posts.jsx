import React from 'react';
import Post from '../post/Post';
import './Posts.css';

function Posts({posts}) {
  // console.log(posts);
  return (
   <div className='post'>
    {posts.map((p)=>{
      // console.log(p)
      return <Post post={p}/>
})}
   
   </div>
  );
}

export default Posts;
