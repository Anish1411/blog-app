import React from 'react';
import './Post.css';

function Post() {
  return (
   <div className="post">
    <img className='postImg' src='https://thumbs.dreamstime.com/b/beautiful-sunset-over-water-tree-silhouette-nature-landscape-amazing-orange-yellow-sky-night-scene-wallpaper-birds-flying-154424473.jpg'/>
    <div className="postInfo">
        <div className="postCats">
            <span className="postcat">Muisc</span>
            <span className="postcat">Life</span>
        </div>
        <span className="postTitle"> 
          Lorem ipsum dolor sit.
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque 
        exercitationem nostrum, dolorum nemo nobis id maiores amet illo autem
        nulla beatae aut earum nihil! Voluptatem libero, dicta vitae sedquod
        aspernatur culpa ducimus eaque!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque 
        exercitationem nostrum, dolorum nemo nobis id maiores amet illo autem
        nulla beatae aut earum nihil! Voluptatem libero, dicta vitae sedquod
        aspernatur culpa ducimus eaque!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque 
        exercitationem nostrum, dolorum nemo nobis id maiores amet illo autem
        nulla beatae aut earum nihil! Voluptatem libero, dicta vitae sedquod
        aspernatur culpa ducimus eaque!
    </p>
   </div>
  );
}

export default Post;
