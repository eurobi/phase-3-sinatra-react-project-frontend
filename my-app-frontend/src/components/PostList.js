import React from "react";
import Post from "./Post";

function PostList({ posts }){
    const postElements = posts.map((post => <Post key={post.created_at} post={post} />))
    return(
        <div>
            {postElements}
        </div>
    )
}


export default PostList
