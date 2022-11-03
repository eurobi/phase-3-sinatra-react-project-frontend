import React, { useState } from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";

function Home({posts, user}){
    const [writingPost, setWritingPost] = useState(false)
    function handleClick(e){
        setWritingPost(!writingPost)
    }
    return(
        <div>
            {writingPost? <PostForm></PostForm> : <></>}
            {user!== null? <button onClick={handleClick}>{writingPost? "Cancel" : "Create Post"}</button> : null}
            <PostList posts={posts}/>
        </div>
    )
}

export default Home