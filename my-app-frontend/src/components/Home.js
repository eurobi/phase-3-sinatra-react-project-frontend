import React, { useState } from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";

function Home({setPosts, posts, user}){
    const [writingPost, setWritingPost] = useState(false)
    function handleClick(e){
        setWritingPost(!writingPost)
    }
    return(
        <div>
            {writingPost? <PostForm posts={posts} setPosts={setPosts} user={user}></PostForm> : <></>}
            {user!== null? <button className="post-edit-button" onClick={handleClick}>{writingPost? "Cancel" : "Create Post +"}</button> : null}

            <PostList setPosts={setPosts} user={user} posts={posts}/>
        </div>
    )
}

export default Home